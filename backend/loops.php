<?php
$person = [
    'name' => 'Ali',
    'age ' => 23,
    'city' => 'Bahawalpur'
];
echo $person['name'];
// index value add
$person['country'] = 'pakistan';


// LOOP 
// 1 - FOR LOOP 
for ($m=1 ; $m<12 ; $m++){
    echo $m . "<br>";
}
// 2 - While Loop
$i = 0;
while($i < 5){
    echo $i. "<br>";
    $i++;
}

$n = 0;
do {
    echo $n ;
    $n++;
}while($n < 10);


$fruits = ['apple','banana','pear','grapefruit','peach'];
echo var_dump($fruits);
echo $fruits[2]."<br>";

//  for ($i=0; $i<count($fruits); $i++){
//     echo $fruits[$i]."\n";
//  }

foreach ($fruits as $data){
    echo $data."<br>";
}
?>