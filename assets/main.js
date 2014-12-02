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