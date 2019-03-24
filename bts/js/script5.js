$(document).ready(function(){
	var w = $(window).width();

	//console.log(w);
	if(w<=600){
		$(".slider-wrap").width(w-20);
	}
	if(w<=1300){
		$(".mheader-wrap").width(w);
		$("#content").width(w);
		$(".swiper-container").width(w-20);
		$(".swiper-slide").width(w-20);
		$(".swiper-container img").width(w-20);
	}
	
	$(window).resize(function(){
		w = $(window).width();
		
		if(w<=600){
			$(".slider-wrap").width(w-20);
		}
		if(w<=1300){
			$(".mheader-wrap").width(w);
			$("#content").width(w);
			$(".swiper-container").width(w-20);
			$(".swiper-slide").width(w-20);
			$(".swiper-container img").width(w-20);
		}
	});
	


	/*bts sites 변경*/
	$('#gourl').change(function(){
		if($("#gourl option:selected").val() != ''){
			location.href = $("#gourl option:selected").val();
		}
		//console.log("나와?");
    });
    $('#mgourl').change(function(){
		if($("#mgourl option:selected").val() != ''){
			location.href = $("#mgourl option:selected").val();
		}
		//console.log("나와?");
    });


})


$(document).ready(function() {
	set_swipe();
	function set_swipe() {
		window.mySwipe = Swipe(document.getElementById('slider'), {
			continuous: true,
			transitionEnd: function(index, elem) {
				
			}
		});

		$('.swipe-left, .swipe-left-white').click(function(e) {
			e.preventDefault();
			mySwipe.prev();
		});

		$('.swipe-right, .swipe-right-white').click(function(e) {
			e.preventDefault();
			mySwipe.next();
		});
	}
});


function fn_photo(what){

	var num = $(what).attr("data-num");
	//console.log(num);
	$(".vid-select li").removeClass("active").eq(num).addClass("active");
	$.ajax({url: "data/photo_"+num+".html", success: function(result){
        $("#viewWrap").html(result);
        $("#check").text(num);
    }});


}