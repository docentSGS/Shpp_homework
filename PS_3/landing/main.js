$(document).ready(function() {

  $(window).scroll(function() {
    if($(this).scrollTop() >= 50) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function() {
    $('body, html').animate({scrollTop: 0},'slow');
  });

  $('.head_link').click(function(e){
    e.preventDefault();
    let id = $(this).attr('href');
    target = $(id).offset();
    $('body, html').animate({scrollTop: target.top}, 1500);
  });  
});
