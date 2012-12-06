<?php

include_once 'donation-functions.php';

$output = addDonation($_REQUEST['name'],$_REQUEST['amount']);
echo json_encode($output);

?>
