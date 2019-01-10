$(window).load(onLoad)
		.resize(onResize);

var windowWidth = $(window).outerWidth();
var windowHeight = $(window).outerHeight();
var circleSize;
var blueSize
var movePosition;
var bluePosition;

var startHour;
var startMin;
var startSec;
var startFull;
var endHour;
var endMin;
var endSec;
var endFull;
var timer;

var pageLanguage = "KOR";
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

	circleSize = $(".con_wrap .motion_wrap .motion01 .one_w").outerWidth() * 0.65;
	blueSize = circleSize * 1.4;
	
	timer = setInterval(resetTimer,1000);

	$(".all_cover").animate({"opacity":0},500,function(){
		$(this).css({"display":"none"});
	});

	loadBGM();

	autoRedirection();
}

function onResize()
{
	windowWidth = $(window).outerWidth();
	windowHeight = $(window).outerHeight();

	circleSize = $(".con_wrap .motion_wrap .motion01 .one_w").outerWidth() * 0.65;
	blueSize = circleSize * 1.4;	

	
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
	autoRedirection();
}
var nDate;
function autoRedirection()
{
	var nTime = new Date();
	var toTime = moment(nTime).tz('Asia/Seoul').format();
	var spTime = toTime.split("T")[1].split("+")[0].split(":");
	nDate = toTime.split("T")[0];
	var ntHour = spTime[0];
	var nMin = spTime[1];
	var nSec = spTime[2];

	var nFull = parseInt(ntHour*3600) + parseInt(nMin*60) + parseInt(nSec);
	var reTime = (24 * 3600) - nFull;
	
	if (nDate == "2019-01-10")
	{
		setTimeout(function(){		
			document.location.href="https://ibighit.github.io/txt/txt_1.11/index.html";
		}, (reTime * 1000));
	}else if (nDate == "2019-01-11"){
		document.location.href="https://ibighit.github.io/txt/txt_1.11/index.html";
	}	
}


var oldHour;
var oldMin;
var oldSec;
function resetTimer()
{
	var nTime = new Date();
	var toTime = moment(nTime).tz('Asia/Seoul').format();
	var spTime = toTime.split("T")[1].split("+")[0].split(":");
	startHour = spTime[0];
	startMin = spTime[1];
	startSec = spTime[2];

	startFull = parseInt(startHour*3600) + parseInt(startMin*60) + parseInt(startSec);
	endFull = 86400 - startFull;
	endHour = Math.floor(endFull / 3600);
	endMin =  Math.floor((endFull % 3600) / 60);
	endSec = Math.floor((endFull % 3600) % 60);

	var reH = 0.004166667 * startFull;
	var reM = startMin * 6;
	var reS = startSec * 6;
	
	if (endHour != oldHour)
	{
		$(".con_wrap .timer_wrap .timer li").eq(0).find(".time_img").addClass("active");
		setTimeout(function(){
			$(".con_wrap .timer_wrap .timer li").eq(0).find(".time_img").removeClass("active");
			oldHour = endHour;
		},100);
	}else{
		$(".con_wrap .timer_wrap .timer li").eq(0).find(".time_img").removeClass("active");
	}

	if (endMin != oldMin)
	{
		$(".con_wrap .timer_wrap .timer li").eq(1).find(".time_img").addClass("active");
		setTimeout(function(){
			$(".con_wrap .timer_wrap .timer li").eq(1).find(".time_img").removeClass("active");
			oldMin = endMin;
		},100);
	}else{
		$(".con_wrap .timer_wrap .timer li").eq(1).find(".time_img").removeClass("active");
	}

	if (endSec != oldSec)
	{
		$(".con_wrap .timer_wrap .timer li").eq(2).find(".time_img").addClass("active");
		setTimeout(function(){
			$(".con_wrap .timer_wrap .timer li").eq(2).find(".time_img").removeClass("active");
			oldSec = endSec;
		},100);
	}else{
		$(".con_wrap .timer_wrap .timer li").eq(2).find(".time_img").removeClass("active");
	}

	
	$(".con_wrap .timer_wrap .timer li").eq(0).find(".time_img").css({"transform":"rotate(" + reH + "deg)", "-webkit-transform":"rotate(" + reH + "deg)"});
	$(".con_wrap .timer_wrap .timer li").eq(1).find(".time_img").css({"transform":"rotate(" + reM + "deg)", "-webkit-transform":"rotate(" + reM + "deg)"});
	$(".con_wrap .timer_wrap .timer li").eq(2).find(".time_img").css({"transform":"rotate(" + reS + "deg)", "-webkit-transform":"rotate(" + reS + "deg)"});
	
	if (endHour < 10)
	{
		$(".con_wrap .timer_wrap .timer li").eq(0).find(".time_txt").html("0" + endHour +" HR");
	}else{
		$(".con_wrap .timer_wrap .timer li").eq(0).find(".time_txt").html(endHour +" HR");
	}

	if (endMin < 10)
	{
		$(".con_wrap .timer_wrap .timer li").eq(1).find(".time_txt").html("0" + endMin +" MIN");
	}else{
		$(".con_wrap .timer_wrap .timer li").eq(1).find(".time_txt").html(endMin +" MIN");
	}

	if (endSec < 10)
	{
		$(".con_wrap .timer_wrap .timer li").eq(2).find(".time_txt").html("0" + endSec +" SEC");
	}else{
		$(".con_wrap .timer_wrap .timer li").eq(2).find(".time_txt").html(endSec +" SEC");
	}

	if (reH == 0 && reM == 0 && reS == 0)
	{
		clearInterval(timer);
		if (nDate == "2019-01-11"){
			document.location.href="https://ibighit.github.io/txt/txt_1.11/index.html";
		}	
	}
}

var pageBGM = "";
var eventSound = "";
function loadBGM()
{
	pageBGM = document.getElementById("bgm_teaser");
	if (check_device() == "" && pageBGM != null && typeof(pageBGM) != "undefined")
	{
		if (pageBGM.paused)
		{
			var playPromise = pageBGM.play();
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
	eventSound = document.getElementById("bgm_teaser02");
	eventSound.onended = function() {		
		if (!$(".con_wrap .side_menu .sound_btn").hasClass("active"))
		{
			pageBGM.play();
			audioAlt("Play");
		}
	};
}

var menuShow = false;
var motionAble = false;
$(function(){
	$(".con_wrap .one_dott").hover(function(){
		$(this).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "border":"3px dotted rgba(255,255,255,.35)"});
		setTimeout(function(){
			$(".con_wrap .one_dott").css({"transition":"none", "-webkit-transition":"none"});
		},300);
	},function(){
		$(this).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "border":"3px dotted rgba(255,255,255,.15)"});
		setTimeout(function(){
			$(".con_wrap .one_dott").css({"transition":"none", "-webkit-transition":"none"});
		},300);
	});
	
	$(".con_wrap .side_menu .sound_btn button").click(function(){
		if (!motionAble)
		{
			motionAble = true;
			if ($(this).parent().hasClass("active"))
			{
				$(this).parent().removeClass("active");
				pageBGM.play();
				gtag('event','Audio Play', {'event_category' : 'BGM Play', 'event_label' : ''});
				audioAlt("Play");
			}else{
				$(this).parent().addClass("active");
				pageBGM.currentTime = 0;
				pageBGM.pause();
				eventSound.pause();
				gtag('send','event','Audio','Pause','BGM Pause','');
				audioAlt("Pause");
			}

			setTimeout(function(){
				motionAble = false;
			},300);

		}
		
		return false;
	});

	$(".con_wrap .one_dott").click(function(){
		gtag('event','Button Click', {'event_category' : 'Main Circle', 'event_label' : ''});


		$(".con_wrap .side_menu .sound_btn").removeClass("active");
		if (!$(".con_wrap .side_menu .sound_btn").hasClass("active"))
		{
			pageBGM.pause();
		}
		eventSound.play();

		movePosition = circleSize * 0.4;
		bluePosition = circleSize * 0.8;
		$(".con_wrap .motion_wrap .motion01 .one_w").css({"transition":"all 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)", "-webkit-transition":"all 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)"}).addClass("active");
		$(".con_wrap .motion_wrap .motion01 .one_bl").css({"transition":"all 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)", "-webkit-transition":"all 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)"}).addClass("active");
		$(".con_wrap .motion_wrap .motion01 .one_blue").css({"transition":"all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s", "-webkit-transition":"all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s"}).addClass("active");

		$(".con_wrap .one .valign .middle").css({"transition":"all 0.5s linear 0.3s", "-webkit-transition":"all 0.5s linear 0.3s", "opacity":"0"});
		$(".con_wrap .motion_wrap .motion01 .one_dott").css({"transition":"all 0.5s linear 0.3s", "-webkit-transition":"all 0.5s linear 0.3s", "opacity":"0"});

		$(".con_wrap .motion_wrap .motion01 .text_wrap").css({"transition":"all 0.6s linear 0.3s", "-webkit-transition":"all 0.6s linear 0.3s", "opacity":"1"});
		setTimeout(function(){
			$(".con_wrap .motion_wrap .motion01 .one_w").css({"transition":"none", "-webkit-transition":"none"});
			$(".con_wrap .motion_wrap .motion01 .one_bl").css({"transition":"none", "-webkit-transition":"none"});
			$(".con_wrap .motion_wrap .motion01 .one_blue").css({"transition":"none", "-webkit-transition":"none"});
			$(".con_wrap .motion_wrap .motion01 .text_wrap").css({"transition":"none", "-webkit-transition":"none"});
		},1000);

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
			gtag('event','Button Click', {'event_category' : 'Language Select', 'event_label' : '' + pageLanguage + ''});

			changeLanguage();

			setTimeout(function(){
				menuMotion = false;
			},500);
		}
		
		return false;
	});
	
	if (check_device() == "")
	{
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
		
		$(".con_wrap .side_menu .language > .valign > button").click(function(){
			if (!menuMotion)
			{
				menuMotion = true;
				if (!menuShow)
				{
					menuShow = true;
					$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").css({"display":"block"}).stop().animate({"opacity":1},300);
					gtag('event','Button Click', {'event_category' : 'Language Selector', 'event_label' : 'Show'});


				}else{
					menuShow = false;
					$(".con_wrap .side_menu .language .valign .lang_list .lang_inner").stop().animate({"opacity":0},300,function(){
						$(this).css({"display":"none"});
					});
					gtag('event','Button Click', {'event_category' : 'Language Selector', 'event_label' : 'Hidden'});
				}
				setTimeout(function(){
					menuMotion = false;
				},400);
			}
			return false;
		});
	}
	
});

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
			$(".con_wrap").addClass("lang_kor");
			break;
		}
		case "ENG":
		{
			oneCopy = "You and I,<Br />Different but together";
			$(".con_wrap").addClass("lang_eng");
			break;
		}
		case "CHN":
		{
			oneCopy = "互不相同的你我相遇";
			$(".con_wrap").addClass("lang_chn");
			break;
		}
		case "JPN":
		{
			oneCopy = "異なる君と僕が出会えて";
			$(".con_wrap").addClass("lang_jpn");
			break;
		}	
	}
	
	$(".con_wrap .text_wrap p").html(oneCopy);
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
})(window);

var logShow = false;
function functionLog(txt)
{
	if (logShow)
	{
		console.log(txt);
	}
}

