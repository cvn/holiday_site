<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/services/donation-functions.php';


// Get request variables
$uName = $_REQUEST['name'];
$uEmail = $_REQUEST['email'];
$uSubscribe = $_REQUEST['subscribe'];
$token = $_REQUEST['stripeToken'];

// Data shaping
if($_REQUEST['amount']=='other'){
	$uAmount = $_REQUEST['amount-other'];
} else {
	$uAmount = $_REQUEST['amount'];
}
$amountInCents = intval($uAmount * 100);
$uSubscribe = (isset($uSubscribe)) ? 1 : 0;
if(!$uName){
	$uName = 'Anonymous Donor';
}
if(!$uEmail) {
	$uEmail = 'no email provided';
}
$uDescription = $uName.' <'.$uEmail.'>';


function returnErrorWithMessage($message)
{
   $a = array('result' => 1, 'errorMessage' => $message);
   echo json_encode($a);
}

if ($token) {
	// Stripe
	require_once("stripe-php-1.7.10/lib/Stripe.php");

	// set your secret key: remember to change this to your live secret key in production
	// see your keys here https://manage.stripe.com/account
	Stripe::setApiKey($portable['stripePrivateKey']);


	try {
		// create the charge on Stripe's servers - this will charge the user's card
		$charge = Stripe_Charge::create(array(
		  "amount" => $amountInCents, // amount in cents, again
		  "currency" => "usd",
		  "card" => $token,
		  "description" => $uDescription)
		);	

		require_once 'mailProcessor.php';

        $visitor_email = $uEmail;
       // $message = $_POST['message'];
      
        $email_to = $uEmail;
        $email_subject = "Royale + Redcross: Donation Receipt. ";
        $subscript = '';
        if ($uSubscribe == 1){ $subscript = '<br />And thank you for subscribing to our mailing list! <br />'; }
        
		$email_body =  '<center> <div style="white-space:pre-wrap;">'.
		'<a href="'. $portable['bellSite'].'"><img src="'. $portable['imagePath'] .'email/reciept-thankyou.png" /></a>'.
		'<p style="text-align:left;display:inline-block;width:530px;" ><br /><br />'.
		'Hey there '.$uName.', <br /><br />'.
		'Thank you so much for your $<b>'. $uAmount .'</b> donation.  One step closer toward meeting not only our goal, but also meeting the demands of the victims of Hurricane Sandy.  We hope them the best this holiday season, and know that this will go a long way to their relief.'.
		'<br />'.$subscript.'</p></center><br />'.

		'<center><a href="'.$portable['royaleSite'].'"> <img src="'. $portable['imagePath'] .'email/reciept-xo.png" /></a> </center> <br /> '. 
		'<center><a href="'.$portable['royaleSite'].'"><img src="'. $portable['imagePath'] .'email/reciepit-footer.png" /></a><br /></center> '.  
		'</div></center>';
                    
        $html = true;
        $show_form=false;

        $mailSend = sendMessagez($uName, $visitor_email, $uName, $email_to, $email_subject, $email_body, $html);
        //   echo $mailSend;

		$output = addDonation($uAmount,$uName,$uEmail,$uSubscribe);
		echo json_encode($output, JSON_NUMERIC_CHECK);

	} catch (Stripe_Error $e) {
		// The charge failed for some reason. Stripe's message will explain why.
		$message = $e->getMessage();
		returnErrorWithMessage($message);
	}



}



?>
