$(function() {

  'use strict';

  $('.js-menu-toggle').click(function(e) {

  	var $this = $(this);
  	if ( $('body').hasClass('show-sidebar') ) {
  		$('body').removeClass('show-sidebar');
  		$this.removeClass('active');
  	} else {
  		$('body').addClass('show-sidebar');	
  		$this.addClass('active');
  	}

  	e.preventDefault();

  });

  // click outisde offcanvas
	$(document).mouseup(function(e) {
    var container = $(".sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-sidebar') ) {
				$('body').removeClass('show-sidebar');
				$('body').find('.js-menu-toggle').removeClass('active');
			}
    }
	}); 

	$(".weight").click(function(){
		$(this).addClass("active-charge")
		$(".cbm").removeClass('active-charge')
	})
	$(".cbm").click(function(){
		$(this).addClass("active-charge")
		$(".weight").removeClass('active-charge')
	})


	// coutdown 
	var counter = 180;
	var interval = setInterval(function() {
		counter--;
		if (counter <= 0) {
				clearInterval(interval);
			$('#timer').html("<a href='email_confirmation.html' style='color:blue;'>Resend</a>");  
			return;
		}else{
			$('#time').text("( " + counter + " )");

		}
	}, 1000);







    

});