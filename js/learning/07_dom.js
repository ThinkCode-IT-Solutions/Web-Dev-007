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


