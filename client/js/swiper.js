let swiper1 = new Swiper ('.main-banner .swiper1', {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".swiper-button-prev.a1",
    nextEl: ".swiper-button-next.a1",
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
})

let swiper2 = new Swiper('.recommend-list .swiper2', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 18,
  navigation: {
    prevEl: ".swiper-button-prev.a2",
    nextEl: ".swiper-button-next.a2",
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
});

let swiper3 = new Swiper('.recommend-list .swiper3', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 18,
  navigation: {
    prevEl: ".swiper-button-prev.a3",
    nextEl: ".swiper-button-next.a3",
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
});