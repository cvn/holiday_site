<?php

include_once 'donation-functions.php';

$output = getDonations($_REQUEST['limit']);
echo json_encode($output, JSON_NUMERIC_CHECK);

?>
