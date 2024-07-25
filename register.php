<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WIMS2021";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);
    $address = $conn->real_escape_string($_POST['address']);
    $mobile_no = $conn->real_escape_string($_POST['mobile_no']);
    $gender = $conn->real_escape_string($_POST['gender']);

    $sql = "INSERT INTO users (first_name, last_name, email, password, address, mobile_no, gender) 
            VALUES ('$first_name', '$last_name', '$email', '$password', '$address', '$mobile_no', '$gender')";

    if ($conn->query($sql) === TRUE) {
        include 'success.html';
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
