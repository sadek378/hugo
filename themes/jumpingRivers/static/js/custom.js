(function($){


		$('.slider').owlCarousel({
			items					: 5,
			autoPlay				: true,
			transitionStyle			: 'loop',
			autoPlay				: 2000,
			itemsDesktop			: [1320, 4],
			itemsDesktop			: [1020, 3],
			itemsTablet				: [778, 2],
			itemsMobile				: [500, 1],
			itemsMobile				: [472, 1],
			itemsMobile				: [450, 1],
			itemsMobile				: [400, 1],
			itemsMobile				: [350, 1],
		});

		$('.menu-res').click(function(){

			$('.main-menu').toggle();

		});


// Scrolltop Section js


	$(window).scroll(function(){

		if($(this).scrollTop()>1000 ){

			$(".scrolltop").fadeIn();

		}else{
			$(".scrolltop").fadeOut();
		}


	});

	$(".scrolltop").click(function(){
		$("html, body").animate({scrollTop:0}, 2000);
	});

// Tabs section


$('.tabs-section').tabs();


$('ul li').click(function(){

	$(this).addClass('active').siblings().removeClass('active');

});



})(jQuery)