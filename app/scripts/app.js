import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widget';
// import 'jquery-ui/ui/effect';
// import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/ui/widgets/spinner';

(function ($) {
	$(function () {
		svg4everybody();

		/**
		 *
		 * Slider
		 *
		 */

		$('.slider__list').slick({
			slidesToShow: 1,
			infinite: true,
			dots: true,
			fade: true,
			cssEase: 'linear',
			arrows: false,
			appendDots: '.slider__dots'
		});


		/**
		 *
		 * main product specs
		 *
		 */

		const $mainProdSpecsLink = $('.products__specs-link');

		$mainProdSpecsLink.on('click', function () {
			$(this).next().toggleClass('products__specs-list_active');
		});

		/**
		 *
		 * catalog product specs
		 *
		 */

		const $catProdLnk = $('.catalog__specs-link');
		$catProdLnk.on('click', function () {
			$(this).next().toggleClass('catalog__specs-list_active');
		});

		/**
		 *
		 * relative product specs
		 *
		 */

		const $relProdLnk = $('.relative__specs-link');
		$relProdLnk.on('click', function () {
			$(this).next().toggleClass('relative__specs-list_active');
		});

		/**
		 *
		 * Basket quant spinner
		 *
		 */

		const $quantInput = $('.quant__input');
		const $quantUp = $('.quant__button_up');
		const $quantDown = $('.quant__button_down');


		$quantInput.click(function() {
		   return false;
		})

		$quantInput.spinner({
		   max: 1000,
		   min: 1,
		   step: 1
		});

		$quantDown.click(function() {
		   $(this).parent().find('.quant__input').spinner('stepDown');
		   return false;
		});
		$quantUp.click(function() {
		   $(this).parent().find('.quant__input').spinner('stepUp');
		   return false;
		});


		/**
		 *
		 * Tabs
		 *
		 */

		const tabsNavLink = $('.filter__item a');
		const tabsNavLinkActive = 'filter__item_active';
		const tab = $('.tabs__tab');
		const tabActive = 'tabs__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).parent().addClass(tabsNavLinkActive);
			$(this).parent().siblings().removeClass(tabsNavLinkActive);
			const tabCurrent = $(this).attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();

			// carouselSecond.reloadSlider();

			console.log(tabCurrent);

		});



	});

})(jQuery);
