<?php

$name = "Shahzad";
$age = 34.3;
$isMarried = true;
$friendsName = ["Shahzad", "Ali" , "Ahmad"];
$franchiseOwner = [
    "bahawalpur" => "Shahzad",
    "Karachi" => "Ali",
]; // associative array

$null = null;
echo "Hello world";
echo "<br>";
echo $name;
echo "<br>";
echo $age;
echo "<br>";
// echo var_dump($friendsName);
// echo $friendsName[1];


// define("KAM", "Software Engineer");
 $title = "Learning PHP";
 const kam = "software";
// $title = "Not Learning PHP";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
    <h1>
        <?php  echo $title; ?>
        
    </h1>
    <p>
        <?php echo $franchiseOwner['Karachi']; ?>
    </p>
</body>
</html>







<!-- let array = [2,3,4,5]
 let info =  {
    name : "value",
    age : 234;
 };


 $array = [2,3,45,5]

 $info = [
    "name" => "Shahzad"
    ] -->


    /**
        recipient
        schoolName
        cityName

        recipientGender

        applicationBody

        senderName
        senderRollNo
        

    */