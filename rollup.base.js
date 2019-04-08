const path = require('path');
const version = require('./package.json').version;
const babel = require('rollup-plugin-babel');
const terser = require('rollup-plugin-terser').terser;
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const cleanup = require('rollup-plugin-cleanup');
const postcss = require('rollup-plugin-postcss');

const external = [
  '@sifrr/dom',
  '@sifrr/fetch',
  '@sifrr/storage'
];
const globals = {
  '@sifrr/dom': 'Sifrr.Dom',
  '@sifrr/fetch': 'Sifrr.Fetch',
  '@sifrr/storage': 'Sifrr.Storage'
};
const footer = '/*! (c) @aadityataparia */';

function moduleConfig(name, root, min = false, isModule = false) {
  const filename = name.toLowerCase();
  const banner = `/*! ${name} v${version} - sifrr project | MIT licensed | https://github.com/sifrr/sifrr */`;
  const ret = {
    input: path.join(root, `./src/${filename}.js`),
    output: {
      file: path.join(root, `./dist/${filename + (isModule ? '.module' : '') + (min ? '.min' : '')}.js`),
      format: isModule ? 'es' : 'umd',
      name: name,
      banner: banner,
      footer: footer,
      sourcemap: !min,
      preferConst: true,
      globals: globals
    },
    external: external,
    plugins: [
      resolve({
        browser: !isModule
      }),
      commonjs(),
      postcss({
        extensions: ['.css', '.scss', '.sass', '.less'],
        inject: false,
        plugins: []
      })
    ]
  };

  if (!isModule) {
    ret.plugins.push(babel({
      exclude: 'node_modules/**',
      rootMode: 'upward'
    }));
  }

  ret.plugins.push(cleanup());

  if (min) {
    ret.plugins.push(terser({
      output: {
        comments: 'all'
      }
    }));
  }

  return ret;
}

module.exports = (name, __dirname, isBrowser = true) => {
  let ret = [];
  if (isBrowser) {
    ret = [
      moduleConfig(name, __dirname),
      moduleConfig(name, __dirname, true)
    ];
  }
  ret.push(moduleConfig(name, __dirname, false, true));

  return ret;
};
