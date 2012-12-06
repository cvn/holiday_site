<?php

// This function returns a JSON array of the most recent donations in descending order
function getDonations($limit){
    if (!$limit) {
        $limit = 2;
    }

    // SQL Stuff
    $username = 'root';
    $password = 'holiday535!';
    $donationsTable = 'donatedTest';
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
        return json_encode($result);

    } catch(PDOException $e) {
        return 'ERROR: ' . $e->getMessage();
    }
}

echo getDonations();

?>
