<h1 align="center"> sifrr-elements </h1>
<p align="center">
  <a href="https://github.com/sifrr/sifrr-elements/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license" /></a>
  <a href="https://circleci.com/gh/sifrr/sifrr-elements"><img alt="CircleCI" src="https://img.shields.io/circleci/project/github/sifrr/sifrr-elements/master.svg?logo=circleci&style=flat-square" /></a>
  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr-elements?ref=badge_small" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr-elements.svg?type=small"/></a>
  <a href="https://coveralls.io/github/sifrr/sifrr-elements?branch=master"><img src="https://img.shields.io/coveralls/github/sifrr/sifrr-elements.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://dependabot.com/"><img src="https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot" alt="Dependabot badge" /></a>
</p>

[sifrr-dom](https://github.com/sifrr/sifrr/tree/master/packages/browser/sifrr-dom) elements

## List of Elements:

| Elements                                                | Description                                                                                        | Size                                                                                                                                                                                                                                  |                       Test                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------: |
| [sifrr-stater](./elements/sifrr-stater)                 | State manager for sifrr elements, save them to storage, replay state changes, travel to past state | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-stater/dist/sifrrstater.min.js?compression=gzip&maxAge=60)](./elements/sifrr-stater/dist/sifrrstater.min.js)                               |                       [WIP]                       |
| [sifrr-tab-container](./elements/sifrr-tab-container)   | Scrollable tabs container                                                                          | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-tab-container/dist/sifrrtabcontainer.min.js?compression=gzip&maxAge=60)](./elements/sifrr-tab-container/dist/sifrrtabcontainer.min.js)     | [OK](./elements/sifrr-tab-container/test/public)  |
| [sifrr-tab-header](./elements/sifrr-tab-header)         | Scrollable tabs header that can be used with container                                             | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-tab-header/dist/sifrrtabheader.min.js?compression=gzip&maxAge=60)](./elements/sifrr-tab-header/dist/sifrrtabheader.min.js)                 |   [OK](./elements/sifrr-tab-header/test/public)   |
| [sifrr-carousel](./elements/sifrr-carousel)             | Simple carousel with preview using tabs                                                            | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-carousel/dist/sifrrcarousel.min.js?compression=gzip&maxAge=60)](./elements/sifrr-carousel/dist/sifrrcarousel.min.js)                       |   [WIP](./elements/sifrr-carousel/test/public)    |
| [sifrr-lazy-picture](./elements/sifrr-lazy-picture)     | Lazy loading pictures when in view                                                                 | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-lazy-picture/dist/sifrrlazypicture.min.js?compression=gzip&maxAge=60)](./elements/sifrr-lazy-picture/dist/sifrrlazypicture.min.js)         |  [OK](./elements/sifrr-lazy-picture/test/public)  |
| [sifrr-lazy-img](./elements/sifrr-lazy-img)             | Lazy loading images when in view                                                                   | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-lazy-img/dist/sifrrlazyimg.min.js?compression=gzip&maxAge=60)](./elements/sifrr-lazy-img/dist/sifrrlazyimg.min.js)                         |    [OK](./elements/sifrr-lazy-img/test/public)    |
| [sifrr-progress-round](./elements/sifrr-progress-round) | Circular progress circle                                                                           | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-progress-round/dist/sifrrprogressround.min.js?compression=gzip&maxAge=60)](./elements/sifrr-progress-round/dist/sifrrprogressround.min.js) | [OK](./elements/sifrr-progress-round/test/public) |
| [sifrr-code-editor](./elements/sifrr-code-editor)       | Code editor with syntax highlighting using highlight.js                                            | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-code-editor/dist/sifrrcodeeditor.min.js?compression=gzip&maxAge=60)](./elements/sifrr-code-editor/dist/sifrrcodeeditor.min.js)             |                       [WIP]                       |
| [sifrr-showcase](./elements/sifrr-showcase)             | Showcase sifrr-dom elements                                                                        | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-showcase/dist/sifrrshowcase.min.js?compression=gzip&maxAge=60)](./elements/sifrr-showcase/dist/sifrrshowcase.min.js)                       |                       [WIP]                       |
| [sifrr-include](./elements/sifrr-include)               | Async include html/js/css with url                                                                 | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-include/dist/sifrrinclude.min.js?compression=gzip&maxAge=60)](./elements/sifrr-include/dist/sifrrinclude.min.js)                           |    [OK](./elements/sifrr-include/test/public)     |
| [sifrr-shimmer](./elements/sifrr-shimmer)               | Facebook like Shimmer used as loading screen                                                       | [![Minified + Gzipped](https://img.badgesize.io/sifrr/sifrr-elements/master/elements/sifrr-shimmer/dist/sifrrshimmer.min.js?compression=gzip&maxAge=60)](./elements/sifrr-shimmer/dist/sifrrshimmer.min.js)                           |    [WIP](./elements/sifrr-shimmer/test/public)    |

## View examples

Examples as showcase: <https://sifrr.github.io/sifrr-elements/showcase/> (only desktop friendly)

### Packages that have tests have a working example of that package in `test/public` folder

## Usage

### Using direct distribution file

#### Script tag

```html
// load sifrr-dom
<script src="https://cdn.jsdelivr.net/npm/@sifrr/dom@{version}/dist/sifrr.dom.js"></script>
// load element you want to add
<script src="https://cdn.jsdelivr.net/npm/@sifrr/elements@{version}/elements/element-name/dist/elementname.min.js"></script>
// for v0.0.3, version = 0.0.3
```

#### Script Module tag

```html
// load sifrr-dom
<script
  src="https://unpkg.com/@sifrr/sifrr-dom@{version}/dist/sifrr.dom.module.js"
  type="module"
></script>
// load element you want to add
<script
  src="https://unpkg.com/@sifrr/elements@{version}/elements/element-name/dist/elementname.module.js"
  type="module"
></script>
// for v0.0.3, version = 0.0.3
```

#### Sifrr.Dom.load

```js
Sifrr.Dom.load('element-name', {
  url: 'https://unpkg.com/@sifrr/elements@{version}/elements/element-name/dist/elementname.min.js'
});
```

### NPM module

add `@sifrr/elements` package, `yarn add @sifrr/elements`

require/import needed elements

```js
const SifrrDom = require('@sifrr/dom');
const { SifrrLazyPicture } = require('@sifrr/elements');
//or
import SifrrDom from '@sifrr/dom';
import { SifrrLazyPicture } from '@sifrr/elements';

// Register
SifrrDom.register(SifrrLazyPicture);
```

## Helpers

### LazyLoader

Since lazy-image and lazy-picture doesn't work with safari, you can simply use LazyLoader helper to lazy load native images and pictures.

Lazy loads a image when it is near viewport, using data-src and data-srcset.

usage:

```js
// In HTML <img data-src="url" class="lazy">
// // supports picture tag also

import { LazyLoader } from '@sifrr/elements';

const lazyLoader = new LazyLoader(
  rootMargin /* same as mutation observer's rootMargin, default: '0px 0px 0px 0px' */
);

lazyLoader.observe(document.querySelector('.lazy'));

// or multiple images
document.querySelectorAll('.lazy').forEach(lazyLoader.observe);

// observed images' data-src will be changed to src when rootmargin condition is satisfied
```

### MakeFullScreen

Makes any element fullscreen and back.

```js
export { makeFullScreen, exitFullScreen } from '@sifrr/elements';
// make element full screen
makeFullScreen(document.getElementById('#someElement'));
// exit full screen
exitFullScreen(document.getElementById('#someElement'));
```

## License

sifrr-elements is [MIT Licensed](./LICENSE).

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr-elements.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr-elements?ref=badge_large)

(c) [@aadityataparia](https://github.com/aadityataparia)
