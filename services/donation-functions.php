<?php

// SQL Stuff
$username = 'root';
$password = 'holiday535!';
$donationsTable = 'donatedTest';


// This function returns an array of donation objects in descending order
function getDonations($limit){
    global $username, $password, $donationsTable;

    if (!$limit) {
        $limit = 2;
    }

    // SQL statements
    $sql = 'SELECT * FROM `'.$donationsTable.'` ORDER BY `date` DESC LIMIT :limit';

    try {
        // Establish connection
        $conn = new PDO('mysql:host=localhost;dbname=donations', $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Get last donations
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        $result = array();
        $i = 0;
        while($row = $stmt->fetch()) {
            $result[$i] = $row;
            $i++;
        }

        // Return JSON
        return $result;

    } catch(PDOException $e) {
        return 'ERROR: ' . $e->getMessage();
    }
}


// This function returns an object of the inserted DB row
function addDonation($name,$amount){
    global $username, $password, $donationsTable;

    if (!$amount) {
        return "Donation not added. No donation amount provided.";
    }

    if (!$name) {
        $name = "Anonymous Donor";
    }

    // SQL statements
    $sql = 'INSERT INTO '.$donationsTable.' (name,amount,total) VALUES (:name,:amount,:total)';
    $validateSql = 'SELECT * FROM `'.$donationsTable.'` WHERE `key` = :id';
    $sumSql = 'SELECT SUM(amount) AS sumTotal FROM `'.$donationsTable;

    try {
        // Establish connection
        $conn = new PDO('mysql:host=localhost;dbname=donations', $username, $password);
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

        // Return
        return $result;

    } catch(PDOException $e) {
        return 'ERROR: ' . $e->getMessage();
    }
}

?>
