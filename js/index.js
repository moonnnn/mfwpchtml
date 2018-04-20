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
$(".free").children('a').css({"border-top":"3px solid #fff","border-right":"1px solid #fff","border-left":"                            1px solid #fff"});
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
$(".shequ").children('a').css({"border-top":"3px solid #ffffff","border-right":"1px solid #ffffff","border-left":"                             1px solid #ffffff"});
$(".sanjiao").css("border-color","#666666 transparent transparent transparent");
});


// banner
var $key=0;
$(".banner ol li").hover(function() {
$(this).addClass('now').siblings().removeClass('now');
$(".banner ul li").eq($(this).index()).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
$key=$(this).index();
}); 

var time=setInterval(autoplay,3000)  
function autoplay(){
   $key++;
   if($key>5){
    $key=0;
   }
   $(".banner ol li").eq($key).addClass('now').siblings().removeClass('now');
   $(".banner ul li").eq($key).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
}

$(".banner").hover(function() {
        clearInterval(time);
    }, function() {
        clearInterval(time);
        time=setInterval(autoplay, 1000);
});


// search
$(".choose ul li").hover(function() {
    $(this).addClass('current').siblings().removeClass('current');  
});


// rjji
$(".riji").mouseover(function() {
    $(".enen").eq($(this).index()).css({"color":"#ff9d00"});
});
$(".riji").mouseout(function() {
    $(".enen").eq($(this).index()).css({"color":"#333"});
});


// .yiyuan-xia-zuo
// 1.移入移除高变变变
$(".yiyuan-xia-zuo").hover(function() {
    $(".yiyuan-xia-zuo #box").animate({"bottom":"0"},500);
    $(".renshu").css({"display":"none"});
}, function() {
    $(".yiyuan-xia-zuo #box").animate({"bottom":"-134px"},500);
    $(".renshu").css({"display":"block"});
});  
// 2.跑马灯滚滚
window.onload=function(){
var speed=50;
var box=document.getElementById("box");
var left=document.getElementById("left");
var right=document.getElementById("right");
right.innerHTML=left.innerHTML;
var time=setInterval(fun, speed);
function fun(){
    if(left.offsetHeight-box.scrollTop<=0){
            box.scrollTop=0;
    }else{
        box.scrollTop++;
    }
}

}
 
});