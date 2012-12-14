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
		,'stripePrivateKey'=>'sk_test_FmA5Buf0OMtDhHdzNyqG1tz7'
		,'stripePublicKey'=>'pk_test_Vt3bh8kq7E1FRWhk8Id61GZ8'
		,'payCard'=>'4242424242424242'
		,'payCvv'=>'123'
		,'payMonth'=>'12'
		,'payYear'=>'2013'
		,'vimeoEmbed'=>'http://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1'

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
		,'stripePrivateKey'=>'sk_live_S1j17FOV6hBjEhbhySDpA3Bn'
		,'stripePublicKey'=>'pk_live_5QC3eMUhNnNnfbM5UNFatjz1'
		,'payCard'=>''
		,'payCvv'=>''
		,'payMonth'=>''
		,'payYear'=>''
		,'vimeoEmbed'=>'https://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1'
	);

}

// echo '<pre>'.print_r($portable).'</pre>';

?>