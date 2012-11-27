<?php


/*
 * Anti-Pattern
 */
# Connect

//require_once "json/JSON.php";
//$json = new Services_JSON();

$username = 'root';
$password = 'holiday535!';

/*$name2 = $_GET["name"];
$amount2 = $_GET["amount"];*/

// echo $name2;

//mysql_connect('localhost', 'root', 'holiday535!') or die('Could not connect: ' . mysql_error());


//$name = 'Mack';
try {
$conn = new PDO('mysql:host=localhost;dbname=donations', $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$stmt = $conn->prepare('SELECT name, amount FROM donatedTest');
    $stmt->execute(array('name' => $name));


//$result = $stmt->fetchAll();

while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //print_r($row);
		$namez = $row['name'];
		$amountz =  $row['amount'];
		$datez = $row['date'];
		$value = array('name' => $namez, 'amount' =>$amountz, 'date' => $datez);

        echo $row['name'].'\n ';

        $output = $json->encode($value);
 
		print($output);
 


    }


} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}



?>