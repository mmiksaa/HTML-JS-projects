$(function () {

  $('.header__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1400,
    pauseOnHover: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
       arrows: false,
        slidesToShow: 1
      }
    },
  ]
  });

  $('.burger').on('click', function(){
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active');
  });

  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $('.header__top').addClass("header__top--sticky");
    } else {
      $('.header__top').removeClass("header__top--sticky");
    }
  });

  if ($(window).width() <= 768) {
    $('.services__name-wrapp').on('click', function () {
      $(this).next().slideToggle('.services__wrapp');
      $(this).parent().toggleClass('services__item--active');
    });

    $('.services__item').removeClass('services__item--active');
  }

  if ($(window).width() > 768) {
    $('.services__item').on('click', function () {
      $('.services__item ').removeClass('services__item--active');
      $(this).addClass('services__item--active');
    });
  }

  if ($(window).width() <= 768) {
    $('.consultation__form').addClass('form--white');
  }

  $('.portfolio__open-btn').on('click', function () {
    $('.portfolio__open').removeClass('portfolio__open--active');
  });

  $('.portfolio__box').on('click', function () {
    $('.portfolio__open').removeClass('portfolio__open--active');
    $(this).siblings('.portfolio__open').addClass('portfolio__open--active');
  });
  
  $('.price__link').on('click', function (e) {
    e.preventDefault();
    $('.price__link').removeClass('price__link--active');
    $(this).addClass('price__link--active');

    $('.price__list').removeClass('price__list--active');
    $($(this).attr('href')).addClass('price__list--active');
  });

  $(".header, .footer, .header__nav").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });

  $('.header__link').on('click', function () {
    $('.burger').removeClass('burger--active');
    $('.header__nav').removeClass('header__nav--active');
    $('body').removeClass('body--active');
  });

  new WOW().init();

});