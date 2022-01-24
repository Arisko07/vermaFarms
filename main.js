$(document).ready(function () {
    lottie.loadAnimation({
        container: document.getElementById('wave-1-top'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './waves/data-color-1.json' // the path to the animation json
    });
    lottie.loadAnimation({
        container: document.getElementById('wave-1-bottom'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './waves/data-color-1.json' // the path to the animation json
    });
});