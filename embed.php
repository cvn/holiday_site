<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/services/mailProcessor.php';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Share Embed Code</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/emailform.css">

  <script src="js/jquery-1.8.2.min.js"></script>
  <script src="js/jquery.html5-placeholder-shim.js"></script>
<?php
  // Google Analytics
  if ($portable['live']){
    include_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/analytics.php';
  }
?>

<script type="text/javascript">


  


</script>
</head>
<body>
  <div class="plaque-email">
    <div class="plaque-email-inner">
         <div class="embedCode" style="margin-top:150px;">
          <span ID="copytext" style="font-size:24px;" >To embed, copy the code below:</span>
          <TEXTAREA id='holdtext' style="margin:auto;color:#CD0000;background:#CDCDCD;font-size:12px;width:370px;height:120px;"><iframe src="http://player.vimeo.com/video/53978551?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p>Royale Presents: <a href="http://weareroyale.com/thebellringer/"> The Bell Ringer Royale</a> .</p>
          </TEXTAREA>


       

          </div>


    </div> <!-- /plaque-email-inner -->
  </div> <!-- /plaque-email -->
  <div class="email-fineprint t-small">
    Questions / Concerns?  Contact us at hello@weareroyale.com 
  </div>
  
</body>
</html>