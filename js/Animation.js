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