<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Send an email</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/emailform.css">

  <script src="js/jquery-1.8.2.min.js"></script>
  <script src="js/jquery.html5-placeholder-shim.js"></script>
</head>
<body>
  <div class="plaque-email">
    <div class="plaque-email-inner">
      <?php
            require_once 'services/mailProcessor.php';

            $show_form=true;

            if(isset($_POST['name']))
            {// The form is submitted

           

                    $name = $_POST['name'];
                    $visitor_email = $_POST['email'];
                    $message = $_POST['message'];
                    if(isset($_POST['subscribe'])){
                   
                    if ($subscribe){ $message .= "\n Thank you for subscribing. \n";}

                    }
                    $email_to = $_POST['femail'];
                    $email_subject = "Royale + Redcross Presents: The Bell Ringer";
                    $email_body = '<div style="white-space:pre-wrap;">'.

                            ' <center>      <a href="holiday.weareroyale.com">  <img src="http://holiday.weareroyale.com/images/email/eshare-bellringer.png" /></a></center>'.
                           '<center>   <p  style="text-align:left;display:inline-block;width:530px;" >'.
                            'Hey There '.$name.', <br /><br />'.
                            $message.
                          ' </p></center>'.
                          ' <center> <a href="www.weareroyale.com"> <img src="http://holiday.weareroyale.com/images/email/eshare-logo.png" /></a> </center>  '. 
                            '<center>    <a href="www.weareroyale.com"> <img src="http://holiday.weareroyale.com/images/email/eshare-footer.png" /></a> </center>'.  
                           '</div>';

                        /*   '<center> <div style="white-space:pre-wrap;">'.

                            '      <img src="http://holiday.weareroyale.com/images/email/reciept-thankyou.png" />'.
                           '  <p  style="text-align:left;display:inline-block;width:530px;" >'.
                           'Hey There '.$name.', <br /><br />'.
                            'Thank you so much for your donation.  One step closer toward meeting not only our'. 
                            'goal, but also meeting the demands of the victims of Hurricane Sandy.  We hope them '.
                            'the best this holiday season, and know that this will go a long way to their relief.'.
                          ' </p></center><br />'.
                          '    <center><a href="www.weareroyale.com"> <img src="http://holiday.weareroyale.com/images/email/reciept-xo.png" /></a> </center> <br /> '. 
                            '<center><a href="http://www.weareroyale.com"><img src="http://holiday.weareroyale.com/images/email/reciepit-footer.png" /></a><br /></center> '.  
                           '</div></center>'.*/
                             
                                 
                                 
                    $to = $email_to;
                
                    $html = true;
 
            


                    $show_form=false;

                   

                     $mailSend = sendMessagez($name, $visitor_email, $email_to, $email_subject, $email_body, $html);

                     echo $mailSend;

                    // echo (PATH);

            
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
          <textarea class="email-textarea" name="message">Help Royale and the Red Cross raise 10k for our friends on the east coast... Check out their short film "The Bell Ringer" and following contribute to the fund.  If Royale makes their goal they'll animate a continuation of the story.
          
http://weareroyale.com/thebellringer</textarea>
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
