console.log("Hello from the Dom 2 lecture");


let button = document.querySelector("body");
console.log(button);

button.style.backgroundColor = "black";
button.style.color = "white"
button.style.padding  = ".8rem 1.7rem";
button.style.borderRadius = ".5rem";
let onClick = (e) => {

    // alert("The main button has been clicked");
    console.log(e.key);

    if(e.key == "F" && e.ctrlKey == true){
        alert("you rocks");
        e.target.style.backgroundColor = "green";
    }
}
button.addEventListener("keyup",onClick)


/**
 * JavaScript Events
 * click
 * dblclick
 * mouseover
 * mouseenter
 * mouseleave
 * drag
 * dragStart
 * dragEnd
 * keyup
 * keydown
 * focus
 * blur
 * submit
 * 
 */