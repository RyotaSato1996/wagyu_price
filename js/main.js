$(function(){
  $('#page-top').click(function(){
    var speed = 600;
    $('body, html').animate({ scrollTop: 0 }, speed);
  })
})