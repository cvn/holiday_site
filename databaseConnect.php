<?php


/*
 * Anti-Pattern
 */
# Connect

$username = 'root';
$password = 'holiday535!';
//mysql_connect('localhost', 'root', 'holiday535!') or die('Could not connect: ' . mysql_error());


$name = 'Mack';
try {
$conn = new PDO('mysql:host=localhost;dbname=donations', $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$stmt = $conn->prepare('SELECT * FROM donatedTest WHERE name = :name');
    $stmt->execute(array('name' => $name));

		  
    // $result = $stmt->fetchAll();

    while($row = $stmt->fetch()) {
        print_r($row);
    }


} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}

# Choose a database
#mysql_select_db('donations') or die('Could not select database');
# Perform database query
#$query = "SELECT * from donatedTest";
#$result = mysql_query($query) or die('Query failed: ' . mysql_error());
# Filter through rows and echo desired information
#while ($row = mysql_fetch_object($result)) {
#    echo $row->name;
#}


?>