<?php

require_once 'donation-functions.php';

// Get request variables
$uName = $_REQUEST['name'];
$uEmail = $_REQUEST['email'];
$uSubscribe = (isset($_REQUEST['subscribe'])) ? 1 : 0;
$token = $_REQUEST['stripeToken'];

// Data shaping
if($_REQUEST['amount']=='other'){
	$uAmount = $_REQUEST['amount-other'];
} else {
	$uAmount = $_REQUEST['amount'];
}
$amountInCents = intval($uAmount * 100);
$uSubscribe = (isset($uSubscribe)) ? 1 : 0;

if ($token) {
	// Stripe
	require_once("stripe-php-1.7.10/lib/Stripe.php");

	// set your secret key: remember to change this to your live secret key in production
	// see your keys here https://manage.stripe.com/account
	Stripe::setApiKey("sk_test_FmA5Buf0OMtDhHdzNyqG1tz7");

	// create the charge on Stripe's servers - this will charge the user's card
	$charge = Stripe_Charge::create(array(
	  "amount" => $amountInCents, // amount in cents, again
	  "currency" => "usd",
	  "card" => $token,
	  "description" => $uName.' <'.$uEmail.'>')
	);	
}

$output = addDonation($uAmount,$uName,$uEmail,$uSubscribe);
echo json_encode($output, JSON_NUMERIC_CHECK);

?>
