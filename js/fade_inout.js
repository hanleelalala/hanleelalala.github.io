$(document).ready(function(){
	$(document).scroll(function(){ //scroll表示只要有上下滑動就會觸動這個event
		var y = $(this).scrollTop(); //這裡面的東西表示 只要有上下滑動就做{}裡面的事
		// document.getElementById("show_ScrollTop").innerHTML = y;
		if (y>-1){
			$('#AboutMePosition').addClass("is-visible")
		}
		if (y>100){
			$('#DTPosition').addClass("is-visible")
		}
		if (y>400){
			$('#BikeeskyPosition').addClass("is-visible")
		}
		if (y>950){
			$('#ExchangeStudentPosition').addClass("is-visible")
		}
		if (y>1280){
			$('#ESEPosition').addClass("is-visible")
		}
		if (y>1400){
			$('#RAPosition').addClass("is-visible")
		}
		if (y>2000){
			$('#HDRPosition').addClass("is-visible")
		}

	});
});

