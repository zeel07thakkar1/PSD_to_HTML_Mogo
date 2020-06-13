jQuery(document).ready(function($) {

// header transparent-------------------------------------------		
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    // $(".header_menu").css("background" , "#343a40");
	    $(".header_menu").css({
	    	background: '#343a40',
        transition: 'background-color 0.5s linear'
	    });

	  }

	  else{
		  $(".header_menu").css("background" , "transparent");  

	  }
  });





$(".img_gallery_link").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.portfolio-item').fadeTo('slow',1);
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".portfolio-item").not('.'+value).fadeOut('1000');
            $('.portfolio-item').filter('.'+value).fadeIn('1000');
            
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
  AOS.init();

});
