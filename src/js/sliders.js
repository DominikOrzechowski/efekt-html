/* Slider offer */



    $(function() {
        var owl = $('.sliderJS-offer'),
            owlOptions = {

                items: 1,
                singleItem: true,
                stagePadding: 0,
                smartSpeed: 450,
                //center:true,
                loop: false,
                nav: false,


                navText: [
                    "<span class='icon icon-left-chevron'></span>",
                    "<span class='icon icon-right-chevron'></span>"
                ],


                autoplay: false,

                dots: true,
                pagination: true,
                responsiveClass: true,
                responsive: {
                    0: {

                        items: 1,
                    },
                    620: {
                        items: 2,
                        margin:15
                    },
                    767: {

                        items: 2,
                          margin:15
                    },
                    992: {

                        items: 6,
                    }

                }
            };
        if ($(window).width() < 992) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ($(window).width() < 992) {
                if ($('.owl-carousel.sliderJS-offer').hasClass('off')) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if (!$('.owl-carousel.sliderJS-offer').hasClass('off')) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });


    /**/


/* Slider blog */



    $(function() {
        var owl = $('.sliderJS-blog'),
            owlOptions = {

                items: 1,
                singleItem: true,
                stagePadding: 0,
                smartSpeed: 450,
                //center:true,
                loop: false,
                nav: false,
  autoHeight:true,

                navText: [
                    "<span class='icon icon-left-chevron'></span>",
                    "<span class='icon icon-right-chevron'></span>"
                ],


                autoplay: false,

                dots: true,
                pagination: true,
                responsiveClass: true,
                responsive: {
                    0: {

                        items: 1,
                    },
                    520: {
                        items: 2,
                        margin:15,
                    },
                    767: {

                        items: 3,
                        margin:15,
                    },
                    992: {

                        items: 3,
                    }

                }
            };
        if ($(window).width() < 767) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ($(window).width() < 767) {
                if ($('.owl-carousel.sliderJS-blog').hasClass('off')) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if (!$('.owl-carousel.sliderJS-blog').hasClass('off')) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });


    /**/
$(".sliderLogo").owlCarousel({
 
 
    items:3,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:0,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    370 : {
       items:3,
    },
     420 : {
       items:3,
    },
      520 : {
       items:4,
    },
      767 : {
       items:5,
    },
      992 : {
       items:5,
       //margin:20,
    },
     1300 : {
       items:5,
       nav:true,
    },
}
   
    
  });
/*$(".sliderReference").owlCarousel({
 
 
    items:1,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:0,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    
     450 : {
       items:2,
    },
      520 : {
       items:2,
    },
      767 : {
       items:3,
    },
     1300 : {
       nav:true,
       items:3,
    },
}
   
    
  });*/
$(".sliderJS-product").owlCarousel({
 
 
    items:2,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:15,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    370 : {
       items:3,
    },
     420 : {
       items:3,
    },
      520 : {
       items:4,
    },
      992 : {
       items:5,
       
    },
    1300 : {
       items:5,
       nav:true,
    },
}
   
    
  });

$(".sliderJS-inspiration").owlCarousel({
 
 
    items:1,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:10,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
 767 : {
       
      
       margin:20
    },
    1300 : {
       
       nav:true,
       margin:35
    },
}
   
    
  });


/*function showProjectsbyCat( cat ){
  if ( cat == 'all'){
    $('#projects-hidden .item').each(function(){
       var owl   = $(".owl-carousel");
       elem      = $(this).parent().html();

     
       owl.owlCarousel('add', elem).owlCarousel('update');
       $(this).parent().remove();
    });
  }else{
    $('#projects-hidden .item.'+ cat).each(function(){
       var owl   = $(".owl-carousel");
       elem      = $(this).parent().html();

      owl.owlCarousel('add', elem).owlCarousel('update');
       $(this).parent().remove();
    });

    $('.sliderCarousel .item:not(.item.'+ cat + ')').each(function(){
       var owl   = $(".owl-carousel");
       targetPos = $(this).parent().index();
       elem      = $(this).parent();

       $( elem ).clone().appendTo( $('#projects-hidden') );
       owl.owlCarousel('remove', targetPos).owlCarousel('update');;
    });
  }
}
function refreshItem(){

 $owl.trigger('refresh.owl.carousel');
}*/
/*$(window).load(function(){
  
    //Click event for filters
    $('#tabNav li').click(function(e){
        e.preventDefault();
        $('#tabNav li').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat( cat );
        //alert('filtering'+ cat);
        var $owl = $("#sliderCarouselRealization");
         var $owl2 = $("#sliderCarousel");
       $owl.trigger('refresh.owl.carousel');
       $owl2.trigger('refresh.owl.carousel');
    });
  
   //Initialize owl carousel
    $("#sliderCarousel").owlCarousel({
 
    items:1,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:0,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    
     450 : {
       items:2,
    },
      520 : {
       items:2,
    },
      767 : {
       items:3,
    },
     1300 : {
       nav:true,
       items:3,
    },
}
    })
  const owl = $(".sliderRealization").owlCarousel({
 
    items:1,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:0,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    
     450 : {
       items:2,
    },
    
     1300 : {
       nav:true,
       items:2,
    },
}
    }
  );
});*/

jQuery.fn.extend({
  toggleOwl: function(selector, options, destroy){
    return this.each(function(){
      $(this).find(selector).filter(function(){
        return $(this).parent().is(':visible');
      }).owlCarousel(options);
      
      $(this).on('shown.bs.tab', function(event){
        var target = $(event.target.getAttribute('href')).find(selector);
        if(!target.data('owlCarousel')){
          var owl = target.owlCarousel(options).data("owlCarousel");
        }
      });
      if(destroy === true){
        $(this).on('hide.bs.tab', function(event){
          var target = $(event.target.getAttribute('href')).find(selector);
          if(target.data('owl.carousel')){
            target.data('owl.carousel').destroy();
          }
        });        
      }
    });
  }
});

jQuery(function($) { 
  $('.toggleOwl').toggleOwl(' #tab1 .owl-carousel', {
     items:1,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:0,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    
     450 : {
       items:2,
    },
      520 : {
       items:2,
    },
      767 : {
       items:3,
    },
     1300 : {
       nav:true,
       items:3,
    },
}
  });

  $('.toggleOwl').toggleOwl('.owl-carousel.style2', {
  items:1,
    singleItem:true,
    stagePadding:0,
    smartSpeed:450,
    //center:true,
    loop:false,
    margin:0,
    
   
  nav:false,
             navText: [
           "<span class='icon icon-back'></span>",
          "<span class='icon icon-next'></span>"
          ],
   

    autoplay:false,
       
       dots:true,
       pagination:true,
          responsiveClass:true,
          responsive : {
    // breakpoint from 0 up
 
    
     450 : {
       items:2,
    },
      520 : {
       items:2,
    },
      767 : {
       items:3,
    },
     1300 : {
       nav:true,
       items:3,
    },
}
  });
});

