import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';


(function ($) {
	$(function () {
		svg4everybody();

		// Slider

		$('.slider__list').slick({
			slidesToShow: 1,
			infinite: true,
			dots: true,
			fade: true,
			cssEase: 'linear',
			arrows: false,
			appendDots: '.slider__dots'
		});

	});

})(jQuery);

