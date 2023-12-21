$(function () {

  $('.work__tabs-btn').on('click', function (e) {
    e.preventDefault();
    $('.work__tabs-btn').removeClass('work__tabs-btn--active');
    $(this).addClass('work__tabs-btn--active');

    $('.work__tabs-item').removeClass('work__tabs-item--active');
    $($(this).attr('href')).addClass('work__tabs-item--active');
  });

  $(".rate").rateYo({
    starWidth: "24px",
    ratedFill: "#4754EB",
    rating: 2,
    readOnly: true,
  });

  $('.reviews__btn').on('click', function () {
    $('.reviews__list').toggleClass('reviews__list--active')
    $('.reviews__btn').toggleClass('reviews__btn--active')
  });

  $('.question-card__top').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('question-card__top--active');
    $(this).parent().toggleClass('question-card--active');
  });

  $('.burger').on('click', function () {
    $('.header__nav').toggleClass('header__nav--active');
    $('.burger').toggleClass('burger--active');
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('body--active');
  });

   $(window).scroll(function () {
     if (this.scrollY > 50) {
       $('.header__top').addClass("header__top--sticky");
     } else {
       $('.header__top').removeClass("header__top--sticky");
     }
   });

   $(".header, .footer, .header__nav").on("click", "a", function (e) {
     e.preventDefault();
     var id = $(this).attr('href'),
       top = $(id).offset().top;
     $('body,html').animate({
       scrollTop: top
     }, 300);
   });

   $('.header__nav-link').on('click', function () {
     $('.burger').removeClass('burger--active');
     $('.header__nav').removeClass('header__nav--active');
     $('.header__top').removeClass('header__top--active');
     $('body').removeClass('body--active');
   });

});