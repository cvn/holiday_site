<?php

require("phpMailer/class.phpmailer.php");
require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';

$mail = new PHPMailer();
$mail->IsSMTP();  

function sendMessagez($name, $visitor_email, $fname, $email_to, $email_subject, $email_body, $html){
	global $mail;
	global $portable;

$fromName = $portable['fromName'];
$fromMail = 'holiday@weareroyale.com';
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "tls";                // sets the prefix to the servier
$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
$mail->Port       = 587;                   // set the SMTP port for the GMAIL server
$mail->Username   = "holiday@weareroyale.com";  // GMAIL username
$mail->Password   = "h3llo123!!";            // GMAIL password
$mail->SetFrom($fromMail, $fromName);
$mail->AddReplyTo($fromMail, $fromName);
$mail->AddAddress($email_to, $fname );	
$mail->Subject  = $email_subject;
$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
$mail->MsgHTML($email_body);
if(!$mail->Send()) {
  return "Mailer Error: " . $mail->ErrorInfo;
} else {
  return "EMAIL SENT!";
}}

?>