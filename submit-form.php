<?php
// Define database connection variables
$servername = "localhost";
$username = "root";
$password = "harsh2010";
$dbname = "wtl_form";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if (mysqli_query($conn, $sql)) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . mysqli_error($conn);
}

// Select database
mysqli_select_db($conn, $dbname);

// Create table
$sql = "CREATE TABLE IF NOT EXISTS form_data (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
address2 VARCHAR(50),
city VARCHAR(50) NOT NULL,
zip VARCHAR(10) NOT NULL
)";

if (mysqli_query($conn, $sql)) {
  echo "Table created successfully";
} else {
  echo "Error creating table: " . mysqli_error($conn);
}

// Insert data into table
if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['address']) && isset($_POST['city']) && isset($_POST['zip'])) {
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $password = mysqli_real_escape_string($conn, $_POST['password']);
  $address = mysqli_real_escape_string($conn, $_POST['address']);
  $address2 = mysqli_real_escape_string($conn, $_POST['address2']);
  $city = mysqli_real_escape_string($conn, $_POST['city']);
  $zip = mysqli_real_escape_string($conn, $_POST['zip']);

  $sql = "INSERT INTO form_data (email, password, address, address2, city, zip) VALUES ('$email', '$password', '$address', '$address2', '$city', '$zip')";

  if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
  } else {
    echo "Error inserting data: " . mysqli_error($conn);
  }
}

// Close connection
mysqli_close($conn);
?>
