console.log("Operators page");
/**
 * OPERATORS
 * operators are the symbols that perform some opearation
 * there are 4 basic types of operators
 * - Arithematic operator (+,-,*,/,%)
 * - Camparison operator (<,>,<=,>=,==,===,!=)
 * - Assigment operator (=,+=,-=.*=,/=)
 * - logical operator (&&,||,!)
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



// Logical Operator
let nam = "usama";
age  = 18;

let usaVisa = nam != "usama" && age >= 18;
usaVisa = nam != "usama" || age >= 18;
let isMarried = true;
console.log(!isMarried);
console.log("Can I have a USA Visa: " + usaVisa)

