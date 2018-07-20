$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        loop: true,
        dotsContainer:'.cont-dots',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    
});