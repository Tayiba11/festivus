document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-containers .cards');
    const container = document.querySelector('.card-containers');
    const text = document.querySelector('.card-text');

    cards.forEach(function (card, index) {
        card.style.transition = 'transform 2s ease-in-out';
        card.style.transform = 'translateX(-100px)';
    });

    setTimeout(function () {
        cards.forEach(function (card, index) {
            card.style.transition = 'transform 2s ease-in-out';
            card.style.transform = 'rotateX(0deg) translateZ(0px) translateX(' + (index * 100) + 'px) translateY(-100px)';
        });

        // Show text with a scaling animation
        text.classList.add('show-text');
    }, 2000);
});
// -----------------------------------------------------------------------------------
(function($) {
    'use strict';
    $(function () {
        //Event carousel
        $("#events").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        margin:10,
        nav:false,
        items:4,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            480:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
            
        });
        $(".btn-event-show").collapse();
        //Events: Tooltip
        $('.event-user').tooltip({ boundary: 'window' });
        feather.replace();
    });
})(jQuery);






























