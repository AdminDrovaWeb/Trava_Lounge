const sliderOne1 = document.querySelector('.swiper-main2');
const sliderTwo1 = document.querySelector('.swiper-text');

let mySwiper1 = new Swiper(sliderOne1, {
 spaceBetween: 50,
 slidesToShow: 1,
 loop: 'true',
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});

let mySliderTwo1 = new Swiper(sliderTwo1, {
  slidesToShow: 1,
  spaceBetween: 0,
  loop: 'true',
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: mySwiper1,
  },
 });


// console.log('hello')
console.log('hl')