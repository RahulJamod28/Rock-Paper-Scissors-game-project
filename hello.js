let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
    // console.log(evt.clickY);
    // console.log("btn1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a);

// }

// evenlistener ke through ham same event pr multiple kam krva skte he ye hamare pas benifit hota he
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
    console.log(evt);
    console.log(evt.type);
})
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
})

let div = document.querySelector("div");



// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("you are inside div");
// }
