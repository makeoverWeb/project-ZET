$(function() {
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
  });
