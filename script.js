$(document).ready(function(){
    

    $(".project-image").on("mouseover", function(){
        $(this).parent().find('.links').css('opacity', '1');
        $(this).parent().find('img').css('mix-blend-mode', 'overlay');
    });

    $(".project-image").on("mouseleave", function(){
        $(this).parent().find('.links').css('opacity', '0');
        $(this).parent().find('img').css('mix-blend-mode', 'normal');
    });

    $(".links").on("mouseover", function(){
        $(this).parent().find('.links').css('opacity', '1');
        $(this).parent().find('img').css('mix-blend-mode', 'overlay');
    });

    $(".links").on("mouseleave", function(){
        $(this).parent().find('img').css('mix-blend-mode', 'normal');
    });
});