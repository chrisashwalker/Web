$(function(){
$(".imglinks").removeAttr("href");
$(".pagefourimg").click(function(){
var src;
src=$(this).attr("data-name");
$("#imgpopupouter").show();
$("#imgpopupinner").show();
$("#imgpopup").attr("src",src);
});
$("#imgpopupouter").click(function(){
$("#imgpopupouter").hide();
$("#imgpopupinner").hide();
});
$("#imgpopupinner").click(function(){
$("#imgpopupouter").hide();
$("#imgpopupinner").hide();
});
});