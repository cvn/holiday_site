<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';


 function iedetect() {
      $match = preg_match('/MSIE ([0-9].[0-9])/',$_SERVER['HTTP_USER_AGENT'],$reg);
      if($match == 0){
        return false;}
      else{
        return true;}
    }
    $iedetect = iedetect();
  //Mobile site redirection
  if ( strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'mobile') 
    || strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'android')
    || $iedetect !== false 
    // || eregi("MSIE", getenv( "HTTP_USER_AGENT" ) ) 
    // || eregi("Internet Explorer", getenv("HTTP_USER_AGENT" ) ) 
    ) {

    $url = 'mobile/';
    header("Location: $url");
  }

?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <title>Royale Presents | The Bell Ringer</title>
    <meta property="og:image" content="http://weareroyale.com/thebellringer/images/Facebook_icon.jpg"/>
    <meta property="og:title" content="Royale Presents: The Bell Ringer"/>
    <meta property="og:url" content="https://weareroyale.com/thebellringer/"/>
    <meta property="og:description" content="Watch Royale's latest animated short 'The Bell Ringer'. Find out how to help Edith and Royale raise $10,000 for the American Red Cross to help benefit those affected by Hurricane Sandy this holiday season or you might get your bell rung. #weareroyale"/>
    <meta name="description" content="Watch Royale's latest animated short 'The Bell Ringer'. Find out how to help Edith and Royale raise $10,000 for the American Red Cross to help benefit those affected by Hurricane Sandy this holiday season or you might get your bell rung. #weareroyale">
    <meta name="author" content="Royale">
    
    <base target="_parent" onpagehide="pagehide();"/>
    
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
    

    <!-- JS
    ================================================== -->
    <script type="text/javascript">
      <?php
        if(isset($_GET['donated'])){
          $donated = $_GET['donated'];      
        } else { 
          $donated = 0;
        }
      ?>
      var donationInitial = 10000
        , donationTotal = 10050
        , donated = <?=$donated?> 
        , vimeoIframe = '<iframe class="video" id="player_1" src="<?=$portable["vimeoEmbed"]?>" frameborder="0" webkitallowfullscreen></iframe>';
    </script>
    <script src="js/jquery-1.8.2.min.js"></script>
    <script src="js/jquery-ui-1.9.2.min.js"></script>
    <script src="js/froogaloop2.min.js"></script>
    <script src="js/popcorn-complete.min.js"></script>
    <script src="js/jquery.flipCounter.1.2.js"></script>
    <script src="js/jshashtable-2.1.js"></script>
    <script src="js/jquery.numberformatter-1.2.3.min.js"></script>
    <script src="js/jquery.html5-placeholder-shim.js"></script>
    <script src="js/jquery.validate.min.js"></script>  

    <script src="js/video-controller-mack.js"></script>
    <script src="js/counters.js"></script>
    <script src="js/donation-functions-faux.js"></script>
    <script src="js/init.js"></script>
<?php
  // Google Analytics
  if ($portable['live']){
    include_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/analytics.php';
  }
?>
</head>
<body>

    <div class="brotherDarkness" style="display: none;"></div>
    <div class="mattePainting" style='display: none;'></div>

    <div class="audio-container">
        <audio id="soundbed" loop preload="auto">
            <source src="<?php echo($portable['cdn']); ?>video/TBR_LoopLong_OptionB.mp3" type="audio/mpeg">
              <source src="<?php echo($portable['cdn']); ?>video/TBR_LoopLong_OptionB.ogg" type="audio/ogg">
            <source src="<?php echo($portable['cdn']); ?>video/TBR_LoopLong_OptionB.wav" type="audio/wav">
        </audio>
    </div>

    <div class="bgwrapper">
      <div class="container">
      
        <div class="row header">
<?php include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/header.php' ?>
          <div class="header-share" style="display: none;">
            <div class="spritebutton sharebutton embed">
            </div><div class="spritebutton sharebutton facebook">
            </div><div class="spritebutton sharebutton twitter">
            </div><div class="spritebutton sharebutton mail"></div>
          </div>
        </div>

        <div class="splash">
          <div class="splash-fg">
            <img src="images/splash-fg.png" alt="">
          </div>
          <div class="splash-bg">
            <img src="images/splash-bg.png" alt="">
          </div>
          <div class="plaque-share">
            <div class="spritebutton sharebutton embed">
            </div><div class="spritebutton sharebutton facebook">
            </div><div class="spritebutton sharebutton twitter">
            </div><div class="spritebutton sharebutton mail"></div>
          </div>
          <div class="plaque firstbox t-font t-large">
            <div class="plaque-inner">
              <p>This holiday season we would like to help our East Coast friends affected by Hurricane Sandy.</p>
              <p class="yellow">After enjoying "The Bell Ringer", stay tuned to find out how you can help Edith and Royale raise money for the American Red Cross. If we meet our goal of <span class="t-bold white">$10,000</span> we will release an alternate ending.</p>
              <p>Wishing you and yours a lovely holiday season.</p>
            </div>
            <div class="royale-script">
              <img src="images/royale-script.png" alt="Royale">
            </div>
            <div class="playbutton-container">
              <div class="spritebutton playbutton playmovie"></div>
            </div>
            <div class="skipmovie-container">
              <div class="t-font t-bold splash-skipmovie">Skip to Interactive</div>
            </div>
          </div>
        </div>        

        <div class="row main">
          <div class="video-container shy">
            <video id="htmlvideo" class="video" style="display:none;" preload="auto">
                <source src="<?=$portable['cdn']?>video/holiday2012-interactive.mp4" type="video/mp4">
                <source src="<?=$portable['cdn']?>video/holiday2012-interactive.webm" type="video/webm">
                <p>This website requires HTML5 video capability, please update your browser.</p>
            </video>
            <div class="video-blackout blackout-interactive video"></div>
            <div class="video vimeo-container"></div>
            <div class="video-blackout blackout-vimeo loading video"></div>
          </div>
           <div class="final-share" style="display:none;">
            <div class="spritebutton sharebutton embed">
            </div><div class="spritebutton sharebutton facebook">
            </div><div class="spritebutton sharebutton twitter">
            </div><div class="spritebutton sharebutton mail"></div>
          </div>
          <div class="plaque donatebox" style='display: none;'>
            <div class="plaque-shadowless">
              <div class="donatebox-header">
                 <img src="images/donate-script.png"  alt="Donate">
              </div>
              <div class="donatebox-buttons">
                <div class="spritebutton plaquebutton standardbutton donate" data-link="donate" alt="Yes, please"></div>
                <div class="spritebutton plaquebutton standardbutton nodonate" data-link="nodonate" alt="No, thank you"></div>
                <div class="spritebutton plaquebutton infobutton info" data-link="info" alt="More info"></div>
              </div>
              <div class="donatebox-redcross">
                <img src="images/redcross-logo.png">
              </div>
              <div class="donatebox-proceeds t-font t-medium orange">
                * All proceeds to<br>American Red Cross.
              </div>
            </div>
          </div>
          <div class="spritebutton skipbutton replay" style="display:none;"></div>
           <div class="spritebutton mutebutton muteaudio" style="display:none;"></div>

          
          <div class="shelf donateshelf" data-link="donate" style="display: none">
            <div class="closebutton"></div>
<?php include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/donation-form-faux.php' ?>
          </div>

          <div class="shelf greyshelf thanksshelf" data-link="thanks" style="display:none;">
            <div class="closebutton"></div>
            <img src="images/thanks.png" alt="Happy Holidays. Love, Royale">
          </div>
                    
          <div class="shelf greyshelf infoshelf" data-link="info" style="display:none;">
            <div class="closebutton"></div>
            <div class="shelf-inner t-font t-medium yellow">
              <div class="info-logo-container"><img class="info-logo" src="images/royale-redcross.png" alt="Royale &amp; American Red Cross"></div>
              <p class="t-bold"><span class="white">What is it that we are doing you ask?</span> It's simple. Royale is a design and production studio in Los Angeles who believes in giving back.</p>
              <p class="t-bold">Every year we like to create an animated piece for the holidays. This year we thought we would help our East Coast friends who might not be having a nice holiday due to Hurricane Sandy. Help us raise $10,000 for the red cross to help benefit our friends and If we make our goal we’ll animate a continuation of the story.</p>
              <p class="t-bold white">Royale wishes you and yours a wonderful holiday!</p>
              <p class="info-fineprint">
                <span class="info-secured">This site is fully secured by</span>
                <a href="https://stripe.com" target="_blank"><img src="images/stripe-small.png" class="info-stripe" alt="Stripe"></a>
              </p>
            </div>
          </div>
          
        </div><!-- /main -->

        <div class="row footer">
          <a href="fallback/" class="footer-trouble" style="display:none;">
              <img src="images/trouble-viewing.png">
          </a>
         <div class="t-font t-bold skipmovie" style="display:none;">Skip to Interactive</div>
          
          
<?php include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/donation-footer.php' ?>
          <div class="footer-bottom t-font t-vsmall orange">
            <div class="footer-text">
              &copy; We Are Royale LLC. All proceeds will be donated to the American Red Cross. Securely powered by 
            </div>
            <a href="https://stripe.com" target="_blank"><img src="images/stripe-small.png" class="footer-stripe" alt="Stripe"></a>
          </div>
        </div>
        
      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>