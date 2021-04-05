window.onload=imgshow();

var t1;
var t2;

function imgshow(){
setTimeout(function(){
$("#mainfade").animate({opacity:"0"},500);
},3000);
setTimeout(function(){
$("#mainfade").css("background-image","url(../graphics/placeholder.png)").animate({opacity:"1"},500).delay(2500).animate({opacity:"0"},500);
},3500);
setTimeout(function(){
$("#mainfade").css("background-image","url(../graphics/placeholder.png)").animate({opacity:"1"},500).delay(2500).animate({opacity:"0"},500);
},7000);
};

setInterval(function(){
clearTimeout(t1);
clearTimeout(t2);
$("#mainfade").css("background-image","url(../graphics/placeholder.png)").animate({opacity:"1"},500).delay(2500).animate({opacity:"0"},500);
t1=setTimeout(function(){
$("#mainfade").css("background-image","url(../graphics/placeholder.png)").animate({opacity:"1"},500).delay(2500).animate({opacity:"0"},500);
},3500);
t2=setTimeout(function(){
$("#mainfade").css("background-image","url(../graphics/placeholder.png)").animate({opacity:"1"},500).delay(2500).animate({opacity:"0"},500);
},7000);
},10700);
