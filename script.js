let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");//to acess the div of imges
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}
const drawGame = () => {

    msg.innerText = "Game was Draw Try again!"
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    //print user choice

    //generate computer choice
    const compChoice = genComputerChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice = "rock") {
            //papper,scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice = "paper") {
            //rock,scissors
            userWin = compChoice == "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

}
choices.forEach((choice) => {//iterate to each div of choices
    choice.addEventListener("click", () => {//click event to all the three images
        let userChoice = choice.getAttribute("id");//to get the id rock,papper,or scissor
        playGame(userChoice);//calls the function
    });
});