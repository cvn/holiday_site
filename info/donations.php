<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/thebellringer/includes/variables.php';

// SQL Stuff
$username = $portable['dbUsername'];
$password = $portable['dbPassword'];
$donationsDb = $portable['dbDonationsDb'];
$donationsTable = $portable['dbDonationsTable'];;


// This function returns an array of donation objects in descending order
function getDonations($limit){
    global $username, $password, $donationsDb, $donationsTable;

    if ($limit) {
        $limit = (int)$limit;
    } else {
        $limit = 3;
    }

    // SQL statements
    $sql = 'SELECT * FROM `'.$donationsTable.'` ORDER BY `date` DESC LIMIT :limit';

    try {
        // Establish connection
        $conn = new PDO('mysql:host=localhost;dbname='.$donationsDb.';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Get last donations
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        $result = array();
        $i = 0;
        while($row = $stmt->fetch()) {
            // white list of keys to return
            $allowed = array('name', 'email', 'subscribe', 'amount');
            $row = array_intersect_key($row, array_flip($allowed));
            // add to result array
            $result[$i] = $row;
            $i++;
        }

        // Return array
        return $result;

    } catch(PDOException $e) {
        return 'ERROR: ' . $e->getMessage();
    }
}

$allDonations = getDonations(999999);

while($cell = $allDonations) {
    echo $cell['email'];
}

echo '<pre>';
print_r($allDonations);
echo '</pre>';


?>