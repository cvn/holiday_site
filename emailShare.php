<?PHP
            //include the main validation script
            require_once "services/formvalidator.php";

            $show_form=true;

            if(isset($_POST['Submit']))
            {// The form is submitted

                //Setup Validations
                $validator = new FormValidator();
                $validator->addValidation("name","req","Please fill in Name");
                $validator->addValidation("email","email","The input for Email should be a valid email value");
                $validator->addValidation("fname","req","Please fill in Name");
                $validator->addValidation("email","email","The input for Email should be a valid email value");
                 $validator->addValidation("femail","req","Please fill in Email");

                //Now, validate the form
                if($validator->ValidateForm())
                {
                    //Validation success. 
                    //Here we can proceed with processing the form 
                    //(like sending email, saving to Database etc)
                    // In this example, we just display a message
                    echo "<h2>Validation Success!</h2>";
                    
                    $name = $_POST['name'];
                    $visitor_email = $_POST['email'];
                    $message = $_POST['message'];
                    $email_to = $_POST['femail'];
                    $email_subject = "Royale + Redcross Presents: The Bell Ringer";
                    $email_body = " $message .\n".
                                 " weareroyale.com/thebellringer \n \n ".
                                              "Best Wishes! $name, \n ".

                    $to = $email_to;
                    $headers = "From: $visitor_email \r\n";
                    $headers .= "Reply-To: $email_to \r\n";
                    mail($to,$email_subject,$email_body,$headers);

                    $show_form=false;
                }
                else
                {
                    echo "<B>Validation Errors:</B>";

                    $error_hash = $validator->GetErrors();
                    foreach($error_hash as $inpname => $inp_err)
                    {
                        echo "<p>$inpname : $inp_err</p>\n";
                    }        
                }//else
            }//if(isset($_POST['Submit']))

            if(true == $show_form)
            {
            ?>

             <form method="post" id="mailPost" name="myemailform" action=''>
                          Your Name: <input type="text" name="name" placeholder="First + Last" required><br />
                          Your Email Address:    <input type="text" name="email" required><br />
                          Recipient's Name: <input type="text" name="fname" required><br />
                          Recipient's Email Address:    <input type="text" name="femail" required><br />
                          Message:  <textarea name="message">Don't get your bell rung by an old lady during the holiday #saggybells</textarea><br />
                          <input type="submit" value="Send Form">
                        </form>
            <?PHP
            }//true == $show_form
            ?>