$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.navbar');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', 'rgba(34,34,34,0.9)');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    var height = $(".video-container").height();
    $(".video-cover").css('height',height);
});