<?php

$ref=$_SERVER['HTTP_REFERER'];

echo "<font face='Verdana' size='3'><b>
Referrer of this page  = $ref </b>";

//  http://player.vimeo.com/video/53978551?api=1&player_id=player_1

if ( eregi("MSIE", getenv( "HTTP_USER_AGENT" ) ) 
	|| eregi("Internet Explorer", getenv("HTTP_USER_AGENT" ) ) 
	|| strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'mobile') 
	|| strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'android')
	) {

	$url = 'mobile.php';
  
   header("Location: $url");
}


// else { echo 'not shitty';}

?>