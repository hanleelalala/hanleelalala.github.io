$(document).ready(function(){
	$(document).scroll(function(){ //scroll表示只要有上下滑動就會觸動這個event
		var y = $(this).scrollTop(); //這裡面的東西表示 只要有上下滑動就做{}裡面的事
		
		var $horizontal = $("#AboutMePosition").position().left;
		// document.getElementById("show_ScrollTop").innerHTML = y;
		if (y>5){
			$('#AboutMePosition').fadeIn(400);
			$('#AboutMePosition').slideDown(400);
			$('#AboutMePosition').css("right",Math.max(340-y,320))
		}else{
			$('#AboutMePosition').fadeOut(400);
		}
	});
});