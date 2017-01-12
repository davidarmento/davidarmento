$(document).ready(function(){
    $('.menu-opener').click(function(){
        $('nav').css('margin-left','0px');
    });
    $('.menu-close').click(function(){
        $('nav').css('margin-left','-302px');
    });
});
$(".bt-gotop").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
