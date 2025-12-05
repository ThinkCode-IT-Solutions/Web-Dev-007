<?php
// arthimetic operators

$x = 79;
$y =60;

$sum = $x + $y ;
echo $sum;
echo "<br>";
$difference = $x - $y ;
echo $difference;
echo "<br>";
$product = $x * $y ;
echo $product;
echo "<br>";
$divide = $x % $y;
echo $divide;
echo "<br>";

// increment
$userNum = 34;
$userNum--;
echo $userNum;
echo "<br>";

// comparison
if ($x > $y){
    echo "x is greater";
}else {
    echo "x is lesser";
}
echo "<br>";
// assignment 
// += , -= , *=, /=
$numChose = 6;
$numChose /=8;  //6+8=14
echo $numChose;
echo "<br>";
$firstName = "Maria";
$age =34;
echo "her name is $firstName and her age is $age";
echo "<br>";
$firstLetter = "Hello ";
$secondLetter = "World";
echo $firstLetter.$secondLetter;

echo "<br>";

// logical && || !
$q = true;
$p = false;
echo $q && $p;


?>