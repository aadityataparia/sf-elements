const path = require('path');
const { getRollupConfig } = require('@sifrr/dev');
const version = require('./package.json').version;

const external = ['@sifrr/dom', '@sifrr/fetch', '@sifrr/storage', '@sifrr/template'];
const globals = {
  '@sifrr/dom': 'Sifrr.Dom',
  '@sifrr/template': 'Sifrr.Template',
  '@sifrr/fetch': 'Sifrr.Fetch',
  '@sifrr/storage': 'Sifrr.Storage'
};
const footer = '/*! (c) @aadityataparia */';

function moduleConfig(name, root, minify = false, type) {
  const filename = name.toLowerCase();
  const banner = `/*! ${name} v${version} - sifrr project | MIT licensed | https://github.com/sifrr/sifrr-elements */`;
  return getRollupConfig(
    {
      name,
      inputFile: path.join(root, `./src/${filename}.js`),
      outputFolder: path.join(root, './dist'),
      outputFileName: filename,
      minify,
      type
    },
    {
      output: {
        banner,
        footer,
        globals
      },
      external
    },
    false
  );
}

module.exports = (name, __dirname) => {
  let ret = [
    moduleConfig(name, __dirname, false, ['cjs', 'browser']),
    moduleConfig(name, __dirname, true, 'browser')
  ];

  return ret;
};
