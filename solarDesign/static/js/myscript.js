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

////////////////////////  Saving Form Validating Functions /////////////////////////

function validBill() {
        var bill = document.forms['form']['bill'].value;
        if (isNaN(bill) || bill == null){
            $('#bill').css('border-color','#d50000');
            $('#bill').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#bill').css('border-color','transparent');
            $('#bill').css('box-shadow', 'none');
        }
    }
    function validPincode() {
        var pincode = document.forms['form']['pincode'].value;
        if (isNaN(pincode)){
            $('#pincode').css('border-color','#d50000');
            $('#pincode').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#pincode').css('border-color','transparent');
            $('#pincode').css('box-shadow', 'none');
        }
    }
    function validConnectionLoad() {
        var connection_load = document.forms['form']['connection_load'].value;
        if (isNaN(connection_load)){
            $('#connection_load').css('border-color','#d50000');
            $('#connection_load').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#connection_load').css('border-color','transparent');
            $('#connection_load').css('box-shadow', 'none');
        }
    }
    function validArea() {
        var roof_area = document.forms['form']['roof_area'].value;
        if (isNaN(roof_area)){
            $('#roof_area').css('border-color','#d50000');
            $('#roof_area').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#roof_area').css('border-color','transparent');
            $('#roof_area').css('box-shadow', 'none');
        }
    }

////////////////////////////// Charts ////////////////////////////////////////
new Morris.Line({
    element: 'billChart',
    data: [
        {year: '2008', a: 20,b: 0},
        {year: '2009', a: 10,b: 10},
        {year: '2010', a: 30,b: 20},
        {year: '2011', a: 20,b: 10},
        {year: '2012', a: 40,b: 30}
    ],
    xkey: 'year',
    ykeys: ['a','b'],
    labels: ['Series A', 'Series B'],
    lineColors: ['#e65100','#311b92']
});

new Morris.Donut({
  element: 'Chart3',
  data: [
    {label: "Share 1", value: 12},
    {label: "Share 2", value: 30}
  ],
    colors: ['#e65100','#311b92']
});
