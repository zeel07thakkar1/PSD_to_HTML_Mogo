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

  



  // $(document).mousemove(function(event) {
  //    Act on the event 
  //   console.log("position of y :"+ event.pageY);
  // });




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



    // $(document).on("click mousemove","html",function(e){ 
    // var x = e.clientX;
    // var y = e.clientY;
    // var newposX = x -15;
    // var newposY = y - 15; 
    // $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    // });

     let mouseName = $('.circle');
    $('html').mousemove(function (e) {
        // mouseName.text(yourName);
        mouseName.show().offset({
            left: e.pageX - 50,
            top: e.pageY - 50
        })
      // $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");


    })
});


//   $(document).ready(function(){
    
//       var x = $(".header_menu").position();
//       alert("Top position: " + x.top + " Left position: " + x.left);
  
// });



$(window).on("load", function(e) {
    /* Act on the event */
    // var ypos=(e.pageY);

    // console.log($(window).scrollTop());
    if($(window).scrollTop()>300)
    {
        $('.header_menu').addClass('add_header');
    }

  });

