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
	          <iframe class="video" id="player_1" src="<?=$portable['vimeoEmbed']?>" frameborder="0" webkitallowfullscreen></iframe>
	        </div>
        </div>


        <div class="row footer">
          <div class="troubleViewing" style="margin-top:10px;"><a href="../fallback/"><img src="../images/trouble-viewing.png" /></a></div>           
        </div>

      </div><!-- /container -->
    </div><!-- /bgwrapper -->
</body>
</html>