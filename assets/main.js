$(document).ready(function() {
    $(document).bind('scroll',function() {
        if ($(this).scrollTop() > 180) {
            $('.navbar').addClass('minified');
            $('#logo').attr('id','logo-small');
        }
        else {
            $('.navbar').removeClass('minified');
            $('#logo-small').attr('id','logo');
        }
    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
  });
});