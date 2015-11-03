

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*   Superslides Slider
	/* ----------------------------------------------------------- */
	jQuery('#slides').superslides({
      animation: 'slide',
      play: '8000'
    });
	
	
	/* ----------------------------------------------------------- */
	/*  Fixed Top Menubar
	/* ----------------------------------------------------------- */

	// For fixed top bar
       $(window).scroll(function(){
        if($(window).scrollTop() >100 /*or $(window).height()*/){
            $(".navbar-fixed-top").addClass('past-main');   
        }
    else{    	
      $(".navbar-fixed-top").removeClass('past-main');
      }
    });


	/* ----------------------------------------------------------- */
	/*  Featured Slider
	/* ----------------------------------------------------------- */
	

    $('.featured_slider').slick({
      dots: true,
      infinite: true,      
      speed: 800,
      arrows:false,      
      slidesToShow: 1,
      slide: 'div',
      autoplay: true,
      fade: true,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    });




	/* ----------------------------------------------------------- */
	/*   Wow smooth animation
	/* ----------------------------------------------------------- */

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();


	
	/* ----------------------------------------------------------- */
	/*  SLIDER EQUIPO
	/* ----------------------------------------------------------- */

		$('.team_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});




	

    /* ----------------------------------------------------------- */
	/*  SLIDER MARCAS
	/* ----------------------------------------------------------- */

    $('.clients_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});





	/* ----------------------------------------------------------- */
	/*  SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */


	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });


	/* ----------------------------------------------------------- */
	/* PRELOADER 
	/* ----------------------------------------------------------- */ 

	  jQuery(window).load(function() { // se asegura de que todo el sitio este cargado
      $('#status').fadeOut(); // fade out de la animacion
      $('#preloader').delay(100).fadeOut('slow'); // fade out del preloader que cubre la pagina
      $('body').delay(100).css({'overflow':'visible'});
    })


	/* ----------------------------------------------------------- */
	/*  MENU SCROLL 
	/* ----------------------------------------------------------- */


	// Seleccion en cache
	var lastId,
	topMenu = $("#top-menu"),
	topMenuHeight = topMenu.outerHeight()+13,
	// todos los items listados
	menuItems = topMenu.find("a"),
	// ancla al item listado
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});


	$(window).scroll(function(){
	   
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	  
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	     
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
	})


	/* ----------------------------------------------------------- */
	/*  MOBILE MENU
	/* ----------------------------------------------------------- */ 

	$('.navbar-nav').on('click', 'li a', function() {
	  $('.navbar-collapse').collapse('hide');
	});

	
});