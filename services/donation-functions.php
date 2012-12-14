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
            $allowed = array('amount','total','key','date');
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


// This function returns an object of the inserted DB row
function addDonation($amount,$name,$email,$subscribe){
    global $username, $password, $donationsDb, $donationsTable;

    if (!$amount) {
        return "Donation not added. No donation amount provided.";
    }

    // SQL statements
    $sql = 'INSERT INTO '.$donationsTable.' (name,email,subscribe,amount,total) VALUES (:name,:email,:subscribe,:amount,:total)';
    $validateSql = 'SELECT * FROM `'.$donationsTable.'` WHERE `key` = :id';
    $sumSql = 'SELECT SUM(amount) AS sumTotal FROM `'.$donationsTable;

    try {
        // Establish connection
        $conn = new PDO('mysql:host=localhost;dbname='.$donationsDb.';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Get sum of previous donations
        $sumStmt = $conn->prepare($sumSql);
        $sumStmt->execute();
        while($row = $sumStmt->fetch()) {
            $sum = $row[sumTotal];
        }

        // Add current amount to sum before inserting
        $sum += $amount;

        // Insert new donation
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':subscribe', $subscribe);
        $stmt->bindParam(':amount', $amount);
        $stmt->bindParam(':total', $sum);
        $stmt->execute();

        // Retrieve what has been inserted
        $insertedID = $conn->lastInsertId();
        $validateStmt = $conn->prepare($validateSql);
        $validateStmt->setFetchMode(PDO::FETCH_ASSOC);
        $validateStmt->bindParam(':id', $insertedID);
        $validateStmt->execute();
        while($row = $validateStmt->fetch()) {
            $result = $row;
        }

        // Return object
        return $result;

    } catch(PDOException $e) {
        return 'ERROR: ' . $e->getMessage();
    }
}

?>
