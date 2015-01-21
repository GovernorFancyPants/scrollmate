(function() {
    var firstLoad = true;
    show();

    document.addEventListener('scroll', function() {
        firstLoad = false;
        show();
    });

    function show() {
        var els_to_animate = document.getElementsByClassName('animate-in');

        Array.prototype.slice.call(els_to_animate).forEach(function(el, index, arr) {
            var bottom_of_object = window.pageYOffset + el.getBoundingClientRect().top + el.offsetHeight - (el.offsetHeight / 2);
            var bottom_of_window = window.pageYOffset + window.innerHeight;

            if (bottom_of_window > bottom_of_object) {
                //el.classList.remove('animate-in');
                el.className = el.className.replace(/\banimate-in\b/, '');
                if (!firstLoad) {
                    var anim_type = el.getAttribute('data-animation-type');
                    //el.classList.add('animated');
                    el.className += " animated";
                    if (anim_type) {
                        //el.classList.add(' ' + anim_type);
                        el.className += ' ' + anim_type;
                    } else {
                        //el.classList.add('fadeInUp');
                        el.className += ' fadeInUp';
                    }
                }
            }
        });
    }

})();