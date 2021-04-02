$(function(){
    $("#mainMenu li").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(800);
    });

    $("#mainMenu li").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(300);
    });
});
