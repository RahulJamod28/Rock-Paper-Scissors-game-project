// Rock Paper Scissors Game
let userscore = 0;
let Compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const Compscorepara = document.querySelector("#Comp-score");

const genComchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userchoice,Compchoice) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore; 
        msg.innerText = `you win! Your ${userchoice} beats ${Compchoice}`;
        msg.style.backgroundColor = "green";
    } else{
        Compscore++;
        Compscorepara.innerText = Compscore;
        console.log("you lose");
        msg.innerText = `you lose. ${Compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    // generate computer choice
    const Compchoice = genComchoice();

    if(userchoice === Compchoice) {
        // Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userchoice === "rock") {
            // sessors, paper
            userWin = Compchoice === "paper"? false: true;
        }else if (userchoice === "paper") {
            // rock,scissors
            userWin = Compchoice === "scissors"? false:true;
        }else{
            //rock,paper
            userWin = Compchoice === "rock"?false:true;
        }
        showWinner(userWin ,userchoice,Compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoiceId);
        playGame(userchoice);
    });
});
