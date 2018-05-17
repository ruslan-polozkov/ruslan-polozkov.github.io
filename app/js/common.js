// headerfix
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 290) {
            $('header.header').addClass('.fix');
        }
        else {
            $('header.header').removeClass('.fix');
        }
    });
});


// slider
$(document).ready(function($) {
	$('.slider-block-content-box__inner').hide();
	$('.slider-block-content-box__inner:first').show();
	$('.slider-block-menu__list li:first').addClass('.slider-block-menu__link-active');

	$('.slider-block-menu__list li').click(function(event) {
		$('.slider-block-menu__list li').removeClass('.slider-block-menu__link-active');
		$(this).addClass('.slider-block-menu__link-active');
		$('.slider-block-content-box__inner').hide();

		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});
});


// ontop
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.ontop').addClass('.activetop');
		}	else {
			$('.ontop').removeClass('.activetop');
		}
	});
	$('.ontop').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.ontop').addClass('.activetop');
		} else {
			$('.ontop').removeClass('.activetop');
		};
	});


// preloader
	$(window).on('load', function(){
		$('.preloader').delay(1500).fadeOut('slow');
	});
// Slider


// Modal
	// открыть по кнопке
$('.js-button-campaign').click(function() { 
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {
			$(".js-overlay-campaign").fadeIn();
		}
	}, 5000);
});
