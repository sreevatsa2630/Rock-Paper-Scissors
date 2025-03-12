let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = ()=>{
     const options = ["rock","paper","scissors"];
     const ranIdx = Math.floor(Math.random() * 3) ;
     return options[ranIdx];
};

const drawGame = ()=>{
    msg.innerText = "Game was Draw. Play again."
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = "You Win! Your ",userChoice," beats ",compChoice;
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = "You Lose!",compChoice," beats your ",userChoice;
    }
};

const playGame = (userChoice)=>{
//generate computer choice
const compChoice = genCompChoice();

if(userChoice == compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
       userWin = compChoice === "scissors" ? false : true;
    }else{
        userWin =compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});