<?php

include_once 'donation-functions.php';

// Stripe
require_once("stripe-php-1.7.10/lib/Stripe.php");

// set your secret key: remember to change this to your live secret key in production
// see your keys here https://manage.stripe.com/account
Stripe::setApiKey("sk_test_FmA5Buf0OMtDhHdzNyqG1tz7");

// get the credit card details submitted by the form
$token = $_POST['stripeToken'];

// create the charge on Stripe's servers - this will charge the user's card
$charge = Stripe_Charge::create(array(
  "amount" => 1000, // amount in cents, again
  "currency" => "usd",
  "card" => $token,
  "description" => "payinguser@example.com")
);


$output = addDonation($_REQUEST['name'],$_REQUEST['amount']);
echo json_encode($output, JSON_NUMERIC_CHECK);

?>
