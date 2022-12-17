<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$con = mysqli_connect("127.0.0.1", "root", "", "account");

if($con === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>