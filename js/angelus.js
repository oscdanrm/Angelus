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
    
    var altura = 40;
    console.log(altura);
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('header').addClass('menu-fixed');
		} else {
			$('header').removeClass('menu-fixed');
		}
	});
    
    $('.ancla').click(function(){
        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 2000);
        return false;
    });
        
});