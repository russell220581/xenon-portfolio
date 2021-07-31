(function ($) {
	"use strict";	
    $(document).ready(function ($) {
        /* Banner Ripples */
        $(".banner-area").ripples();

        /* Portfolio Popup */
        $(".portfolio-popup").magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image',
        });

        /* Counter Up Init */
        $(".counter").counterUp({
            delay: 10,
            time: 1500
        });

        /* Testimonial Slider */
        $(".testimonial-wrap").slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            prevArrow: '',
            nextArrow: '',	
        });

    });
})(jQuery);
