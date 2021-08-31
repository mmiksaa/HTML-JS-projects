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

  $('.header__link').on('click', function () {
    $('.burger').removeClass('burger--active');
    $('.header__nav').removeClass('header__nav--active');
    $('body').removeClass('body--active');;
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

  $('.footer__title').on('click', function() {
    $(this).next().slideToggle();
    $(this).parent().toggleClass('footer__item--active')
  });

  $(".header__list, .header__logo, .footer").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });

  new WOW().init();

});