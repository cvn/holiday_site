<?php

require_once 'donation-functions.php';

// Get request variables
$userName = $_REQUEST['name'];
$userEmail = $_REQUEST['email'];
$token = $_REQUEST['stripeToken'];
if($_REQUEST['amount']=='other'){
	$userAmount = $_REQUEST['amount-other'];
} else {
	$userAmount = $_REQUEST['amount'];
}
$amountInCents = intval($userAmount * 100);

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
	  "description" => $userEmail)
	);	
}

$output = addDonation($userAmount,$userName,$userEmail);
echo json_encode($output, JSON_NUMERIC_CHECK);

?>
