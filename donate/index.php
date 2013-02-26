<?php
  // Donation drive over
  header("Location: ../");
  die();

  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/services/donation-functions.php';

  // HTTPS redirection
  if ($portable['live']){
    if ($_SERVER['SERVER_PORT']!=443 || strpos($_SERVER['HTTP_HOST'], $wwwMatcher) !== false){
      $url = "https://weareroyale.com/thebellringer/donate/";
      header("Location: $url");
    }
  }
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
    <meta name="viewport" content="width=700, maximum-scale=1">

    <!-- JS
    ================================================== -->
    <script type="text/javascript">
      <?php
        $donationsArray = getDonations();
        $donationsLo = ($donationsArray[1][total]) ? $donationsArray[1][total] : 0;
        $donationsHi = ($donationsArray[0][total]) ? $donationsArray[0][total] : 0.1;
      ?>
      var donationInitial = <?=$donationsLo?>
        , donationTotal = <?=$donationsHi?>;
    </script>
    <script src="../js/jquery-1.8.2.min.js"></script>
    <script src="../js/jquery-ui-1.9.2.min.js"></script>
    <script src="../js/jquery.flipCounter.1.2.js"></script>
    <script src="../js/jshashtable-2.1.js"></script>
    <script src="../js/jquery.numberformatter-1.2.3.min.js"></script>
    <script src="../js/jquery.html5-placeholder-shim.js"></script>
    <script src="../js/counters.js"></script>

    <? /* Donation scripts */ ?>
    <script src="../js/cardcheck.js"></script>
    <script src="../js/jquery.validate.min.js"></script>  
    <script src="https://js.stripe.com/v1/"></script>
    <script type="text/javascript">
      // this identifies your website in the createToken call below
      Stripe.setPublishableKey('<?=$portable["stripePublicKey"]?>');
    </script>
    <script src="../js/donation-functions.js"></script>


    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="../css/style.css">
    <style>
      .bgwrapper {
        min-width: 700px;
      }
      .container {
        width: 700px;
      }
      .form-text {
        padding: 1px;
      }
    </style>
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
        
        <div class="row">
          <div class="shelf-full">
<?php include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/donation-form.php' ?>
          </div>
        </div>
        <div class="row footer">
<?php include $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/donation-footer.php' ?>
          <br><br>
        	<a href="/thebellringer/" class="t-font t-vlarge orange footer-share">Back to the video</a>
        </div>

      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>