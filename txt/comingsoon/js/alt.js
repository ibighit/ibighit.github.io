function altTextCheange()
{
	languageAlt();
	switch (pageLanguage)
	{
		case "ENG":
		{
			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","Background Music : Play");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","Background Music : Pause");
			}
			break;	
		}
		case "KOR":
		{
			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","배경음악 : 재생");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","배경음악 : 일시정지");
			}
			break;
		}
		case "CHN":
		{
			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","背景音乐 : 播放");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","背景音乐 : 暂停");
			}
			break;
		}
		case "JPN":
		{
			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","バックグラウンドミュージック : 再生");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","バックグラウンドミュージック : 一時停止");
			}
			break;
		}	
	}
}


function audioAlt(p)
{
	
	if ( p == "Play")
	{
		switch (pageLanguage)
		{
			case "ENG":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","Background Music : Pause");
				break;	
			}
			case "KOR":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","배경음악 : 일시정지");
				break;
			}
			case "CHN":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","背景音乐 : 暂停");
				break;
			}
			case "JPN":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","バックグラウンドミュージック : 一時停止");
				break;
			}			
		}

	}else {

		switch (pageLanguage)
		{
			case "ENG":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","Background Music : Play");
				break;	
			}
			case "KOR":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","배경음악 : 재생");
				break;
			}
			case "CHN":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","背景音乐 : 播放");
				break;
			}
			case "JPN":
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","バックグラウンドミュージック : 再生");
				break;
			}
		}
	}
}

function languageAlt()
{
	var selectedLanguage = $(".con_wrap .side_menu .language .valign button.lang_title").text();
	switch (selectedLanguage)
	{
		case "KOR":
		{
			$(".con_wrap .side_menu .language .valign button.lang_title").attr("title","언어 : 한국어");
			break;
		}
		case "ENG":
		{
			$(".con_wrap .side_menu .language .valign button.lang_title").attr("title","Language : English");
			break;
		}	
		case "CHN":
		{
			$(".con_wrap .side_menu .language .valign button.lang_title").attr("title","语言 : 汉语");
			break;
		}	
		case "JPN":
		{
			$(".con_wrap .side_menu .language .valign button.lang_title").attr("title","言語 : 日本語");
			break;
		}	
	}

	$(".con_wrap .side_menu .language .valign .lang_list .lang_inner button").each(function(){
		var language = $(this).text();
		
		if (selectedLanguage == "KOR")
		{
			switch (language)
			{
				case "KOR":
				{
					$(this).attr("title","언어 : 한국어");
					break;
				}	
				case "ENG":
				{
					$(this).attr("title","언어 : 영어");
					break;
				}	
				case "CHN":
				{
					$(this).attr("title","언어 : 중국어");
					break;
				}	
				case "JPN":
				{
					$(this).attr("title","언어 : 일본어");
					break;
				}	
			}
		}

		if ( selectedLanguage == "ENG" )
		{
			switch (language)
			{
				case "KOR":
				{
					$(this).attr("title","Language : Korean");
					break;
				}	
				case "ENG":
				{
					$(this).attr("title","Language : English");
					break;
				}	
				case "CHN":
				{
					$(this).attr("title","Language : Chinese");
					break;
				}	
				case "JPN":
				{
					$(this).attr("title","Language : Japanese");
					break;
				}	
			}
		}

		if ( selectedLanguage == "CHN" )
		{
			switch (language)
			{
				case "KOR":
				{
					$(this).attr("title","语言 : 韩语");
					break;
				}	
				case "ENG":
				{
					$(this).attr("title","语言 : 英语");
					break;
				}	
				case "CHN":
				{
					$(this).attr("title","语言 : 汉语");
					break;
				}	
				case "JPN":
				{
					$(this).attr("title","语言 : 日语");
					break;
				}	
			}
		}

		if ( selectedLanguage == "JPN" )
		{
			switch (language)
			{
				case "KOR":
				{
					$(this).attr("title","言語 : 韓国語");
					break;
				}	
				case "ENG":
				{
					$(this).attr("title","言語 : 英語");
					break;
				}	
				case "CHN":
				{
					$(this).attr("title","言語 : 中国語");
					break;
				}	
				case "JPN":
				{
					$(this).attr("title","言語 : 日本語");
					break;
				}	
			}
		}
	});
}