<?php include_once "services/donation-functions.php" ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
    <title>The Bell Ringer Test</title>
    <meta name="description" content="Don't get your bell rung by an old lady during the holiday #saggybells">
    <meta name="author" content="Royale">
    <meta property="og:image" content="http://holiday.weareroyale.com/images/video-thumbnail.jpg"/>
    <meta property="og:title" content="Royale Presents: The Bell Ringer"/>
    <meta property="og:description" content="Don't get your bell rung by an old lady during the holiday #saggybells"/>
    
    <base target="_parent" />
    
    <!-- Mobile Specific Metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=.3, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="css/style.css">
    
    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Favicons
    ================================================== -->
    <!-- <link rel="shortcut icon" href="favicon.ico"> -->
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

    <!-- JS
    ================================================== -->
    <script type="text/javascript">
     var donationInitial = <?php $donationsArray = getDonations(); echo ($donationsArray[1][total]); ?>;
     var donationTotal = <?php $donationsArray = getDonations(); echo ($donationsArray[0][total]); ?>;
    </script>
    <script src="js/jquery-1.8.2.min.js"></script>
    <script src="js/jquery-ui-1.9.2.min.js"></script>
    <script src="js/froogaloop2.min.js"></script>
    <script src="js/popcorn-complete.min.js"></script>
    <script src="js/jquery.flipCounter.1.2.js"></script>
    <script src="js/jshashtable-2.1.js"></script>
    <script src="js/jquery.numberformatter-1.2.3.min.js"></script>
    <script src="js/cardcheck.js"></script>

    <script src="js/video-controller-mack.js"></script>
    <script src="js/init.js"></script>
</head>
<body>
    <div class="brotherDarkness" style="display: none;"></div>
    <div class="mattePainting" style='display: none;'></div>
    <!-- <div class="photoshop-overlay"></div> -->

    <div class="bgwrapper">
      <div class="container">
      
        <div class="row header">
          <div class="RoyalePresents">
            <img src="images/nonLive/RoyalePresents.png" width="231" height="127" alt="Royale Presents">
          </div><div class="daBellRinga">
            <img src="images/nonLive/daBellRinga.png" width="276" height="127" alt="The Bell Ringer">
          </div>        
        </div>
        
        <div class="row main">
          <div class="video-container">
            <iframe class="video" id="player_1" src="http://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1" frameborder="0" webkitallowfullscreen></iframe>
            <video id="htmlvideo" class="video" preload>
                <source src="video/Holiday_Interactive_Loops_v02.mp4">
                <source src="video/Holiday_Interactive_Loops_v02.webm" type="video/webm">
                <p>Please update your browser</p>
            </video>
          </div>
          
          <div class="plaque firstbox">
            <div class="firstbox-buttons">
              <div class="spritebutton donatebutton playmovie"></div>
              <div class="spritebutton donatebutton skipmovie"></div>
            </div>
            <div class="share">
              <div class="spritebutton sharebutton facebook">
              </div><div class="spritebutton sharebutton twitter">
              </div><div class="spritebutton sharebutton mail"></div>   
            </div>
          </div>
          
          <div class="plaque donatebox" style='display: none;'>
            <div class="donatebox-header">
               <img src="images/donate-script.png"  alt="">
            </div>
            <div class="donatebox-buttons">
              <div class="spritebutton donatebutton yes"></div>
              <div class="spritebutton donatebutton no"></div>
              <div class="spritebutton donatebutton question"></div>
            </div>
            <div class="donatebox-redcross">
              <img src="images/live/redCrossLogoDonationTray.png"  alt="">
            </div>
            <div class="donatebox-proceeds">
              <img src="images/live/proceedsText.png"  alt="">
            </div>
            <div class="share">
              <div class="spritebutton sharebutton facebook">
              </div><div class="spritebutton sharebutton twitter">
              </div><div class="spritebutton sharebutton mail"></div>   
            </div>
          </div>

          <div class="donateshelf" style='display: none'>
            <button class="shelf-submit">Donate now</button>
          </div>
        </div>

        <div class="row footer">
          <div>
            <img class="counter-dollar" src="images/dollar-sign.png" width="44" height="68"><div id="CounterZone"></div>
          </div>
          <div class="counterText">
            <img src="images/nonLive/counterText.png" width="908" height="74" alt="">
          </div>
        </div>
        
      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>