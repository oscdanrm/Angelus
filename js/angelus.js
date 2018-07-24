$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
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