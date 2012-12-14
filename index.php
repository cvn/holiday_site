<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/includes/variables.php';

  //Mobile site redirection
  if ( eregi("MSIE", getenv( "HTTP_USER_AGENT" ) ) 
    || eregi("Internet Explorer", getenv("HTTP_USER_AGENT" ) ) 
    || strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'mobile') 
    || strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'android')
    ) {

    $url = 'mobile';
    header("Location: $url");
  }

  // Vimeo prep
  $vimeoMatcher = 'player.vimeo.com';
  $wwwMatcher = 'www';
  $vimeoRef = 0;
  $vimeoQuery = '';
  $vimStatus = isset($_REQUEST['fromvimeo']);

  if (strpos(strtolower($_SERVER['HTTP_REFERER']), $vimeoMatcher) !== false){
    $vimeoRef = 1;
    $vimeoQuery = '?fromvimeo';
  }

  // HTTPS redirection
  if ($portable['live']){
    if ($_SERVER['SERVER_PORT']!=443 || strpos($_SERVER['HTTP_HOST'], $wwwMatcher) !== false){
      $url = "https://weareroyale.com/thebellringer".$vimeoQuery;
      header("Location: $url");
    }
  }

?>
<?php include_once $_SERVER['DOCUMENT_ROOT']."/services/donation-functions.php" ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <title>Royale Presents | The Bell Ringer</title>
    <meta name="description" content="Don't get your bell rung by Edith during the holiday #saggybells">
    <meta name="author" content="Royale">
    <meta property="og:image" content="http://weareroyale.com/thebellringer/images/video-thumbnail.jpg"/>
    <meta property="og:title" content="Royale Presents: The Bell Ringer"/>
    <meta property="og:description" content="Don't get your bell rung by Edith during the holiday #saggybells"/>
    
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
    

    <!-- JS
    ================================================== -->
    <script type="text/javascript">
      <?php
        $donationsArray = getDonations();
        $donationsLo = ($donationsArray[1][total]) ? $donationsArray[1][total] : 0;
        $donationsHi = ($donationsArray[0][total]) ? $donationsArray[0][total] : 0;
      ?>
      var donationInitial = <?=$donationsLo?>
        , donationTotal = <?=$donationsHi?>;
    </script>
    <script src="js/jquery-1.8.2.min.js"></script>
    <script src="js/jquery-ui-1.9.2.min.js"></script>
    <script src="js/froogaloop2.min.js"></script>
    <script src="js/popcorn-complete.min.js"></script>
    <script src="js/jquery.flipCounter.1.2.js"></script>
    <script src="js/jshashtable-2.1.js"></script>
    <script src="js/jquery.numberformatter-1.2.3.min.js"></script>
    <script src="js/cardcheck.js"></script>
    <script src="js/jquery.html5-placeholder-shim.js"></script>  
    <script src="https://js.stripe.com/v1/"></script>
    <script type="text/javascript">
      // this identifies your website in the createToken call below
      Stripe.setPublishableKey('<?=$portable["stripePublicKey"]?>');
    </script>



    <script src="js/video-controller-mack.js"></script>
    <script src="js/init.js"></script>
<?php
  // Vimeo referrals skip straight to interactive
  if ($vimStatus || $vimeoRef):
?>
    <script type="text/javascript">
    setTimeout(function(){
      if(vimeoHasPlayed) { vimeoController('pause'); }
      splashOutVidIn('#htmlvideo');
      goLive();}
    ,200);
    </script>
    <style type="text/css">.splash { display: none; }</style>
<?php
  endif;
?>
<?php
  // Google Analytics
  if ($portable['live']){
    include_once('includes/analytics.php');
  }
?>
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
          </div>
        </div>        

        <div class="row main">
          <div class="video-container shy">
            <video id="htmlvideo" class="video" style="display:none;" preload="auto">
                <source src="video/holiday2012-interactive.mp4">
                <source src="video/holiday2012-interactive.webm" type="video/webm">
                <p>Please update your browser</p>
            </video>
            <div class="video-blackout blackout-interactive video"></div>
            <iframe class="video" style="display:none;" id="player_1" src="http://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1" frameborder="0" webkitallowfullscreen></iframe>
            <div class="video-blackout blackout-vimeo video"></div>
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
          
          <div class="shelf donateshelf" data-link="donate" style="display: none">
            <div class="closebutton"></div>
            <div class="shelf-inner">
              <form action="services/add-donation.php" method="post" id="payment-form">
                <div class="shelf-left">
                  <div class="amount-header t-font yellow t-vlarge t-bold">Donation Amount</div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-5" value="5">
                    <label for="amount-5">
                      <span class="amount-dollar">$</span><span class="amount-sprite zero">0</span><span class="amount-sprite five">5</span>
                    </label>
                  </div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-15" value="15" checked>
                    <label for="amount-15">
                      <span class="amount-dollar">$</span><span class="amount-sprite one">1</span><span class="amount-sprite five">5</span>
                    </label>
                  </div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-50" value="50">
                    <label for="amount-50">
                      <span class="amount-dollar">$</span><span class="amount-sprite five">5</span><span class="amount-sprite zero">0</span>
                    </label>
                  </div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-custom" value="other">
                    <label for="amount-custom">
                      <span class="amount-dollar">$</span><input type="text" class="amount-other t-center" autocomplete="off" name="amount-other" placeholder="Other">
                    </label>
                  </div>
                  <span class="payment-errors t-medium"></span>
                </div><div class="shelf-right">
                  <div class="shelf-secured t-small">
                    <img src="/images/lock.png" class="t-icon"> This transation is secured by <a href="http://stripe.com" target="_blank"><img src="/images/stripe-small.png" class="t-icon stripe-b" alt="Stripe"></a>
                  </div>
                  <div class="t-medium">
                    To donate please enter your information, click or enter the amount then press submit. You will get an email reciept. Royale &amp; The Red Cross thank you. Happy Holidays!
                  </div>
                  <div class="form-row">
                      <input type="text" required class="card-name form-text form-fullwidth" autocomplete="off" name="name" placeholder="Name on card" />
                  </div>
                  <div class="form-row">
                      <input type="email" required class="form-text form-fullwidth" autocomplete="off" name="email" placeholder="Email address" />
                  </div>
                  <div class="form-row">
                      <input type="text" required size="20" autocomplete="off" class="card-number form-text form-cc" placeholder="Card number" value="<?=$portable['payCard']?>" /><input type="text" size="4" autocomplete="off" class="card-cvc form-text form-cvv t-center" placeholder="CVV" value="<?=$portable['payCvv']?>" />
                  </div>
                  <div class="form-row">
                      <label class="t-medium">Exp date:&nbsp;</label>
                      <input type="text" required size="2" class="card-expiry-month form-text t-center" placeholder="MM" value="<?=$portable['payMonth']?>" />
                      <span> / </span>
                      <input type="text" required size="4" class="card-expiry-year form-text t-center" placeholder="YYYY" value="<?=$portable['payYear']?>" />
                    <div id="accepted-cards-images" class="form-cards"></div>
                  </div>
                  <div class="form-row">
                    <input type="submit" class="submit-button spritebutton standardbutton" value="" alt="Submit">
                    <input id="subscribebox" type="checkbox" name="subscribe" checked="checked"><label for="subscribebox" class="t-medium yellow form-subscribe"> Subscribe to our mailing list</label>
                  </div>
                  <div class="t-small">Questions / Concerns? Contact us at hello@weareroyale.com</div>
                </div>
              </form>
            </div>
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
                <a href="http://stripe.com" target="_blank"><img src="images/stripe-small.png" class="info-stripe" alt="Stripe"></a>
              </p>
            </div>
          </div>
          
        </div><!-- /main -->

        <div class="row footer">
          <div class="spritebutton skipbutton skipmovie"></div>
          <div class="footer-left">
            <div>
              <img class="counter-dollar" src="images/dollar-sign.png" width="44" height="68"><div id="CounterZone"></div>
            </div>
            <div class="counter-text t-font t-medium t-bold orange">
              To date, this amount has been raised to aid those affected by Hurricane Sandy. If we reach our goal of <span class="white">$10,000</span> there will be an alt ending to our story. Spread the word!
            </div>
          </div><div class="footer-right">
            <div id="countdown"></div>
            <div class="countdown-text t-font t-medium t-bold">
              <span class="orange">Days to raise</span> $10,000. <span class="yellow">Ends</span> Jan 11th 2013
            </div>
          </div>
          <div class="footer-bottom t-font t-vsmall orange">
            <div class="footer-text">
              &copy; We Are Royale LLC. All proceeds will be donated to the American Red Cross. Securely powered by 
            </div>
            <a href="http://stripe.com" target="_blank"><img src="images/stripe-small.png" class="footer-stripe" alt="Stripe"></a>
            <div class="footer-share">
              <div class="spritebutton sharebutton facebook">
              </div><div class="spritebutton sharebutton twitter">
              </div><div class="spritebutton sharebutton mail"></div>
            </div>
          </div>
        </div>
        
      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>