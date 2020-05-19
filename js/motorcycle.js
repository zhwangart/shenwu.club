// 锚点动画
$(document).ready(function ($) {
    $('.anchor').click(function (event) {
      event.preventDefault();
      $('html,body').animate({scrollTop: $(this.hash).offset().top}, 'smooth');
    });
  });