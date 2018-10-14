const downBtn = document.querySelector('.hero__down-btns');

import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

downBtn.addEventListener('click', function () {

    window.scroll({ top: 600, left: 0, behavior: 'smooth' });
});