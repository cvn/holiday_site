<?php
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';
  require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/services/mailProcessor.php';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Send an email</title>
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
</head>
<body>
  <div class="plaque-email">
    <div class="plaque-email-inner">
      <?php
            $show_form=true;

            if(isset($_POST['name']))
            {// The form is submitted
             
                    $name = $_POST['name'];
                    $fname = $_POST['fname'];
                    $visitor_email = $_POST['email'];
                    $defaultMessage = $_POST['messageCheck'];
                    $cmessage = $_POST['message'];


                    $message = 'Help '.$name .', Royale, and the Red Cross raise $10,000 for our friends on the East Coast... '.$_POST['message'];
                    
                    $email_to = $_POST['femail'];
                    $email_subject = "Royale Presents: The Bell Ringer";
                    $email_body = '<div style="white-space:pre-wrap;">'.

                          '<center><a href="'. $portable['bellSite'].'"><img src="'. $portable['imagePath'] .'email/eshare-bellringer.png" /></a></center>'.
                          '<center><p  style="text-align:left;display:inline-block;width:530px;" >'.
                          'Greetings '.$fname.', <br /><br />'.
                          $message.
                          '</p></center>'.
                          '<center><a href="'.$portable['royaleSite'].'"><img src="'.$portable['imagePath']. 'email/eshare-logo.png" /></a> </center>  '. 
                          '<center><a href="'.$portable['royaleSite'].'"><img src="'. $portable['imagePath'] .'email/eshare-footer.png" /></a> </center>'.  
                          '</div>';
                                 
                    $to = $email_to;
                
                    $html = true;
 
            


                    $show_form=false;

                   

                     $mailSend = sendMessagez($name, $visitor_email, $fname, $email_to, $email_subject, $email_body, $html);

                     echo ('<div align="center" style="margin:auto;font-size: 35px;margin-top:240px;"><b>'.$mailSend.'</b></div>');

                    // echo (PATH);




                     // SQL Stuff

                      $username = $portable['dbUsername'];
                      $password = $portable['dbPassword'];
                      $eamilsDb = $portable['dbDonationsDb'];
                      $emailShare = $portable['share'];
                      

                      if($defaultMessage == $cmessage){ $dmessage = 'Default';} else{ $dmessage = $cmessage;}

                      // SQL statements
                         $sql = 'INSERT INTO '.$emailShare.' (sendname,sendemail,recname,recemail,message) VALUES (:sendname,:sendemail,:recname,:recemail,:message)';

                      try {
                             // Establish connection
                             $conn = new PDO('mysql:host=localhost;dbname='.$eamilsDb.';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
                             $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                             // Insert new donation
                             $stmt = $conn->prepare($sql);
                             $stmt->bindParam(':sendname', $name);
                             $stmt->bindParam(':sendemail', $visitor_email);
                             $stmt->bindParam(':recname', $fname);
                             $stmt->bindParam(':recemail', $email_to);


                           //  $stmt->bindParam(':subscribe', $subscribe);
                             $stmt->bindParam(':message', $dmessage);
                          //   $stmt->bindParam(':total', $sum);
                             $stmt->execute();

                          


                         } catch(PDOException $e) {
                             return 'ERROR: ' . $e->getMessage();
                         }




            
            }//if(isset($_POST['Submit']))

            if(true == $show_form)
            {
      ?>
      <div class="email-logo-container">
        <img class="email-logo" src="images/royale-redcross.png">
      </div>
      <div class="t-font t-bold t-larger yellow email-title">
        Do you know someone who may be itching to be entertained for a few minutes?
      </div>
      <div class="email-intro t-medium">
        Send them an email to spread the word.  If Royale raises 10k for The American Red Cross, they'll animate a continuation of Edith's story.
      </div>
      <form method="post" id="mailPost" name="myemailform" action="">
        <div class="t-font t-bold t-larger yellow email-title email-fieldtitle">
          From:
        </div>
        <div class="form-row">
          <input type="text" class="email-text" name="name" placeholder="Your name" required>
        </div>
        <div class="form-row">
          <input type="text" class="email-text" name="email" placeholder="Your email address" required>
        </div>
        <div class="t-font t-bold t-larger yellow email-title email-fieldtitle">
          To:
        </div>
        <div class="form-row">
          <input type="text" class="email-text" name="fname" placeholder="Recipient's name" required>
        </div>
        <div class="form-row">
          <input type="text" class="email-text" name="femail" placeholder="Recipient's address" required>
        </div>
        <div class="t-font t-bold t-larger yellow email-title email-fieldtitle">
          Message:
        </div>
        <div class="form-row">
          <textarea class="email-textarea" name="message">Check out their short film "The Bell Ringer", and following the film, please consider contributing to the fund.  If Royale makes their goal they'll animate a continuation of the story.
          
https://weareroyale.com/thebellringer</textarea>
        <textarea class="email-textarea" style="display:none" name="messageCheck">Check out their short film "The Bell Ringer", and following the film, please consider contributing to the fund.  If Royale makes their goal they'll animate a continuation of the story.
          
https://weareroyale.com/thebellringer</textarea>
        </div>
        <div class="email-send">
          <input type="submit" class="spritebutton standardbutton sendbutton" value="">
        </div>
      </form>
      <?php
            }//true == $show_form <input type="submit" value="Send Form">

            /*<a href="mailto:<?php echo $email_to; ?>?subject=Big%20News&body=Don\'t-get-your-bell-rung-by-an-old-lady-during-the-holiday-\#saggybells">Email Us</a>*/
      ?>
    </div> <!-- /plaque-email-inner -->
  </div> <!-- /plaque-email -->
  <div class="email-fineprint t-small">
    Questions / Concerns?  Contact us at hello@weareroyale.com 
  </div>
  
</body>
</html>
