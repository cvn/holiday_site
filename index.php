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
    <meta property="og:image" content="http://holiday.weareroyale.com/images/siteMetaImage_v001.png"/>
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
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

    <!-- JS
    ================================================== -->
    <script type="text/javascript">
     var donationTotal = <?php $donationsArray = getDonations(); echo ($donationsArray[0][total]); ?>;
    </script>
    <script src="js/jquery-1.8.2.min.js"></script>
    <script src="js/jquery-ui-1.9.2.min.js"></script>
    <script src="js/froogaloop2.min.js"></script>
    <script src="js/popcorn-complete.min.js"></script>
    <script src="js/jquery.flipCounter.1.2.pack.js"></script>
    <script src="js/jshashtable-2.1.js"></script>
    <script src="js/jquery.numberformatter-1.2.3.min.js"></script>
    <script src="js/cardcheck.js"></script>

    <script src="js/form-handling.js"></script>
    <script src="js/video-controller-mack.js"></script>
    <script src="js/coinMultiDrag-Mack.js"></script>
    <script src="js/houseCleaningScript_mh.js"></script>
</head>
<body>
    <div class="brotherDarkness" style="display: none;"></div>
    <div class="mattePainting" style='display: none;'></div>
        
    <input type="number" class='playPopTrigger' style='display: none'>0</input> 
    <input type="number" class='playPopTrigger2' style='display: none'>0</input> 
    <input type="number" class='bellThrowTrigger' style='display: none'>0</input> 
    <input type="number" class='moneyCollectTrigger' style='display: none'>0</input> 
    <input type="number" class='moneyAnimTrigger' style='display: none'>0</input> 

    <div class="bgwrapper">
      <div class="container">
      
        <div class="row header">
          <div class="RoyalePresents">
            <img src="images/nonLive/RoyalePresents.png" width="231" height="127" alt="Royale Presents">
          </div>
          <div class="header-spacer"></div>
          <div class="daBellRinga">
            <img src="images/nonLive/daBellRinga.png" width="276" height="127" alt="The Bell Ringer">
          </div>        
        </div>
        
        <div class="row main">
          <div class="video-container">
            <iframe class="video" id="player_1" src="http://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1" frameborder="0" webkitallowfullscreen></iframe>
            <video id="htmlvideo" class="video">
                <source src="video/Holiday_Interactive_Loops_v02.m4v">
                <source src="video/Holiday_Interactive_Loops_v02.webm" type="video/webm">
            </video>
          </div>
        </div>

        <div class="row footer">
          <div id="CounterZone">
            <input type="hidden" name="counter-value" value="<?php $donationsArray = getDonations(); echo ($donationsArray[1][total]); ?>" >
          </div>
          <div class="counterText">
            <img src="images/nonLive/counterText.png" width="908" height="74" alt="">
          </div>
        </div>
        
        <div class="donatePlate" style='display: none;'>
          <div class="donateHeader">
             <img src="images/live/DonateHeader.png"  alt="">
          </div>
          <div id="soloCoin">
             <p></p>
          </div>
          <div class="soloCoin active">
             <img src="images/coinsSolo.png" width="40" alt="">
          </div>
          <div class="zeroDolla">
            <img src="images/live/0DollaramounSelector.png" alt="">
          </div>
          <div class="soloCoin2 active">
             <img src="images/coinsSolo.png" width="40" alt="">
          </div>
          <div class="fiveDolla">
            <img src="images/live/5DollaramounSelector.png"  alt="">
          </div>
          <div class="redCrossTray"  >
            <img src="images/live/redCrossLogoDonationTray.png"  alt="">
          </div>  
          <div class="crossText"  >
            <img src="images/live/proceedsText.png"  alt="">
          </div>  
          <div class="share">
            <div class="shareIcon">
              <img src="images/live/shareIcon.png" width="78" height="43" alt="">
            </div>
            <div class="facebook-Icon">
              <img src="images/live/facebook_Icon.png" onClick="toggleFace();" width="44" height="43" alt="">
            </div>           
            <div class="twitter-icon">
              <img src="images/live/twitter_icon.png" onClick="toggleTwit();" width="61" height="43" alt="">
            </div>
            <div class="mail-icon">
              <img src="images/live/mail_icon.png" onClick="toggleMail();" width="59" height="43" alt="">
            </div>   
          </div>
        </div> <!-- /donatePlate -->
        
        <div class="mailPost" style="display: none" >
          <button class="closeForm" onClick="toggleMail();">Close X </button><br />
          <form method="post" id="mailPost" name="myemailform" action="emailSend.php">
            Your Name: <input type="text" name="name"><br />
            Friend's Name: <input type="text" name="fname"><br />
            Friend's Email Address:    <input type="text" name="email"><br />
            Custom Message?  <textarea name="message"></textarea><br />
            <input type="submit" value="Send Form">
          </form>
        </div> <!-- /mailPost -->

        <div class="flip-container">
          <form class="mini-form form-inline">
              <div class="flipper shy">
                  <h5 class="form-title">How much would you like to donate?</h5>
                  <ul class="amount-list unstyled">
                      <li><input name="amount" id="amount1" class="amount-radio" type="radio" value="$10"><label for="amount1" class="radio">  $10</label></li>
                      <li><input name="amount" id="amount2" class="amount-radio" type="radio" value="$20"><label for="amount2" class="radio">  $20</label></li>
                      <li><input name="amount" id="amount3" class="amount-radio" type="radio" value="$50"><label for="amount3" class="radio">  $50</label></li>
                      <li><input name="amount" id="amount4" class="amount-radio" type="radio" value="$100"><label for="amount4" class="radio">  $100</label></li>
                      <li><input name="amount" id="amount5" class="amount-radio" type="radio" value="Other"><label for="amount5" class="radio">  Other</label></li>
                  </ul>
                  <div class="form-nav">
                      <button class="btn cancel">Cancel</button>
                  </div>
              </div>
              <div class="flipper shy">
                  <h5 class="form-title">Enter your information, please.</h5>
                  <div class="form-horizontal">
                      <div class="control-group">
                          <label for="input_cc" class="control-label">Credit card</label>
                          <div class="controls">
                              <input type="text" name="cc" id="input_cc">
                          </div>
                      </div>
                      <div class="control-group">
                          <label for="input_exp" class="control-label">Exp Date</label>
                          <div class="controls">
                              <input type="text" name="cc" id="input_exp">
                          </div>
                      </div>
                      <div class="control-group">
                          <label for="input_cvv" class="control-label">CVV</label>
                          <div class="controls">
                              <input type="text" name="cc" id="input_cvv">
                          </div>
                      </div>
                  </div>
                  <div class="form-nav">
                      <button class="btn back">Back</button>
                  </div>
                  <div class="form-submit">
                      <button class="btn next btn-primary">Donate</button>
                  </div>
              </div>
              <div class="flipper shy">
                  <h5 class="form-title">Thank you!</h5>
                  <div class="form-submit">
                      <button onClick="playDropped();" class="btn next btn-primary donateButtonz">Done</button>
                  </div>
              </div>
          </form>
        </div> <!-- /flip-container -->
      
        </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>