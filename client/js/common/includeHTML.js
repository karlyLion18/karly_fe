import { getNode } from '/client/lib/index.js';

// const headerNode = getNode('#header');
let headerP = document.querySelector('#header');
console.log('🚀 ⁝ headerP', headerP);

document.onload(() => {
  headerP.onload('/client/src/page/common/header.html');
});
