console.log("welcome to the if else conditionals");


/**
 * IF ELSE Conditional
 */


let age =  45;
let license = true;
if(age <= 0){
    console.log("you are not even born yet , pehly peda ho jao");
}else if (age < 18){
    console.log("you are not legal to drive");
}else if (age < 60) {
    console.log("you can drive ");
    if(!license){
        console.log("you dont have a lisence");
    }

}else if (age >= 60 && age < 150) {
    console.log("you can drive legally but you should not");
}else if (age >= 150) {
    console.log("you are a bhoot , this website is for humans");
}else{
    console.log("Some error occured, invalid vale");
}
