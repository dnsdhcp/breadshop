$(function(){
    //control display of goTop button and motion
       $("#BackTop").click(function(){
           jQuery("html,body").animate({
               scrollTop:0
           },500);
       });
       $(window).scroll(function() {
           if ( $(this).scrollTop() > 150){
               $('#BackTop').fadeIn("fast");
           } else {
               $('#BackTop').stop().fadeOut("fast");
           }
       });
   });
$(function(){
    // 初始化轮播
    $(".start-slide").click(function(){
        $("#carouselExampleIndicators").carousel('cycle');
    });
    // 停止轮播
    $(".pause-slide").click(function(){
        $("#carouselExampleIndicators").carousel('pause');
    });
    // 循环轮播到上一个项目
    $(".prev-slide").click(function(){
        $("#carouselExampleIndicators").carousel('prev');
    });
    // 循环轮播到下一个项目
    $(".next-slide").click(function(){
        $("#carouselExampleIndicators").carousel('next');
    });
    // 循环轮播到某个特定的帧 
    $(".slide-one").click(function(){
        $("#carouselExampleIndicators").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#carouselExampleIndicators").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#carouselExampleIndicators").carousel(2);
    });
});