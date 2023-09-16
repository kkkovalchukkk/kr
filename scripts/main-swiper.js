const winSectionSwiper = new Swiper('.win-section__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.win-section__swiper-navigation-right',
    prevEl: '.win-section__swiper-navigation-left',
  },
});
const reviewSectionSwiper = new Swiper('.reviews-section__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.reviews-section__swiper-navigation-right',
    prevEl: '.reviews-section__swiper-navigation-left',
  },
});
const teamSectionSwiper = new Swiper('.team-section__swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.team-section__swiper-navigation-right',
    prevEl: '.team-section__swiper-navigation-left',
  },
});
const materialsSectionSwiper = new Swiper('.materials-section__swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.materials-section__swiper-navigation-right',
    prevEl: '.materials-section__swiper-navigation-left',
  },
});
