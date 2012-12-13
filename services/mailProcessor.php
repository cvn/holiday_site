<?php

require("phpMailer/class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP();  // telling the class to use SMTP
$mail->Host     = "localhost"; // SMTP server

//echo ('yellp sub');
function sendMessagez($name, $visitor_email, $email_to, $email_subject, $email_body, $html){
	global $mail;

	$mail->From     = 'hello@weareroyale.com';
	$mail->FromName = $name;
	$mail->AddAddress($email_to);
	

	$mail->Subject  = $email_subject;
	//$mail->AddEmbeddedImage('http://wwww.weareroyale.com/images/live/DonateHeader.png', 'logoimg', 'DonateHeader.png'); // attach file logo.jpg, and later link to it 
	$mail->Body     = $email_body;
	
	//$mail->WordWrap = 50;
	$mail->IsHTML($html);

	if(!$mail->Send()) {
	  return 'Message was not sent. \n Mailer error: ' . $mail->ErrorInfo;
	} else {
	  return 'Message has been sent.';
	}

}




?>