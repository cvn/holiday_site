<?php
// Set sandbox (test mode) to true/false.
$sandbox = TRUE;

// Set PayPal API version and credentials.
$api_version = '85.0';
$api_endpoint = $sandbox ? 'https://api-3t.sandbox.paypal.com/nvp' : 'https://api-3t.paypal.com/nvp';
$api_username = $sandbox ? 'admin_1354849110_biz_api1.mailinator.com' : 'LIVE_USERNAME_GOES_HERE';
$api_password = $sandbox ? '1354849166' : 'LIVE_PASSWORD_GOES_HERE';
$api_signature = $sandbox ? 'AWdwG6X9ibFpirfJwA1o0VRdIz91AetAyWc5cdcrTyEXkpmUwuavkWtB' : 'LIVE_SIGNATURE_GOES_HERE';

// Store request params in an array
$request_params = array
					(
					'METHOD' => 'DoDirectPayment', 
					'USER' => $api_username, 
					'PWD' => $api_password, 
					'SIGNATURE' => $api_signature, 
					'VERSION' => $api_version, 
					'PAYMENTACTION' => 'Sale', 					
					'IPADDRESS' => $_SERVER['REMOTE_ADDR'],
					'CREDITCARDTYPE' => 'Visa', 
					'ACCT' => '4939237357941588', 						
					'EXPDATE' => '122017', 			
					'CVV2' => '123', 
					'FIRSTNAME' => 'Buyer', 
					'LASTNAME' => 'Account', 
					'STREET' => '707 W. Bay Drive', 
					'CITY' => 'Largo', 
					'STATE' => 'FL', 					
					'COUNTRYCODE' => 'US', 
					'ZIP' => '33770', 
					'AMT' => '100.00', 
					'CURRENCYCODE' => 'USD', 
					'DESC' => 'Testing Payments Pro' 
					);
					
// Loop through $request_params array to generate the NVP string.
$nvp_string = '';
foreach($request_params as $var=>$val)
{
	$nvp_string .= '&'.$var.'='.urlencode($val);	
}

// Send NVP string to PayPal and store response
$curl = curl_init();
		curl_setopt($curl, CURLOPT_VERBOSE, 1);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($curl, CURLOPT_TIMEOUT, 30);
		curl_setopt($curl, CURLOPT_URL, $api_endpoint);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $nvp_string);

$result = curl_exec($curl);
echo $result.'<br /><br />';
curl_close($curl);

// Parse the API response
$result_array = NVPToArray($result);

echo '<pre />';
print_r($result_array);

// Function to convert NTP string to an array
function NVPToArray($NVPString)
{
	$proArray = array();
	while(strlen($NVPString))
	{
		// name
		$keypos= strpos($NVPString,'=');
		$keyval = substr($NVPString,0,$keypos);
		// value
		$valuepos = strpos($NVPString,'&') ? strpos($NVPString,'&'): strlen($NVPString);
		$valval = substr($NVPString,$keypos+1,$valuepos-$keypos-1);
		// decoding the respose
		$proArray[$keyval] = urldecode($valval);
		$NVPString = substr($NVPString,$valuepos+1,strlen($NVPString));
	}
	return $proArray;
}

?>