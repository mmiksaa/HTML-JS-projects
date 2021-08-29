$(function () {
  // $('.header__lang-link').on('click', function() {
  //   $(this).siblings().slideToggle();
  // });

  $('.header__lang').on('click', function () {
    $('.header__lang').toggleClass('header__lang--active');
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active');
  });

  var swiper = new Swiper('.swiper-container', {
    initialSlide: 1,
    slideToShow: 3,
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

});