<?ph
<?php
$servername = "localhost"; 
$username = "root"; 
$password = "";
$dbname = "user_login_db_allado"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set the character set to UTF-8
$conn->set_charset("utf8");

?>