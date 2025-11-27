console.log("hello from the DOM class");

let button = document.getElementById("mainButton");
console.log(button);
button.innerText = "Clicked";
button.innerHTML = "Consider";
button.style.backgroundColor = "#333333";
button.style.color = "white"
button.style.padding = ".7rem 1.7rem";
button.style.borderRadius = ".5rem"
button.style.border = "3px solid red";
button.style.boxShadow = "5px 5px 15px grey";
console.log(button.classList)
console.log(button.id)

// let paragraphs = document.getElementsByClassName("para");
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);


// paragraphs[0].style.backgroundColor = "red";
// paragraphs[1].style.backgroundColor = "green";


// let index = 0;
// while(index < paragraphs.length){
//     let element = paragraphs[index];
//     element.style.backgroundColor = "orchid";
//     element.style.padding = "1rem";
//     index++;
// }





let para = document.querySelector("#mainButton");
let paraAll = document.querySelectorAll("#mainButton");
console.log(paraAll);

let firstPara = paraAll[0];
firstPara.style.backgroundColor = "pink";

para.style.backgroundColor = "purple";