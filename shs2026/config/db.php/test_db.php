<?php
// Include database connection
include('config/db.php');

// Test connection
if ($conn) {
    echo "Database connected successfully!";
} else {
    echo "Connection failed!";
}
?>