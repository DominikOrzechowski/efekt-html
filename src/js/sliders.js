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
        if ($(window).width() < 992) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ($(window).width() < 992) {
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