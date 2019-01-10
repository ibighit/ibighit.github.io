function altTextCheange()
{
	languageAlt();
	carouselAlt();
	switch (pageLanguage)
	{
		case "ENG":
		{
			$('.con_wrap .item_wrap .item_blue_one .text_wrap button span').text('Learn More');

			$('.con_wrap .item_wrap .item_symbol_triple .txt').eq(0).find('span').text('TOMORROW X TOGETHER Logo');

			$('.con_wrap .side_menu .symbol .sym span').text('TOMORROW X TOGETHER Logo');

			$('.con_wrap .side_menu .sns_btn li').eq(0).find('a').attr('title','Twitter : Open in a New Window');
			$('.con_wrap .side_menu .sns_btn li').eq(1).find('a').attr('title','Instagram : Open in a New Window');
			$('.con_wrap .side_menu .sns_btn li').eq(2).find('a').attr('title','Facebook : Open in a New Window');
			$('.con_wrap .side_menu .sns_btn li').eq(3).find('a').attr('title','YouTube : Open in a New Window');
			$('.con_wrap .side_menu .sns_btn li').eq(4).find('a').attr('title','Weibo : Open in a New Window');
			$('.con_wrap .side_menu .sns_btn li').eq(5).find('a').attr('title','Youku : Open in a New Window');

			$('.con_wrap .item_wrap .pop_inner .pop_btn button').attr('title','Close Layered Popup');

			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(0).find('button').attr('title','View Photo : Open in a Layered Popup');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(1).find('button').attr('title','View Photo : Open in a Layered Popup');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(2).find('button').attr('title','Watch Video : Open in a Layered Popup');
			
			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","Background Music : Play");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","Background Music : Pause");
			}

			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(0).find('button').text('Photo of TOMORROW X TOGETHER member YEONJUN.');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(1).find('button').text('Photo of TOMORROW X TOGETHER member YEONJUN.');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(2).find('button').prepend('Video of TOMORROW X TOGETHER member YEONJUN.');
			$('.con_wrap .item_wrap .pop_inner .pop_item > div img').attr('alt','Photo of TOMORROW X TOGETHER member YEONJUN.');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('.play_title').text('YEONJUN');
			break;	
		}
		case "KOR":
		{
			$('.con_wrap .item_wrap .item_blue_one .text_wrap button span').text('더 알아보기');

			$('.con_wrap .item_wrap .item_symbol_triple .txt').eq(0).find('span').text('TOMORROW X TOGETHER 로고 입니다.');

			$('.con_wrap .side_menu .symbol .sym span').text('TOMORROW X TOGETHER 로고 입니다.');

			$('.con_wrap .side_menu .sns_btn li').eq(0).find('a').attr('title','트위터 : 새 창에서 열기');
			$('.con_wrap .side_menu .sns_btn li').eq(1).find('a').attr('title','인스타그램 : 새 창에서 열기');
			$('.con_wrap .side_menu .sns_btn li').eq(2).find('a').attr('title','페이스북 : 새 창에서 열기');
			$('.con_wrap .side_menu .sns_btn li').eq(3).find('a').attr('title','유튜브 : 새 창에서 열기');
			$('.con_wrap .side_menu .sns_btn li').eq(4).find('a').attr('title','웨이보 : 새 창에서 열기');
			$('.con_wrap .side_menu .sns_btn li').eq(5).find('a').attr('title','유쿠 : 새 창에서 열기');

			$('.con_wrap .item_wrap .pop_inner .pop_btn button').attr('title','레이어 팝업 닫기');

			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(0).find('button').attr('title','사진 보기 : 레이어 팝업으로 열기');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(1).find('button').attr('title','사진 보기 : 레이어 팝업으로 열기');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(2).find('button').attr('title','영상 보기 : 레이어 팝업으로 열기');

			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","배경음악 : 재생");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","배경음악 : 일시정지");
			}

			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(0).find('button').text('TOMORROW X TOGETHER 멤버 연준의 사진입니다.');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(1).find('button').text('TOMORROW X TOGETHER 멤버 연준의 사진입니다.');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(2).find('button').prepend('TOMORROW X TOGETHER 멤버 연준의 영상입니다.');
			$('.con_wrap .item_wrap .pop_inner .pop_item > div img').attr('alt','TOMORROW X TOGETHER 멤버 연준의 사진입니다.');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('.play_title').html('<p>연준 <span><span>(</span>YEONJUN<span>)</span></span></p>');
			break;
		}
		case "CHN":
		{
			$('.con_wrap .item_wrap .item_blue_one .text_wrap button span').text('了解更多');

			$('.con_wrap .item_wrap .item_symbol_triple .txt').eq(0).find('span').text('TOMORROW X TOGETHER 商标');

			$('.con_wrap .side_menu .symbol .sym span').text('TOMORROW X TOGETHER 商标');

			$('.con_wrap .side_menu .sns_btn li').eq(0).find('a').attr('title','推特 : 在新窗口打开');
			$('.con_wrap .side_menu .sns_btn li').eq(1).find('a').attr('title','Instagram : 在新窗口打开');
			$('.con_wrap .side_menu .sns_btn li').eq(2).find('a').attr('title','Facebook : 在新窗口打开');
			$('.con_wrap .side_menu .sns_btn li').eq(3).find('a').attr('title','YouTube : 在新窗口打开');
			$('.con_wrap .side_menu .sns_btn li').eq(4).find('a').attr('title','微博 : 在新窗口打开');
			$('.con_wrap .side_menu .sns_btn li').eq(5).find('a').attr('title','优酷 : 在新窗口打开');

			$('.con_wrap .item_wrap .pop_inner .pop_btn button').attr('title','关闭弹窗');

			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(0).find('button').attr('title','观看照片 : 弹窗打开');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(1).find('button').attr('title','观看照片 : 弹窗打开');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(2).find('button').attr('title','观看视频 : 弹窗打开');

			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","背景音乐 : 播放");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","背景音乐 : 暂停");
			}

			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(0).find('button').text('TOMORROW X TOGETHER成员YEONJUN的照片');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(1).find('button').text('TOMORROW X TOGETHER成员YEONJUN的照片');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(2).find('button').prepend('TOMORROW X TOGETHER成员YEONJUN的视频');
			$('.con_wrap .item_wrap .pop_inner .pop_item > div img').attr('alt','TOMORROW X TOGETHER成员YEONJUN的照片');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('.play_title').text('YEONJUN');
			break;
		}
		case "JPN":
		{
			$('.con_wrap .item_wrap .item_blue_one .text_wrap button span').text('さらに詳しく');

			$('.con_wrap .item_wrap .item_symbol_triple .txt').eq(0).find('span').text('TOMORROW X TOGETHERのロゴ');

			$('.con_wrap .side_menu .symbol .sym span').text('TOMORROW X TOGETHERのロゴ');

			$('.con_wrap .side_menu .sns_btn li').eq(0).find('a').attr('title','Twitter : 新しいウィンドウで開く');
			$('.con_wrap .side_menu .sns_btn li').eq(1).find('a').attr('title','Instagram : 新しいウィンドウで開く');
			$('.con_wrap .side_menu .sns_btn li').eq(2).find('a').attr('title','Facebook : 新しいウィンドウで開く');
			$('.con_wrap .side_menu .sns_btn li').eq(3).find('a').attr('title','YouTube : 新しいウィンドウで開く');
			$('.con_wrap .side_menu .sns_btn li').eq(4).find('a').attr('title','Weibo : 新しいウィンドウで開く');
			$('.con_wrap .side_menu .sns_btn li').eq(5).find('a').attr('title','Youku : 新しいウィンドウで開く');

			$('.con_wrap .item_wrap .pop_inner .pop_btn button').attr('title','レイヤーのポップアップを閉める');

			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(0).find('button').attr('title','写真を見る : レイヤーのポップアップで開く');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(1).find('button').attr('title','写真を見る : レイヤーのポップアップで開く');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00.yeonjun ul li').eq(2).find('button').attr('title','映像を見る : レイヤーのポップアップで開く');

			if ($(".con_wrap .side_menu .sound_btn").hasClass("active"))
			{
				$(".con_wrap .side_menu .sound_btn button").attr("title","バックグラウンドミュージック : 再生");
			}else{
				$(".con_wrap .side_menu .sound_btn button").attr("title","バックグラウンドミュージック : 一時停止");
			}

			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(0).find('button').text('TOMORROW X TOGETHERのメンバー、YEONJUNの写真');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(1).find('button').text('TOMORROW X TOGETHERのメンバー、YEONJUNの写真');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('ul li').eq(2).find('button').prepend('TOMORROW X TOGETHERのメンバー、YEONJUNの映像');
			$('.con_wrap .item_wrap .pop_inner .pop_item > div img').attr('alt','TOMORROW X TOGETHERのメンバー、YEONJUNの写真');
			$('.con_wrap .item_wrap .item_player .play_list .play_list00').eq(0).find('.play_title').text('YEONJUN');
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

function carouselAlt()
{
	var carMax = $(".con_wrap .item_wrap .item_player .page_navi li").length;
	$(".con_wrap .item_wrap .item_player .page_navi li").each(function(){
		var idx = $(this).index() + 1;
		var number = idx + " / " + carMax;
		switch (pageLanguage)
		{
			case "KOR":
			{
				$(this).find("button").text("케러셀 : " + number);
				break;
			}
			case "ENG":
			{
				$(this).find("button").text("carousel : " + number);
				break;
			}	
			case "CHN":
			{
				$(this).find("button").text("轮播 : " + number);
				break;
			}	
			case "JPN":
			{
				$(this).find("button").text("カルーセル : " + number);
				break;
			}	
		}
	});
}