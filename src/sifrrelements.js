// elements
export { default as SifrrLazzyImg } from '../elements/sifrr-lazy-img/src/sifrrlazyimg';
export { default as SifrrLazyPicture } from '../elements/sifrr-lazy-picture/src/sifrrlazypicture';
export { default as SifrrStater } from '../elements/sifrr-stater/src/sifrrstater';
export { default as SifrrTabs } from '../elements/sifrr-tabs/src/sifrrtabs';
export { default as SifrrShowcase } from '../elements/sifrr-showcase/src/sifrrshowcase';
export { default as SifrrCodeEditor } from '../elements/sifrr-code-editor/src/sifrrcodeeditor';
export { default as SifrrProgressRound } from '../elements/sifrr-progress-round/src/sifrrprogressround';
export { default as SifrrShimmer } from '../elements/sifrr-shimmer/src/sifrrshimmer';

// helpers
export { animate as animate } from '../helpers/animate';
export { wait as wait } from '../helpers/animate';
import { animate } from '../helpers/animate';
if (window && window.Sifrr) Sifrr.animate = animate;
// window.animate = animate;
