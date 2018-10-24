$(function() {

  //mmenu

  $('#my-menu').mmenu({
    extensions: [ 'widescreen', 'theme-dark', 'effect-menu-slide', 'pagedim-black' ],
    navbar: {
      title: '<img src="img/logo.svg" alt="">'
    },
    offCanvas: {
      position  : 'right'
    }
  });
  var api = $('#my-menu').data('mmenu');
  api.bind('opened', function () {
    $('.hamburger').addClass('is-active');
  }).bind('closed', function () {
    $('.hamburger').removeClass('is-active');
  });

  //scroll

  $('.go_to').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 900);scroll_el
    }
    return false;
  });

  //slider

   $('.owl-carousel').owlCarousel({
    loop:true, //прокручивание элементов по кругу
    margin: 50, //отступы межу элементами
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:2000, //Время смены слайда
    nav:true, //отобразить элементы управления
    responsive:{
      0:{
        items:1
      } //при ширине окна < 992 отображать 1 элемент
    }
  });

   //



  });
