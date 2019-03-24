<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<script src="/js/jquery-1.8.3.min.js"></script>
<link href="/video/video-js.css" rel="stylesheet">
<script src="/video/video.js"></script>
<script src="/video/videojs-flash.js"></script>
<script src="/video/videojs-contrib-hls.js"></script>
 <script>
    var player = videojs('hlsPlayEx');
    player.play();
</script>
</head>

<body>
<video id="example_video_1" class="video-js vjs-default-skin" controls autoplay width="200" height="150" data-setup="{}">
<source src="https://ibighit.github.io/music/scenery_by_V_of_BTS/playlist/4v2gPHkHgkax.128.mp3/playlist.m3u8" type="application/x-mpegURL">
</video>
</body>
</html>
