
/* Header scroll */

$(window).scroll(function() {
    if ($(".fixed-top").offset().top > 100) {
        $(".fixed-top").addClass("top-nav-collapse");
        $("body").addClass("clear-padding");
     
        
       
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
         $("body").removeClass("clear-padding");
        
     
    }
});


/* nav mobile */

$('.header-main__btn-nav.nav-open').click(function() {
    $('.header-main__nav').slideToggle(200);
    $(this).addClass('d-none');
    $('.header-main__btn-nav.nav-close').addClass('active-nav d-inline');
    $('html').addClass('overflow-hidden');

})
$('.header-main__btn-nav.nav-close').click(function() {
    $('.header-main__nav').slideToggle(200);
    $('.header-main__btn-nav.nav-open').removeClass('d-none');
    $('.header-main__btn-nav.nav-close').removeClass('active-nav d-inline');
    $('html').removeClass('overflow-hidden');
})

/**/


/* Retina */

if(window.devicePixelRatio >= 1.2){
 	var elems = document.getElementsByTagName('*');
 	for(var i=0;i < elems.length;i++){
 	var attr = elems[i].getAttribute('data-2x');
 	if(attr){
	 	elems[i].style.cssText += 'background-image: url('+attr+')';
 	}
 }
}

/* / */

/* footer mobile link */

$('.footer-main__block__nav__title').click(function() {
    var $this = $(this);
    $this.parent().find('.footer-main__block__nav__list').slideToggle();
    $this.toggleClass('active');
    $this.parents().siblings().find('.footer-main__block__nav__list').slideUp();
    $this.parents().siblings().find('.footer-main__block__nav__title').removeClass('active');

});

/* / */

/* counter */

if ($('#counterJs').length) {
    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#counterJs').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-item').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });
}


 /* / */

 /* Tabs */

$('.tab-nav__item li').click(function(){


  
   $('#' + $(this).attr('data-content-id')).siblings().removeClass('d-block');
  $('#' + $(this).attr('data-content-id')).addClass('d-block');

    $('#' + $(this).attr('data-content-id')).removeClass('all-content');
   $('.' + $(this).attr('data-content-class')).siblings().removeClass('d-block all-content');
  $('.' + $(this).attr('data-content-class')).addClass('d-block');
 $('.content-tab').removeClass('all-content');
$('.showAll').removeClass('d-block');

$(this).parent().find('li').addClass('active');
 $(this).siblings().removeClass('active');
  
});

$('.tab-nav__item li[data-content-class="content-all"]').click(function(){

 $('.content-tab').addClass('all-content');
  
  
$('.showAll').addClass('d-block');



});
/**/




  $(".gallery  a").jqPhotoSwipe({
    forceSingleGallery: true,
    closeEl:true,
captionEl: true,
fullscreenEl: false,
zoomEl: false,
shareEl: false,

arrowEl: true,
preloaderEl: false,
  });

function firstItemAnimation() {
  $("#offer-section").removeClass("opacity-0");
  
}
setTimeout(firstItemAnimation, 500);


$('.checkbox').click(function() {
   if($("input[type='checkbox']").is(':checked')) { 

                $(this).toggleClass('current');
                
    }
});

$('.variant-item').click(function() {
   if($("input[type='radio']").is(':checked')) { 

                $(this).addClass('current');
                 $(this).parents().siblings().find('.variant-item').removeClass('current');
    }
});