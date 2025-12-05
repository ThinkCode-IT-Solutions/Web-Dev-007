<?php
 
$userNumber = 450;
$totalNum = 1200;
$percentage = ($userNumber/$totalNum)*100;


if($percentage>= 90){
    echo " u are on the top";

}elseif($percentage>=80){
    echo "u are second";

}elseif($percentage>=70){
    echo "u are third";
    
}elseif($percentage>=60){
    echo "u are forth";
    
}elseif($percentage>=50){
    echo "u are fifth";
    
}elseif($percentage>=40){
    echo " average";
    
}else{
    echo " failed";
}
echo "<br>";
//switch case

$day = "friday";
switch($day){
    case "monday":
        echo "today is monday";
        break;
    case "tuesday":
        echo "today is tuesday";
        break;
    default:
        echo "today is neither monday nor tuesday";
        break;
}


$userAge = 14;
$ageOfLicense = 18;
if($userAge < $ageOfLicense){
    echo " u are not eligible";

}else {
    echo " u are  eligible ";
}


 echo "<br>";
 
 $arrayFruits = ["apple" , "pear", "banana", "strawberry"];
 echo $arrayFruits[2];
 ?>


