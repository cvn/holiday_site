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
    <meta name="viewport" content="width=1024, maximum-scale=1">

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
            <a href="http://weareroyale.com"><img src="images/royale-presents.png" width="231" height="127" alt="Royale Presents"></a>
          </div><div class="daBellRinga">
            <img src="images/the-bell-ringer.png" width="276" height="127" alt="The Bell Ringer" onClick="$('#htmlvideo')[0].play()">
          </div>        
        </div>

        <div class="splash">
          <div class="splash-fg">
            <img src="images/splash-fg.png" alt="">
          </div>
          <div class="splash-bg">
            <img src="images/splash-bg.png" alt="">
          </div>
          <div class="plaque firstbox t-font t-large">
            <div class="plaque-inner">
              <p>This holiday season we wanted to help our east coast friends who may not be having such a nice holiday season due to Hurricane Sandy.</p>
              <p class="yellow">After watching "The Bell Ringer" feel free to help by donating to the American Red Cross.  With your contribution we can meet our goal of raising a billion dollars by January 1st!</p>
            </div>
            <div class="royale-script"><img src="images/royale-script.png" alt="Royale"></div>
          </div>
          <div class="spritebutton playbutton playmovie"></div>
        </div>        

        <div class="row main" style="visibility:hidden;">
          <div class="video-container">
            <iframe class="video" id="player_1" src="http://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1" frameborder="0" webkitallowfullscreen></iframe>
            <video id="htmlvideo" class="video" preload="auto">
                <source src="video/holiday2012-interactive.mp4">
                <source src="video/holiday2012-interactive.webm" type="video/webm">
                <p>Please update your browser</p>
            </video>
          </div>
          
          <div class="plaque donatebox" style='display: none;'>
            <div class="donatebox-header">
               <img src="images/donate-script.png"  alt="Donate">
            </div>
            <div class="donatebox-buttons">
              <div class="spritebutton standardbutton yes" alt="Yes, please"></div>
              <div class="spritebutton standardbutton no" alt="No, thank you"></div>
              <div class="spritebutton infobutton" alt="More info"></div>
            </div>
            <div class="donatebox-redcross">
              <img src="images/redcross-logo.png">
            </div>
            <div class="donatebox-proceeds t-font t-medium orange">
              * All proceeds to<br>American Red Cross.
            </div>
            <div class="share">
              <div class="spritebutton sharebutton facebook">
              </div><div class="spritebutton sharebutton twitter">
              </div><div class="spritebutton sharebutton mail"></div>   
            </div>
          </div>

          <div class="shelf donateshelf" style='display: none'>
            <button class="shelf-submit">Donate now</button>
          </div>
        </div>

        <div class="row footer">
          <div class="spritebutton skipbutton skipmovie"></div>
          <div class="footer-left">
            <div>
              <img class="counter-dollar" src="images/dollar-sign.png" width="44" height="68"><div id="CounterZone"></div>
            </div>
            <div class="counter-text t-font t-medium t-bold orange">
              To date, this amount has been raised to aid those affected by Hurricane Sandy.
            </div>
          </div><div class="footer-right">
            <div id="countdown"></div>
            <div class="countdown-text t-font t-medium t-bold">
              <span class="orange">Days to raise</span> $1 billion. <span class="yellow">Ends</span> Jan 1st 2013
            </div>
          </div>
          <div class="footer-bottom t-font t-vsmall orange">
            &copy; We Are Royale LLC. All proceeds will be donated to the American Red Cross. Securely powered by <a href="http://stripe.com" target="_blank"><img src="images/stripe-small.png" alt="Stripe"></a>
          </div>
        </div>
        
      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>