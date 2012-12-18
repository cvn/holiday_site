<?php

// This string should be part of only the DEV URL
$devIdentifier = 'holiday';

if (strpos($_SERVER[HTTP_HOST], $devIdentifier) !== false){

	// DEV

	$portable = array(
		 'dev'=>1
		,'live'=>0
		,'dbUsername'=>'root'
		,'dbPassword'=>'holiday535!'
		,'dbDonationsDb'=>'donations'
		,'dbDonationsTable'=>'donatedTest'
		,'dbShareTable' => 'share'
		,'stripePrivateKey'=>'sk_test_FmA5Buf0OMtDhHdzNyqG1tz7'
		,'stripePublicKey'=>'pk_test_Vt3bh8kq7E1FRWhk8Id61GZ8'
		,'payCard'=>'4242424242424242'
		,'payCvv'=>'123'
		,'payMonth'=>'12'
		,'payYear'=>'2013'
		,'vimeoEmbed'=>'http://player.vimeo.com/video/55681245?api=1&amp;player_id=player_1'
		,'imagePath' => 'http://holiday.weareroyale.com/thebellringer/images/'
		,'royaleSite' => 'http://weareroyale.com/'
		,'bellSite' => 'http://holiday.weareroyale.com/thebellringer/'
		,'fromName' => 'Bryan Shrednick'
		,'cdn' => 'http://d2so4q6qccqxl.cloudfront.net/thebellringer/'
	);

} else {

	// LIVE

	$portable = array(
		 'dev'=>0
		,'live'=>1
		,'dbUsername'=>'holiday'
		,'dbPassword'=>'thebellringer'
		,'dbDonationsDb'=>'holiday'
		,'dbDonationsTable'=>'donations'
		,'dbShareTable' => 'share'
		,'stripePrivateKey'=>'sk_live_S1j17FOV6hBjEhbhySDpA3Bn'
		,'stripePublicKey'=>'pk_live_5QC3eMUhNnNnfbM5UNFatjz1'
		,'payCard'=>''
		,'payCvv'=>''
		,'payMonth'=>''
		,'payYear'=>''
		,'vimeoEmbed'=>'https://player.vimeo.com/video/55681245?api=1&amp;player_id=player_1'
		,'imagePath' => 'http://weareroyale.com/thebellringer/images/'
		,'royaleSite' => 'http://weareroyale.com/'
		,'bellSite' => 'https://weareroyale.com/thebellringer/'
		,'fromName' => 'Bryan Shrednick'
		,'cdn' => 'https://d2so4q6qccqxl.cloudfront.net/thebellringer/'
	);

}

// echo '<pre>'.print_r($portable).'</pre>';

?>