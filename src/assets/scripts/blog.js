import "./parts/_hiddenmenu";

//переключение пунктов при скролинге

(function() {
    'use strict';

    var section = document.querySelectorAll(".blog__item");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.blog-link_active').setAttribute('class', 'blog-link');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'blog-link_active');
            }
        }
    };
})();

