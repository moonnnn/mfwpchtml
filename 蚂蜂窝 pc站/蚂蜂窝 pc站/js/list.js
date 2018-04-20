$(function() {
// nav
$(".free").mouseover(function(){
$(".heng").css({"height":"56px","color":"#ff9e00"});
$(".xl").css("margin-top","0px");
$(".xl").show();
$(".free").children('a').css({"border-top":"3px solid #ff9e00","border-right":"1px solid #c9c9c9","border-left":"                            1px solid #c9c9c9"});
$(".sanjiao").css("border-color","#ff9d00 transparent transparent transparent");
});
$(".free").mouseleave(function(){
$(".heng").css({"height":"55px","color":"#333333"});
$(".xl").css("margin-top","-1px");
$(".xl").hide();
$(".free").children('a').css({"border-top":"3px solid transparent","border-right":"1px solid transparent","border-left":"                            1px solid transparent"});
$(".sanjiao").css("border-color","#666666 transparent transparent transparent");
});

$(".shequ").mouseover(function(){
$(".wa").css({"height":"56px","color":"#ff9e00"});
$(".xlt").css("margin-top","0px");
$(".xlt").show();
$(".shequ").children('a').css({"border-top":"3px solid #ff9e00","border-right":"1px solid #c9c9c9","border-left":"                            1px solid #c9c9c9"});
$(".sanjiao").css("border-color","#ff9d00 transparent transparent transparent");
});
$(".shequ").mouseleave(function(){
$(".wa").css({"height":"55px","color":"#333333"});
$(".xlt").css("margin-top","-1px");
$(".xlt").hide();
$(".shequ").children('a').css({"border-top":"3px solid transparent","border-right":"1px solid transparent","border-left":"                             1px solid transparent"});
$(".sanjiao").css("border-color","#666666 transparent transparent transparent");
});

$(".header").mouseover(function() {
  $(this).css({"background-color":"#fff"});  
});
$(".header").mouseout(function() {
  $(this).css({"background-color":"transparent"});  
});

// ling
$(".tjdf ul li").hover(function() {
  $(this).stop().addClass('dangxia').siblings().stop().removeClass('dangxia');
});

$(".sh").hover(function() {
                 $(this).children('.sh-y').css("paddingTop","62px").animate({"bottom":"0"}, 500);
            }, function() {
               $(this).children('.sh-y').css("paddingTop","0px").animate({"bottom":"-244px"}, 500);
            });
$(".sz").hover(function() {
                 $(this).children('.sz-y').css("paddingTop","62px").animate({"bottom":"0"}, 500);
            }, function() {
               $(this).children('.sz-y').css("paddingTop","0px").animate({"bottom":"-244px"}, 500);
            });


});