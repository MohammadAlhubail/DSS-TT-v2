<?php

if(isset($_POST["submit"])){

    // grab the data
    $username = $_post["username"];
    $email = $_post["email"];
    $password = $_post["password"];
    $ConfirmPassword = $_post["repeat-password"];

    // instantitate signupconter class
    include "../classes/signup.classes.php";
    include "../classes/signup-contr.classes.php";
    $signup = new signupContr($username, $email, $password, $ConfirmPassword);

    //running error handler and user signup

    //going to back to front page 

}