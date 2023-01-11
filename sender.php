<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    $to  = "<anatoliy.n25@gmail.com>, " ; 
    $to .= "mail2@example.com>"; 
    $subject = "Message title"; 
    $message = $name . '<br>' . $phone . '<br>' . $email . '<br>'. $text;
    $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
    $headers .= "From: <from@example.com>\r\n"; 
    $headers .= "Reply-To: reply-to@example.com\r\n"; 
    mail($to, $subject, $message, $headers); 
?>