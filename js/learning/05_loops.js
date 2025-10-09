console.log("Loops in JS");

/**
 * LOOPS
 * loops run the code multiple times
 * loops are of three types
 * - for loop
 * - while loop
 * - do while loop
 * loop need 3 things to run
 * - initialization
 * - condition 
 * - increment/decrement
 * loops are mostly used to iterate arrays
 */


let friends = [
    "Zaid", "Muhtshim", "Ali Imran", "Hamza", "Usman", "Bilal", "Ahmad", "Suleman",
    "Owais", "Taha", "Saad", "Zain", "Hassan", "Huzaifa", "Shahzaib", "Asad",
    "Fahad", "Noman", "Rehan", "Talha", "Adeel", "Imran", "Rizwan", "Adnan",
    "Mubashir", "Hammad", "Kamran", "Naveed", "Shahid", "Danish", "Farhan",
    "Sameer", "Abdul Rafay", "Umer", "Ammar"
];




// for (let index = 0; index < friends.length; index++) {
//     let friend = friends[index];
//     console.log(index + " => Hello " + friend + " , How are you");
// }



// let index = 0;
// while (index < friends.length ){
//     let friend = friends[index];
//     console.log("Hi " +friend + " have a nice day");

//     index++;
// }

let index = 0;
do {

    let friend = friends[index];
    console.log("Hi " + friend + " have a nice day");

    index++;
} while (index > friends.length)
