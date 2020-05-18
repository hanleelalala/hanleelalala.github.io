$(document).ready(function(){
	$(document).scroll(function(){
		var y = $(this).scrollTop();
		
		var $horizontal = $("#AboutMePosition").position().left;
		// document.getElementById("show_ScrollTop").innerHTML = y;
		if (y>5){
			$('#AboutMePosition').fadeIn(1000);
			$('#AboutMePosition').slideDown(1000);
			$('#AboutMePosition').css("right",Math.max(340-y,320))
		}else{
			$('#AboutMePosition').fadeOut(1000);
		}
	});
});