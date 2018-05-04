$(document).ready(function(){		
	    $('#slider1').parallax("center", 0, 0.1, true);
	    $('#slider2').parallax("center", 900, 0.1, true);
	    $('#slider3').parallax("center", 2900, 0.1, true);
		$('#slider4').parallax("center", 900, 0.1, true);
		});
$(document).ready(function(){
  var height = $(window).height();
  $("#slider1").height(height);
  $(window).scroll(function(){
     height = $(window).height();
     $("#slider1").height(height);
  });
  

});