<?php
            require_once 'services/mailProcessor.php';

           

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
                    $email_body =    '<center> <div style="white-space:pre-wrap;">'.

                            '      <img src="http://holiday.weareroyale.com/images/email/reciept-thankyou.png" />'.
                           '  <p  style="text-align:left;display:inline-block;width:530px;" >'.
                           'Hey There '.$name.', <br /><br />'.
                            'Thank you so much for your donation.  One step closer toward meeting not only our'. 
                            'goal, but also meeting the demands of the victims of Hurricane Sandy.  We hope them '.
                            'the best this holiday season, and know that this will go a long way to their relief.'.
                          ' </p></center><br />'.
                          '    <center><a href="www.weareroyale.com"> <img src="http://holiday.weareroyale.com/images/email/reciept-xo.png" /></a> </center> <br /> '. 
                            '<center><a href="http://www.weareroyale.com"><img src="http://holiday.weareroyale.com/images/email/reciepit-footer.png" /></a><br /></center> '.  
                           '</div></center>';
                                 
                    $to = $email_to;
                
                    $html = true;
 
            


                    $show_form=false;

                   

                     $mailSend = sendMessagez($name, $visitor_email, $email_to, $email_subject, $email_body, $html);

                     echo $mailSend;

                    // echo (PATH);

            
            }//if(isset($_POST['Submit']))

  ?>