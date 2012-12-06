<?php

$username = 'root';
$password = 'holiday535!';

$donationsTable = 'donatedTest';
$totalAmountTable = 'totalAmountTest';
$sql = 'INSERT INTO '.$donationsTable.' (name,amount) VALUES (:name,:amount)';
$validateSql = 'SELECT * FROM `'.$donationsTable.'` WHERE `key` = :id';
$totalAmountSql = 


$name = $_REQUEST['name'];
$amount = $_REQUEST['amount'];

try {
    $conn = new PDO('mysql:host=localhost;dbname=donations', $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Insert new donation
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':amount', $amount);
    $stmt->execute();

    // Display what information has been inserted
    $insertedID = $conn->lastInsertId();
    $validateStmt = $conn->prepare($validateSql);
    $validateStmt->bindParam(':id', $insertedID);
    $validateStmt->execute();
    while($row = $validateStmt->fetch()) {
        print $row[name];
        print $row[amount];
    }

    


} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}



?>  