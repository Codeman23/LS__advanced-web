const speakerUp = document.querySelector('.speaker__arrow');

import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

speakerUp.addEventListener('click', function () {

    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});