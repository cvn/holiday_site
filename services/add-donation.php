<?php

// This function returns a JSON object of the inserted DB row
function addDonation($name,$amount){
    if (!$amount) {
        return "Donation not added. No donation amount provided.";
    }

    if (!$name) {
        $name = "Anonymous Donor";
    }

    // SQL Stuff
    $username = 'root';
    $password = 'holiday535!';
    $donationsTable = 'donatedTest';
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

        // Return JSON
        return json_encode($result);

    } catch(PDOException $e) {
        return 'ERROR: ' . $e->getMessage();
    }
}

echo addDonation($_REQUEST['name'],$_REQUEST['amount']);

?>
