console.log("Hello from the functions page");


/**
 * FUNCTIONS
 * functions are the block of code that we can reuse
 * function consist of two parts
 * - function definition
 * - function call
 * function has perameters and arguments
 */

function sayHi() {
    console.log("Hi Friend, how are you");
}

function sumTwoNumber(n1, n2) {
    let result = n1 + n2;
    console.log(`The sum of ${n1} and ${n2} is ${result}`);
}


function greetMyFriend(name) {
    console.log(`Hi ${name}, how's your day today`);
}

function checkDrivingStatus(name, age, license) {

    if (name == "usama") {
        console.log("some error occured , please never try again");
        return false;
    } else {
        if (age >= 18 && age <= 60) {
            if (license) {
                alert(name + " You have a license , you can drive legally ");
                return true;
            } else {
                alert(name + " you dont have a license but your age qualifies , please register your licese");
                return false;
            }
        } else {
            alert(name + " you are under or over legal age");
            return false;
        }
    }

}
function printTable(table) {
    let index = 1;
    while (index <= 10){
        let multiply = index * table;
        console.log(table + " X "+ index + " = " + multiply);


        index++;
    }
}

function getPercentage (obtained,total){
    let percentage = (obtained/total)*100;
    return percentage;
}

function getGrades (perc){
    if(perc >= 90){
        return "A";
    }else if (perc >= 80 && perc < 90){
        return "B";
    }else if (perc >= 70 && perc < 80){
        return "C";
    }else if (perc >= 40 && perc < 70){
        return "D";
    }else if (perc < 40){
        return "F";
    }else{
        return null;
    }
}
// 2 X 1 = 2
let num1 = 34;
let num2 = 355;



sayHi();
sumTwoNumber(10, 20);
sumTwoNumber(40, 60);
sumTwoNumber(7833738, 634340);
sumTwoNumber(num2, num1);

greetMyFriend("Ahsan");
greetMyFriend("Subhan");
greetMyFriend("Abdullah")


printTable(2);
printTable(98);

// let result = checkDrivingStatus("Shahzad", 220, false);
// console.log("result of driving test is " + result);


// alert("hello")



// take input from user
let name = prompt("Enter your name");
let obtainedMarks = parseInt (prompt("Enter your obtained marks"));
let totalMarks = parseInt( prompt("Enter your total marks"));

// generate percentage
let  percentage = getPercentage(1001,1100);

// generate grades
let grade = getGrades(percentage);


console.log("Grade: " + grade ,"Percentage: " + percentage);