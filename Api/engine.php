<?php 

function Register()
{
    
    include 'db.php';

      
    $json_input = file_get_contents('php://input');


    $data = json_decode($json_input, true);

    $fname = $data['fname'];
    $lname = $data['lname'];
    $phone = $data['phone'];
    $dist  = $data['dist'];
    $email = $data['email'];
    $pass  = $data['pass'];
    $fname = $data['fname'];


    if(mysqli_query($con,"INSERT INTO tydi_users(fname,lname,phone,district,email,pass)VALUES('$fname','$lname','$phone','$dist','$email','$pass')"))
    {
            $message[] = 'done';
    }


     echo json_encode($message);

}