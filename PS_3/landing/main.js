$(document).ready(function() {

  $(window).scroll(function() {
    if($(this).scrollTop() >= 50) {
      if ($('#Up').is(':hidden')) {
        $('#Up').css({opacity : 1}).fadeIn('slow');
      }
    } else {
      $('#Up').stop(true, false).fadeOut('fast');
    }
  });

  $('#Up').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
  });

  $('.head_link').click(function(e){
    e.preventDefault();
    let mark = $(this).attr('href');
    const windowHeight = $(window).innerHeight();
    const anchorHeight = $(mark).innerHeight();
    let toTop = $(mark).offset().top;
    let middle = windowHeight > anchorHeight ? toTop - (windowHeight - anchorHeight)/2 : toTop;
    $('body, html').animate({scrollTop: middle}, 1000);
  });
});
