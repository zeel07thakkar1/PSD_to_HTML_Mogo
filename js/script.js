jQuery(document).ready(function($) {

// header transparent-------------------------------------------		
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    // $(".header_menu").css("background" , "#343a40");
	    // $(".header_menu").css({
	    	// backgroundColor: '#343a40',
        // transition: 'background-color 0.5s linear'
	    // });

      $('.header_menu').addClass('add_header');

	  }

	  else{
		  // $(".header_menu").css("background" , "transparent"); 
      $('.header_menu').removeClass('add_header'); 

	  }
  });


//--------Counter JQ--------
 $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


//-------team section hover effect-----
  $('.team_img').hover(function() {
    
    var active =$(this).children('.team_img_hover_div').fadeIn('slow');
    $('.team_img_hover_div').not(active).fadeOut('slow');

  }, function() {
      $('.team_img_hover_div').fadeOut('slow');
});

//AOS animation------------------------------------------------------
   AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });


//------mouse movement--------
     let mouseName = $('.circle');
    $('html').mousemove(function (e) {
        mouseName.show().offset({
            left: e.pageX - 50,
            top: e.pageY - 50
        })
      // $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");


    })


    //----------add active class on page load-------
    var path=window.location.href;

                $(".navbar .nav-link").each(function(){

                    if (this.href == path) {
                        var active=$(this).addClass('active');
                        $('.navbar .nav-link').not(active).removeClass('active');
                    }
                });


    //----------add active class on nav-link click-------
    
                $(".navbar .nav-link").click(function(event) {
                      var active=$(this).addClass('active');
                        $('.navbar .nav-link').not(active).removeClass('active');
                });

});
 


$(window).on("load", function(e) {

    // console.log($(window).scrollTop());
    if($(window).scrollTop()>300)
    {
        $('.header_menu').addClass('add_header');
    }

  });


