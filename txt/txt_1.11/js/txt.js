$(window).load(onLoad)
		.resize(onResize);

var windowWidth = $(window).outerWidth();
var windowHeight = $(window).outerHeight();
var pageLanguage = "KOR";
var timer;
function onLoad()
{
	checkLanguage();

	$(".con_wrap .side_menu .language > .valign > button").text(pageLanguage);

	$(".con_wrap .side_menu .language .valign .lang_list .lang_inner button").each(function(){
		if ($(this).text() == pageLanguage)
		{
			$(this).text("KOR");
		}
	});
	windowWidth = $(window).outerWidth();
	windowHeight = $(window).outerHeight();
	if (viewportWidth() < 700)
	{
		if (windowWidth > windowHeight)
		{
			if ($(".con_wrap").hasClass("vw"))
			{
				$(".con_wrap").removeClass("vw");
			}
		}else{
			if (!$(".con_wrap").hasClass("vw"))
			{
				$(".con_wrap").addClass("vw");
			}
		}
	}else{
		if ($(".con_wrap").hasClass("vw"))
		{
			$(".con_wrap").removeClass("vw");
		}
	}

	if (check_device() != "")
	{
		$(".con_wrap").addClass("device");
		if (windowWidth > windowHeight)
		{
			if (!$(".con_wrap").hasClass("device_land"))
			{
				$(".con_wrap").addClass("device_land");
			}
		}else{
			if ($(".con_wrap").hasClass("device_land"))
			{
				$(".con_wrap").removeClass("device_land");
			}
			
		}		
	}

	loadBGM();

	$(".all_cover").animate({"opacity":0},500,function(){
		$(this).css({"display":"none"});
	});

	carouselAlt();
}

function onResize()
{
	windowWidth = $(window).outerWidth();
	windowHeight = $(window).outerHeight();
	
	if (viewportWidth() < 700)
	{
		if (windowWidth > windowHeight)
		{
			if ($(".con_wrap").hasClass("vw"))
			{
				$(".con_wrap").removeClass("vw");
			}
		}else{
			if (!$(".con_wrap").hasClass("vw"))
			{
				$(".con_wrap").addClass("vw");
			}
		}
	}else{
		if ($(".con_wrap").hasClass("vw"))
		{
			$(".con_wrap").removeClass("vw");
		}
	}

	if (check_device() != "")
	{
		if (windowWidth > windowHeight)
		{
			if (!$(".con_wrap").hasClass("device_land"))
			{
				$(".con_wrap").addClass("device_land");
			}
		}else{
			if ($(".con_wrap").hasClass("device_land"))
			{
				$(".con_wrap").removeClass("device_land");
			}
			
		}		
	}
}

var motionStart_Able = false;
function motionStart()
{
	if (!motionStart_Able)
	{
		motionStart_Able = true;
		setTimeout(function(){
			motionShow();
		},2000);
		clockBGM.pause();
		pageBGM.play();
		
	}	
}

function motionShow()
{
	setTimeout(function(){
		$(".con_wrap .item_wrap .item_blue_one .one_w").css({"transition":"all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)", "-webkit-transition":"all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "box-shadow":"15px 15px 80px rgba(255,255,255,0)"});
		$(".con_wrap .item_wrap .item_blue_one .one_bl").css({"transition":"all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)", "-webkit-transition":"all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "box-shadow":"15px 15px 80px rgba(255,255,255,0)"});
		$(".con_wrap .item_wrap .item_blue_one .one_blue").css({"transition":"all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)", "-webkit-transition":"all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
		$(".con_wrap .item_blue_one .text_wrap p").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
		$(".con_wrap .item_wrap .item_symbol_single").css({"display":"block"});
	},1000);
	setTimeout(function(){
		$(".con_wrap .text_wrap > button").css({"display":"none"});
		$(".con_wrap .item_wrap .item_blue_one .one_w").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
		$(".con_wrap .item_wrap .item_blue_one .one_blue").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
		$(".con_wrap .item_wrap .item_blue_one .one_bl").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
		$(".con_wrap .item_wrap .item_blue_one").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
		$(".con_wrap .item_wrap .item_symbol_single").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1});
	},2200);
	setTimeout(function(){
		$(".con_wrap .one_blue.active").css({"transition":"all 1.5s linear", "-webkit-transition":"all 1.5s linear", "opacity":"0"});
		$(".con_wrap .item_wrap .item_symbol_single .one_rotate").css({"transition":"all 1.5s linear", "-webkit-transition":"all 1.5s linear", "transform":"rotate(-90deg)", "-webkit-transform":"rotate(-90deg)"});
		
		$(".con_wrap .item_symbol_single .text_wrap").css({"transition":"all 0.4s linear", "-webkit-transition":"all 0.4s linear", "opacity":1});

		$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(0).css({"transition":"all 1.0s linear", "-webkit-transition":"all 1.0s linear", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(0).css({"transition":"all 1.0s linear", "-webkit-transition":"all 1.0s linear", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(1).css({"transition":"all 1.0s linear 0.1s", "-webkit-transition":"all 1.0s linear 0.1s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(1).css({"transition":"all 1.0s linear 0.1s", "-webkit-transition":"all 1.0s linear 0.1s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(2).css({"transition":"all 1.0s linear 0.2s", "-webkit-transition":"all 1.0s linear 0.2s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(2).css({"transition":"all 1.0s linear 0.2s", "-webkit-transition":"all 1.0s linear 0.2s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(3).css({"transition":"all 1.0s linear 0.3s", "-webkit-transition":"all 1.0s linear 0.3s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(3).css({"transition":"all 1.0s linear 0.3s", "-webkit-transition":"all 1.0s linear 0.3s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(4).css({"transition":"all 1.0s linear 0.4s", "-webkit-transition":"all 1.0s linear 0.4s", "width":"0%", "opacity":0.7});
		$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(4).css({"transition":"all 1.0s linear 0.4s", "-webkit-transition":"all 1.0s linear 0.4s", "width":"0%", "opacity":0.7});

		setTimeout(function(){
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(0).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%"});
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(0).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%"});
		},1000);
		setTimeout(function(){
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(1).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(1).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
		},1100);
		setTimeout(function(){
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(2).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(2).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
		},1200);
		setTimeout(function(){
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(3).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(3).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
		},1300);
		setTimeout(function(){
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap .one").eq(4).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap02 .one").eq(4).css({"transition":"all 0.3s linear", "-webkit-transition":"all 0.3s linear", "width":"29%", "opacity":0});
		},1400);

		$(".con_wrap .item_wrap .item_symbol_triple").css({"display":"block"});
		setTimeout(function(){	
			$(".con_wrap .item_wrap .item_symbol_triple .txt").eq(0).css({"transition":"all 1.0s linear", "-webkit-transition":"all 1.0s linear", "opacity":1});
			$(".con_wrap .item_wrap .item_symbol_single .one_wrap").css({"transition":"all 1.0s linear", "-webkit-transition":"all 1.0s linear", "opacity":0});
		},1200);
		setTimeout(function(){ 
			$(".con_wrap .item_symbol_single .text_wrap ").css({"transition":"all 0.4s linear", "-webkit-transition":"all 0.4s linear", "opacity":0});
			$(".con_wrap .item_wrap .item_symbol_single .one_rotate").css({"transition":"all 0.5s linear", "-webkit-transition":"all 0.5s linear", "opacity":0});
			$(".con_wrap .item_wrap .item_symbol_triple .txt").css({"transition":"all 0.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "-webkit-transition":"all 0.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "opacity":1}).addClass("active");
			$(".con_wrap .item_wrap .item_symbol_triple .bg_symbol").css({"transition":"all 0.5s linear 0.7s", "-webkit-transition":"all 0.5s linear 0.7s", "opacity":1});
		},2900);

		setTimeout(function(){ 
			$(".con_wrap .item_wrap .item_symbol_triple .txt").css({"transition":"all 0.7s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.2s", "-webkit-transition":"all 0.7s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.2s", "opacity":"0.3"}).addClass("turn");;
			$(".con_wrap .item_wrap .item_symbol_triple .bg_blue").css({"transition":"all 1.0s linear", "-webkit-transition":"all 1.0s linear", "opacity":1});
			$(".con_wrap .item_wrap .item_symbol_triple .logo_txt").css({"transition":"all 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.5s", "-webkit-transition":"all 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.5s", "opacity":1});
			$(".con_wrap .item_wrap .item_symbol_triple .logo_txt img").css({"transition":"all 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.5s", "-webkit-transition":"all 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.5s", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":1});
			setTimeout(function(){
				$(".con_wrap .side_menu .language").addClass("active");
			},500);
		},5500);

	},2400);
	
	setTimeout(function(){
		
		$(".con_wrap .item_wrap .item_player").css({"display":"block"});
	}, 9900);

	setTimeout(function(){
		$(".con_wrap .item_wrap .item_symbol_triple").css({"transition":"all 1.0s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "-webkit-transition":"all 1.0s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "top":"-100%"});
		$(".con_wrap .item_wrap .item_player").css({"transition":"all 1.0s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "-webkit-transition":"all 1.0s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "top":"0%"});

		timer = setInterval(resetTimer,1000);

		setTimeout(function(){
			$(".con_wrap .item_wrap .item_player .play_list .play_list00.play_list_time").css({"display":"inline-block"});
		},1000);
	}, 10000);
}

var menuShow = false;
var motionAble = false;
$(function(){
	$(".side_menu a.symbol").click(function(){
		gtag('event','Simbol Click', {'event_category' : 'Restart Page', 'event_label' : ''});
		window.location.reload();
		return false;
	});

	$(".con_wrap .item_wrap .item_player h1 a").click(function(){
		gtag('event','Logo Click', {'event_category' : 'Restart Page', 'event_label' : ''});
		window.location.reload();
		return false;
	});

	$(".con_wrap .side_menu .sound_btn button").click(function(){
		if (!motionAble)
		{
			motionAble = true;
			if ($(this).parent().hasClass("active"))
			{
				$(this).parent().removeClass("active");
				clockBGM.play();		
				gtag('event','Audio Play', {'event_category' : 'BGM Play', 'event_label' : ''});
				audioAlt("Play");

			}else{
				$(this).parent().addClass("active");
				clockBGM.currentTime = 0;
				clockBGM.pause();			
				gtag('send','event','Audio','Pause','BGM Pause','');
				audioAlt("Pause");
			}

			setTimeout(function(){
				motionAble = false;
			},500);
		}
		
		return false;
	});

	$(".con_wrap .text_wrap > button").click(function(){
		gtag('event','Button Click', {'event_category' : 'Page Start', 'event_label' : ''});

		$(".con_wrap .text_wrap > button").animate({"opacity":0},300);
		$(".con_wrap .side_menu .sound_btn").css({"display":"none"});
		motionStart();

		if (check_device() != "")
		{
			if (!menuMotion)
			{
				menuMotion = true;
				if (menuShow)
				{
					menuShow = false;
					$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").stop().animate({"opacity":0},300,function(){
						$(this).css({"display":"none"});
					});
				}
				setTimeout(function(){
					menuMotion = false;
				},400);
			}
		}
		return false;
	});
	var menuMotion = false;
	$(".con_wrap .side_menu .language .valign .lang_list .lang_inner button").click(function(){
		if (!menuMotion)
		{
			menuMotion = true;

			var Lan = $(this).text();
			$(".con_wrap .side_menu .language > .valign > button").text(Lan);
			$(this).text(pageLanguage);
			pageLanguage = Lan;

			if (check_device() == "")
			{
				$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").stop().animate({"opacity":0},400,function(){
					$(this).css({"display":"none"});
				});
			}else{
				$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").stop().animate({"opacity":0},300,function(){
					$(this).css({"display":"none"});
				});
			}
			gtag('event','Button Click', {'event_category' : 'Language Select', 'event_label' : pageLanguage});

			changeLanguage();

			setTimeout(function(){
				menuShow = false;
				menuMotion = false;
			},300);
		}
		
		return false;
	});
	
	var popupType = "";
	$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li button").click(function(){
		var srcData = $(this).attr("data-src");
		popupType = srcData;
		switch (srcData)
		{
			case "portImg":
			{

				gtag('event','Image Show', {'event_category' : 'Image Popup', 'event_label' : $(this).attr("data-omni")});				

				$(".con_wrap .item_wrap .pop_inner .pop_item > div").css({"display":"none"});
				$(".con_wrap .item_wrap .pop_inner .pop_item > div").eq(0).css({"display":"block"});
				$(".con_wrap .item_wrap .pop_wrap").css({"display":"block","opacity":0}).animate({"opacity":1},500);
				var imgID = $(this).find("span").attr("player-id");
				$(".con_wrap .item_wrap .pop_inner .pop_item > div").eq(0).find("img").attr("src",imgID);
				break;
			}case "landImg":
			{
				gtag('event','Image Show', {'event_category' : 'Image Popup', 'event_label' : $(this).attr("data-omni")});

				$(".con_wrap .item_wrap .pop_inner .pop_item > div").css({"display":"none"});
				$(".con_wrap .item_wrap .pop_inner .pop_item > div").eq(1).css({"display":"block"});
				$(".con_wrap .item_wrap .pop_wrap").css({"display":"block","opacity":0}).animate({"opacity":1},500);

				var imgID = $(this).find("span").attr("player-id");
				$(".con_wrap .item_wrap .pop_inner .pop_item > div").eq(1).find("img").attr("src",imgID);
				break;
			}
			case "video":
			{
				gtag('event','Video Play', {'event_category' : 'Youtube Popup Video', 'event_label' : $(this).attr("data-omni")});

				if (clockBGM != null && typeof(clockBGM) != "undefined")
				{
					clockBGM.volume = 0;
				}
				
				$(".con_wrap .item_wrap .pop_inner .pop_item > div").css({"display":"none"});
				$(".con_wrap .item_wrap .pop_inner .pop_item > div").eq(2).css({"display":"block"});
				$(".con_wrap .item_wrap .pop_wrap").css({"display":"block","opacity":0}).animate({"opacity":1},500);
				
				var pID = $(this).find("span").attr("player-id");
				changeVideoAndStart_Popup(pID);
				break;
			}
		}

		
		return false;
	});
	$(".con_wrap .item_wrap .pop_inner .pop_btn button").click(function(){
		gtag('event','Button Click', {'event_category' : 'Popup Close', 'event_label' : ''});

		switch (popupType)
		{
			case "landImg":
			{
				$(".con_wrap .item_wrap .pop_wrap").animate({"opacity":0},500,function(){
					$(this).css({"display":"none"});
				});
				break;
			}case "portImg":
			{
				$(".con_wrap .item_wrap .pop_wrap").animate({"opacity":0},500,function(){
					$(this).css({"display":"none"});
				});
				break;
			}
			case "video":
			{
				if (clockBGM != null && typeof(clockBGM) != "undefined")
				{
					clockBGM.volume = 1;
				}

				playerPopup.pauseVideo();
				$(".con_wrap .item_wrap .pop_wrap").animate({"opacity":0},500,function(){
					$(this).css({"display":"none"});
				});
				break;			
			}			
		}		
		return false;
	});
	
	$(".con_wrap .side_menu .sns_btn li a").click(function(){
		gtag('event','Button Click', {'event_category' : 'Social Out Link', 'event_label' : $(this).text()});

	});

	var clickTime = "";
	if (check_device() == "")
	{
		$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time a").hover(function(){
			$(this).find(".middle").addClass("active");
		},function(){
			$(this).find(".middle").removeClass("active");
		});

		$(".con_wrap .side_menu .language > .valign").hover(function(){
			if (!menuShow)
			{
				menuShow = true;
				$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").css({"display":"block"}).stop().animate({"opacity":1},400);
			}
		},function(){
			if (menuShow)
			{
				menuShow = false;
				$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").stop().animate({"opacity":0},400,function(){
					$(this).css({"display":"none"});
				});
			}
		});
	}else{
		$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time a.valign .middle").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s"});
		$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time a").click(function(){
			gtag('event','Timer Click', {'event_category' : 'Timer Show', 'event_label' : ''});

			if (!$(this).find(".middle").hasClass("active"))
			{
				$(this).find(".middle").addClass("active");
				if (clickTime != "")
				{
					clearTimeout(clickTime);
					clickTime = "";
				}
				
				clickTime = setTimeout(function(){
					$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time a.valign .middle").removeClass("active");
				},3000);
			}
			return false;
		});
		
		$(".con_wrap .side_menu .language > .valign > button").click(function(){
			gtag('event','Button Click', {'event_category' : 'Language Selector', 'event_label' : ''});

			if (!menuMotion)
			{
				menuMotion = true;
				if (!menuShow)
				{
					menuShow = true;
					$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").css({"display":"block"}).stop().animate({"opacity":1},300);
				}else{
					menuShow = false;
					$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").stop().animate({"opacity":0},300,function(){
						$(this).css({"display":"none"});
					});
				}
				setTimeout(function(){
					menuMotion = false;
				},400);
			}
			return false;
		});
	}
	
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

var endDate;
var timeRotate = 0;
function resetTimer()
{
	endDate = new Date(2019, 1, 14, 00, 00, 00);
	
	var nTime = new Date();
	var toTime = moment(nTime).tz('Asia/Seoul').format();
	var ymdTime = toTime.split("T")[0].split("-");
	var spTime = toTime.split("T")[1].split("+")[0].split(":");
	var toTime = new Date(ymdTime[0], ymdTime[1], ymdTime[2], spTime[0], spTime[1], spTime[2]);

	var showTime = (endDate.getTime() - toTime.getTime()) / 1000;
	if (timeRotate == 0)
	{
		var resetSec = toTime.getSeconds() * 6;
		$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time .half_one").css({"transform":"rotate(" + resetSec + "deg)", "-webkit-transform":"rotate(" + resetSec + "deg)"});
		timeRotate = resetSec;
	}

	timeRotate += 6;
	if (timeRotate == 360)
	{
		timeRotate = 0;
	}

	$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time .half_one").css({"transform":"rotate(" + timeRotate + "deg)", "-webkit-transform":"rotate(" + timeRotate + "deg)"});

	var endHour = Math.floor(showTime / 3600);
	var endMin =  Math.floor((showTime % 3600) / 60);
	var endSec = Math.floor((showTime % 3600) % 60);

	var newTime = "<span>" + endHour + "</span>HR&nbsp;&nbsp;<span>" + endMin + "</span>MIN&nbsp;&nbsp;<span>" + endSec + "</span>SEC<span>";
	if (check_device() == "")
	{
		newTime = "<p><span>" + endHour + "</span>HR</p><p><span>" + endMin + "</span>MIN</p><p><span>" + endSec + "</span>SEC<span></p>";
	}
	$(".con_wrap .item_wrap .item_player .play_list .play_list00 ul li.thumb_secret_time .middle").html(newTime);
}


var pageBGM = "";
var clockBGM = "";
function loadBGM()
{
	clockBGM = document.getElementById("bgm_teaser02");
	
	if (check_device() == "" && clockBGM != null && typeof(clockBGM) != "undefined")
	{
		if (clockBGM.paused)
		{
			var playPromise = clockBGM.play();
			if (checkBrowser() != "InternetExplorer")
			{
				if (playPromise !== undefined) {
					playPromise.then(function() {
						$(".con_wrap .side_menu .sound_btn").removeClass("active");
						audioAlt("Play");
					}).catch(function(error) {
						functionLog("Audio Error : " + error);
					});
				}
			}else{
				$(".con_wrap .side_menu .sound_btn").removeClass("active");
				audioAlt("Play");
			}
		}
	}	

	pageBGM = document.getElementById("bgm_teaser");
}

function changeLanguage()
{
	var oneCopy = "";
	var singleCopy = "";
	$(".con_wrap").removeClass("lang_eng");
	$(".con_wrap").removeClass("lang_chn");
	$(".con_wrap").removeClass("lang_jpn");
	$(".con_wrap").removeClass("lang_kor");
	switch (pageLanguage)
	{
		case "KOR":
		{
			oneCopy = "서로 다른 너와 내가 만나서";
			singleCopy = "함께 찾아가는 ONE DREAM";
			$(".con_wrap").addClass("lang_kor");
			break;
		}
		case "ENG":
		{
			oneCopy = "You and I,<br />Different but together";
			singleCopy = "We explore ONE DREAM";
			$(".con_wrap").addClass("lang_eng");
			break;
		}
		case "CHN":
		{
			oneCopy = "互不相同的你我相遇";
			singleCopy = "携手共寻ONE DREAM";
			$(".con_wrap").addClass("lang_chn");
			break;
		}
		case "JPN":
		{
			oneCopy = "異なる君と僕が出会えて";
			singleCopy = "一緒に探し出す ONE DREAM";
			$(".con_wrap").addClass("lang_jpn");
			break;
		}	
	}
	
	functionLog("pageLanguage : " + pageLanguage);
	functionLog("oneCopy : " + oneCopy);
	$(".item_blue_one .text_wrap p").html(oneCopy);
	$(".item_symbol_single .text_wrap p").text(singleCopy);

	altTextCheange();
}



var languageCN = new Array("ZH", "HK", "CN", "SG", "TW");		// ZH : Chinese, HK : Chinese (Hong Kong), CN : Chinese (PRC), SG : Chinese (Singapore), TW : Chinese (Taiwan)
var languageKR = new Array("KO", "KP", "KR");					// KO : Korean, KP : Korean (North Korea), KR : Korean (South Korea)
function checkLanguage()
{
	var loadLanguage = "";
	var nav = window.navigator,
	browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
									i,
									language;

	// support for HTML 5.1 "navigator.languages"
	if (Array.isArray(nav.languages)) {
		for (i = 0; i < nav.languages.length; i++) {
			language = nav.languages[i];
			if (language && language.length) {
				loadLanguage = language;
			}
		}
	}

	// support for other well known properties in browsers
	for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
		language = nav[browserLanguagePropertyKeys[i]];
		if (language && language.length) {
			loadLanguage = language;
		}
	}

	functionLog("getFirstBrowserLanguage : " + loadLanguage + "//" + loadLanguage.length);
 	//alert("loadLanguage : " + loadLanguage + ", checkBrowser() : " + checkBrowser());

	if (loadLanguage.length == 5 && checkBrowser() != "ucbrowser")
	{
		if (languageCN.indexOf(loadLanguage.substring(3,5)) > 0)
		{
			pageLanguage = "CHN";
		}else if (languageKR.indexOf(loadLanguage.substring(3,5)) > 0)
		{
			pageLanguage = "KOR";
		}else if (loadLanguage.substring(3,5) == "JA" || loadLanguage.substring(3,5) == "JP")
		{
			pageLanguage = "JPN";
		}else{
			pageLanguage = "ENG";
		}

		changeLanguage();
		$(".con_wrap .side_menu .language > .valign > button").text(pageLanguage);

		$(".con_wrap .side_menu .language .valign .lang_list .lang_inner button").each(function(){
			if ($(this).text() == pageLanguage)
			{
				$(this).text("KOR");
			}
		});
	}else{
		findIP_language();
	}	
}


function findIP_language()
{
	$.getJSON("http://ipinfo.io", function(data) {
        ip = data.ip // 접속자 ip
        hostname = data.hostname // 접속자 hostname
        city = data.city // 접속자 도시
        region = data.region // 접속자 지역
        country = data.country // 접속자 국가
        loc = data.loc // 접속 위도, 경도
        org = data.org // ISP (인터넷 서비스 제공사업자)

		functionLog(data);
        
		if (languageCN.indexOf(country) > 0)
		{
			pageLanguage = "CHN";
		}else if (languageKR.indexOf(country) > 0)
		{
			pageLanguage = "KOR";
		}else if (country == "JA" || country == "JP")
		{
			pageLanguage = "JPN";
		}else{
			pageLanguage = "ENG";
		}

		changeLanguage();
		$(".con_wrap .side_menu .language > .valign > button").text(pageLanguage);

		$(".con_wrap .side_menu .language .valign .lang_list .lang_inner button").each(function(){
			if ($(this).text() == pageLanguage)
			{
				$(this).text("KOR");
			}
		});
    });

}

var userIP = "";
(function(window){
	var head = document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	window.getIP = function(json) {
		userIP = json.ip;
	};
	script.type= 'text/javascript';
	script.src= 'https://api.ipify.org?format=jsonp&callback=getIP';
	head.appendChild(script);

	var tag = document.createElement('script');
})(window);

var tag = document.createElement('script');




// Youtube Api 연동

var playerPopup;
function onYouTubeIframeAPIReady() {
	playerPopup = new YT.Player('yt_player', {
		height: '560',
		width: '1000',
		videoId: 'mBJKh6Muu0E',
		/*playerVars: {
			wmode: 'transparent',
			showinfo: '0'
        		},*/
		playerVars: { 'autoplay': 0, 'controls': 1,'autohide':1,'wmode':'opaque' },
		events: {
			'onReady': onPlayerReady_Top,
			'onStateChange': onPlayerStateChange
		}
	});
}

var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		done = true;
	}
}

function onPlayerReady_Top(evt) {
	//if(playerTop)
	    //evt.target.playVideo();
}

function onPlayerReady_Popup(evt) {
	//if(playerPopup)
	    //evt.target.playVideo();
}

function changeVideoAndStart_Popup(id) {
	//playerPopup.loadVideoById(id);
	if(playerPopup)
	{
		playerPopup.cueVideoById(id);
		playerPopup.playVideo();
	}
}