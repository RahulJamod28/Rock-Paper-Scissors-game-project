// Q 1
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",() => {
    // console.log("you are trying to change mode");
    if(currmode==="light") {
        currmode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode ="light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currmode);
});


// practice krna he mouseover use krke