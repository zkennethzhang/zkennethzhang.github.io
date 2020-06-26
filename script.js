		$('#abouttext').flowtype({	
			fontRatio : 33
		});
		$('h1').flowtype({
			fontRatio : 7
		});
		$('h2').flowtype({
			fontRatio : 25
		});
		$('h3').flowtype({
			fontRatio : 15
		});
		$('h4').flowtype({
			fontRatio : 25
		});
		$('.navbar a').flowtype({
			fontRatio:4.5
		});
		$('.navbar #exp').flowtype({
			fontRatio:6
		});
		$('ul').flowtype({
			fontRatio:32
		});
		$('#message h2').flowtype({
			fontRatio:20
		});
		$('#message h3').flowtype({
			fontRatio:30
		});
		$('#resume').flowtype({
			fontRatio:15
		});
		$('.half input').flowtype({
			fontRatio:11
		});
		$('.full textarea').flowtype({
			fontRatio:25
		});
		$('#buttonCont button').flowtype({
			fontRatio:3.9
		});
		 $('#footer div').flowtype({
			fontRatio:90
		});
		$(document).ready(function () {
		    $('h1, .navbar, .navbar a').fadeIn(2000);
		});

	  $(window).scroll(function(event) {
	  
	  $(".module").each(function(i, el) {
	    var el = $(el);
	    if (el.visible(true)) {
	      el.addClass("come-in"); 
	    } 
	  });

	  $(window).scroll(function() {
	  	if(! $('#name').visible())
	  		$('.navbar a').css('background-color', 'rgb(255, 255, 255, 0.2)');
	  	else
	  		$('.navbar a').css('background-color', 'rgb(255, 255, 255, 0)');
	  	if($('#experience').visible(true) && !$('#bg2').visible(true) || $('#contact').visible(true))
	  	{
	  	 	$('#logo').attr("src","img/LTlogoInvert.svg");
	  	}
	  	else
	  		$('#logo').attr("src","img/LTlogo.svg");

	  	});

	  $('.experienceSec').mouseenter(function(){
			 $(this).css('border-color','#ffe6d9');
		});
	  $('.experienceSec').mouseleave(function(){
			 $(this).css('border-color','#ffa475');
		});
	  
	});
	    
