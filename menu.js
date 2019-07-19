$(function(){
    $(window).scroll(function(){
    if $(window).scrollTop() > $('.site-header').height() {
        $('.top').addClass('transform');   
    }
    else{
        $('.top').removeClass('transform');   
    }
    });
});
