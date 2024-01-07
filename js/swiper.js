const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1.5,
	spaceBetween: 110,
	centeredSlides: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

// Начало второго слайдера для отзывов

const slider__reviews = document.querySelector('.swiper-container-reviews');

let mySwiperReviews = new Swiper(slider__reviews, {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.swiper-pagination-reviews',
		clickable: true,
	},
})