<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Test</title>
	
	<link rel="stylesheet" href="css/style.css">
	
	<script src="js/jquery-1.8.2.min.js"></script>
	<script src="js/jquery-ui-1.9.2.min.js"></script>
	<script src="js/froogaloop2.min.js"></script>
	<script>
		var vimeoPlayer, 
		    vimeoUrl,
		    vimeoHasPlayed = 0;

		// Handle messages received from the player
		function onMessageReceived(e) {
		    var data = JSON.parse(e.data);
		    
		    switch (data.event) {
		        case 'ready':
		            onReady();
		            break;
		           
		        case 'playProgress':
		            onPlayProgress(data.data);
		            break;
		            
		        case 'play':
		            onPlay();
		            break;
		           
		        case 'pause':
		            onPause();
		            break;
		           
		        case 'finish':
		            onFinish();
		            break;
		    }
		}

		// Helper function for sending a message to the player
		function vimeoController(action, value) {
		    var data = { method: action };
		    
		    if (value) {
		        data.value = value;
		    }
		    
		    vimeoPlayer[0].contentWindow.postMessage(JSON.stringify(data), vimeoUrl);
		}

		function onReady() {
		    vimeoController('play');
		    vimeoController('addEventListener', 'play');
		    vimeoController('addEventListener', 'pause');
		    vimeoController('addEventListener', 'finish');
		    vimeoController('addEventListener', 'playProgress');
		}

		function onPlay() {
		  if(!vimeoHasPlayed) {
		    $('.blackout-vimeo').fadeOut(1000);
		    vimeoHasPlayed = 1;
		  }
		}

		function onPause() {
		}

		function onFinish() {
		 //bellHitEffect(0, 2000);
		    //goLive();
		}
		var liveSwitch = 0;
		function onPlayProgress(data) {
		   if (data.seconds >= 84.87){
		      //bellHitEffect(50, 2000);
		      liveSwitch = liveSwitch + 1;

		      if (liveSwitch == 1){
		        logger(data.seconds);
		        vimeoController('pause');

		           goLive();
		        liveSwitch = 2;
		      }
		     
		    };
		}

		$(document).ready(function(){

		    // Listen for messages from the player
		    if (window.addEventListener){
		        window.addEventListener('message', onMessageReceived, false);
		    }
		    else {
		        window.attachEvent('onmessage', onMessageReceived, false);
		    }

		    // Call the API when a button is pressed
		    $('.vimeoButton').on('click', function() {
				// $('#player_1').show();
				$('.vimeo-container').html('<iframe class="video" id="player_1" src="https://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1" frameborder="0" webkitallowfullscreen></iframe>')
			    vimeoPlayer = $('#player_1');
			    vimeoUrl = vimeoPlayer.attr('src').split('?')[0];
		        // setTimeout(function(){vimeoController('play');},1000);
		        // setTimeout(function(){
		        // 	if (!vimeoHasPlayed) {
		        // 		$('#player_1').hide();
		        // 		$('#htmlvideo').show();
		        // 		$('#htmlvideo')[0].play();
		        // 	}
		        // },5000);
		    });
		});
	</script>
</head>
<body>
	<br><br>

	<div class="vimeoButton">play</div>
	
	<br><br>
	
	<div class="video-container">
		<video id="htmlvideo" class="video" style="display:none;" preload="auto">
		    <source src="video/holiday2012-interactive.mp4">
		    <source src="video/holiday2012-interactive.webm" type="video/webm">
		    <p>Please update your browser</p>
		</video>
        <div class="video-blackout blackout-interactive video"></div>
		<div class="vimeo-container video"></div>
        <div class="video-blackout blackout-vimeo video"></div>
	</div>
</body>
</html>
