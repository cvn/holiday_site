<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Royale Presents | The Bell Ringer</title>
    <meta property="og:url" content="https://weareroyale.com/thebellringer/">

    <!-- Mobile Specific Metas
    ================================================== -->
    <!-- <meta name="viewport" content="width=device-width, maximum-scale=1, maximum-scale=1"> -->
    <meta name="viewport" content="width=1024, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="../css/style.css">
      
        <script src="../js/jquery-1.8.2.min.js"></script>

       <script type="text/javascript">

       var playCheck;
       playCheck = setTimeout(function(){

        $('.troubleViewing').toggle();

       }, 7000);




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
           clearTimeout(playCheck);
       }

       function onPlay() {
      

       }

       function onPause() {
       }

       function onFinish() {

      
       }
       var liveSwitch = 0;
       function onPlayProgress(data) {

       }



        $(document).ready(function(){

           /* pop = Popcorn('#htmlvideo', {
              frameAnimation: true
            });*/

            // Listen for messages from the player
            if (window.addEventListener){
                window.addEventListener('message', onMessageReceived, false);
            }
            else {
                window.attachEvent('onmessage', onMessageReceived, false);
            }

            // Call the API when a button is pressed
            $('vimeoButton').on('click', function() {
                vimeoController($(this).text().toLowerCase());
            });

        }); /* end document ready */


       </script>
<?php
  // Google Analytics
  if ($portable['live']){
    include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/analytics.php';
  }
?>
</head>
<body>
    <div class="bgwrapper">
      <div class="container">

        <div class="row header">
<?php include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/header.php' ?>
        </div>
        
        <div class="row main">
	        <div class="video-container">
	           <video id="htmlvideo" class="video" controls autoplay preload="auto">
                <source src="<?php echo($portable['cdn']); ?>video/holiday2012-interactive-fb.mp4" type="video/mp4">
                <source src="<?php echo($portable['cdn']); ?>video/holiday2012-interactive-fb.webm" type="video/webm">
                <p>This website requires HTML5 video capability, please update your browser.</p>
            </video>
	        </div>
        </div>

        
        <div class="row footer">
        	<a href="/thebellringer/donate/" class="footer-mobile">
            <span alt="Click Here" class="spritebutton clickherebutton"></span><br>
            <span class="t-font t-larger orange">To find out how you can HELP Edith.</span>            
          </a>
        </div>

      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>