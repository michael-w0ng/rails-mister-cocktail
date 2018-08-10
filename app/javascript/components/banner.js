import Typed from 'typed.js';

function loadDynamicBannerText() {
    new Typed('#banner-typed-text', {
        strings: ["Does this work?", "Is Pascal an idiot?", "Yes!"],
        typeSpeed: 60,
        loop: true
    });
}

export { loadDynamicBannerText };