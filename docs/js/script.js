(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
			{
				title: '你还爱我吗',
				artist: 'SARA',
				album: '你还爱我吗.mp3',
				cover:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000DoHzY35XXhf.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M5000017RWMZ2E0ImG.mp3?vkey=C7BE7895BC5DA10BFDAF0E04FDE706C293DA9EE338903752D4B864CF44648E67492B05D024F4F814B9B7C611FA7C3D8F835DF733233BCA75&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '伤心1999',
				artist: '王杰',
				album: '伤心1999.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000vAxx90sWGQr.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M500000pNA1e4c8zx1.mp3?vkey=B5DD50CF4A35F070ABF3B4FFEE6FC7936D28BA4EE41DAE9873E10B9D7D1BD6E759112A5154D3B269FF3B1CBD373684B03ADD19CC7DACCE3A&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '听说爱情回来过',
				artist: '林忆莲',
				album: '听说爱情回来过.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Un0ie1Y37xL.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M500004ZxtuK0Eghmb.mp3?vkey=98EFE1029B47477D7EBD1CF1A395B826DABB91301F68190D7174C6E86D33FB722E47B9D2A1BB4AC0F580AA4990BCFA60F618E73334570BA5&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '天下无贼',
				artist: '羽泉',
				album: '天下无贼.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000004GNPTz1v18Cw.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M500000T62nq2TFYq1.mp3?vkey=495FE42422B09A64C5FBD30008C6C4F4374B6CECA1BE3A46502480D038672FB383AE20CAD3D6485594376E50CA8444265ADD5CE05FF36C0A&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '爱上一个不回家的人',
				artist: '林忆莲',
				album: '爱上一个不回家的人.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002IBU191em77r.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M50000397E9c2wOEhY.mp3?vkey=930BAFDDF9608B1CEF91B3AB81ABCDA69C58A7E06F05C58176C97E9A1B592EC57876D6FDAC5231BB27187F1B99F026E2006BA498B61592E8&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '愿得一人心',
				artist: '李行亮',
				album: '愿得一人心.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000KdeES4gb2yb.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M500002rkRSq1Miogv.mp3?vkey=9E663812D0F52263EA0B51344B52729F49D1622C21DCBF56C314A8701CDF2AA8C479F0B2AAAB681A35A8DA772792D76290605AB70E6F3064&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '特别的爱给特别的你',
				artist: '伍思凯',
				album: '特别的爱给特别的你.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004RP0oL4E0xOk.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M5000030TXyc0IezEG.mp3?vkey=7760590EC86C6BA676DA7E420CA626DDEA104AD14A7FE9EA5B1134C4E95AF6AD494490C80583EBA056010FB1CE31DA4505CE04B96D6A01DD&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '无情的雨 无情的你',
				artist: '齐秦',
				album: '无情的雨 无情的你.mp3',
				cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001rZQNf35mhoo.jpg?max_age=2592000',
				mp3: 'http://dl.stream.qqmusic.qq.com/M5000033T0dy43ENvl.mp3?vkey=43231614CEE5116680D6E1195CCDE75508C651BB4D27CF2D675DC8408B98C7A3AEAB36C0AAE4B6F012C86920CC1EBDDDCBB9F322AA91CE04&guid=5150825362&fromtag=1',
				ogg: ''
			},
			{
				title: '忠孝东路走九遍',
				artist: '动力火车',
				album: '忠孝东路走九遍.mp3',
				cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20140313/20140313151707367709.jpg',
				mp3: 'http://m10.music.126.net/20190505163913/28c5f8028b04c54b6dad83c1429cc93c/ymusic/65a3/8084/0f58/7bd50c95628951861cd2c11894be7969.mp3',
				ogg: ''
			},
			{
				title: '大男人',
				artist: '腾格尔',
				album: '大男人.mp3',
				cover: 'https://p3fx.kgimg.com/stdmusic/20150718/20150718042903827317.jpg',
				mp3: 'music/jQ0DAFhuijSAGM7PADcuHYyRx-U345.mp3',
				ogg: ''
			},
			{
				title: '谁明浪子心',
				artist: '王杰',
				album: '谁明浪子心.mp3',
				cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20160910/20160910145826790.jpg',
				mp3: 'music/Rg0DAFS628-AScs9AEoMZ1ZAFvY539.mp3',
				ogg: ''
			},
			{
				title: '痴心绝对',
				artist: '李圣杰',
				album: '痴心绝对.mp3',
				cover: 'http://img1.kuwo.cn/star/starheads/120/6/7a298d1c55dc5d18094a3514d818475_0.jpg',
				mp3: 'music/3455305752.mp3',
				ogg: ''
			},
			{
				title: '好人好梦',
				artist: '孙悦 邰正宵',
				album: '好人好梦.mp3',
				cover: 'https://p3fx.kgimg.com/stdmusic/20150717/20150717221309944073.jpg',
				mp3: 'music/2017112713195011783681.mp3',
				ogg: ''
			},
		];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9d2f00b533f9cca146f784443e5bfc96";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();