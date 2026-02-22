<?php
$servername = "localhost";  // XAMPP default
$username = "root";         // XAMPP default
$password = "";             // XAMPP default
$database = "food_website"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully"; // Optional test
?>