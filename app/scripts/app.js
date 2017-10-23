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


		// main product specs

		const $mainProdSpecsLink = $('.products__specs-link');

		$mainProdSpecsLink.on('click', function () {
			$(this).next().toggleClass('products__specs-list_active');
		});

		// catalog product specs

		const $catProdLnk = $('.catalog__specs-link');
		$catProdLnk.on('click', function () {
			$(this).next().toggleClass('catalog__specs-list_active');
		});
	});

})(jQuery);
