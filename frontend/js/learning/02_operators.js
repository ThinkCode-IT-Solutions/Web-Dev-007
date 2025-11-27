console.log("Operators page");
/**
 * OPERATORS
 * operators are the symbols that perform some opearation
 * there are 4 basic types of operators
 * - Arithematic operator (+,-,*,/,%)
 * - Camparison operator (<,>,<=,>=,==,===,!=)
 * - logical operator (&&,||,!)
 * - Assigment operator (=,+=,-=.*=,/=)
 * 
 * 
 */



// Arithematics operators -> returns a new value
let num1 = 2;
let num2 = 5;
let result = num1 + num2;
result = num2 - num1;
result = num1 * num2;
result = num2 / num1;
result = num2 % num1;
console.log(result);


// Camparison operators -> return bool every time
let age = 18;
result = age < 10;
result = age > 10;
result = age >= 18;
result = age <= 18;
result = age == 18; // check only value
result = age === 18; // check value and datatype
result = age != 19;
console.log(result)



// Logical  -> return bool every time
let nam = "usama";
age  = 18;

let usaVisa = nam != "usama" && age >= 18;
usaVisa = nam != "usama" || age >= 18;
let isMarried = true;
console.log(!isMarried);
console.log("Can I have a USA Visa: " + usaVisa)

// Assignment operator
let a = 34; // 34
let b = 10; // 10
let c = a + b; // 44

a = b ; // a 10
b = a;  // b 10
c = b;  // c 10
console.log(a,b,c)

let salary = 100;
salary = salary + 10;
salary += 10;

salary -= 15;
salary *= 2;

salary /= 3

console.log(salary);

/**
 * Round #1 a  b  c  | a  b  c
 * ----
 * Zain     10 34 10   35   15   90 
 * Ibrahim  34 10 44   35   15   90
 * Abdullah 10 34 34   175  179  90
 * ZAIN     10 10 34   140  194  90
 * Muhammad 34 34 34   140  85   90
 * Sohail   10 34 10   140  194  80
 * Hashmat  34 10 44   quit--------
 * Subhan   10 10 10   180  16   50
 * Talha    10 34 10   20   24   50
 */ 


a = 10;
b = 25;
c = 50;

a += b; //a => 35
b -= c;  // b => -25
b += c + b; // b => 0
a *= 4;  // a => 140
a = c + 5; //  a => 55
b = a + 4; // b => 59

console.log(a,b,c)
// 55 59 50