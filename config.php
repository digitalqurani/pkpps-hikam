<?php
// edit these values after upload
$host = "localhost";
$user = "root";
$pass = "";
$db   = "pkpps_hikam";
$conn = mysqli_connect($host, $user, $pass, $db);
if (!$conn) { die("Koneksi database gagal: " . mysqli_connect_error()); }
?>