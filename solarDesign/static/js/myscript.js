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

$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
           
        $(this).click(function() {
 $("#nav li a").removeClass("active");
 $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

});

function validateForm() {
    var x = document.forms['form']['pincode'].value;
    alert("Hello");
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }

}
