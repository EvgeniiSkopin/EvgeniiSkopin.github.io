$(document).ready(function(){
    $("#box1 .colorLayer").animate({left:"0px"},300);
    $("#box1 .colorLayer").delay(400).animate({left:"500px"},300);
    $("#box1 .backGroundLayer").delay(800).animate({left:"0px"},500);
    $("#box1 .title").animate({left:"0px"});
    
    $("#box2 .colorLayer").delay(300).animate({left:"0px"},300);
    $("#box2 .colorLayer").delay(400).animate({left:"500px"},300);
    $("#box2 .backGroundLayer").delay(1100).animate({left:"0px"},500);
    $("#box2 .title").delay(300).animate({left:"0px"});
    
});

