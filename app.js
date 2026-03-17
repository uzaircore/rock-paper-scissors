let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll (".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock","Paper","scissors"]
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game was drawn. Try again!";
    msg.style.backgroundColor = "black";
};

const showWiner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // generate computer choices
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        //draw game 
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "Rock"){
            // Paper , Scissors
        userWin = compChoice === "Paper" ? false :true;
        }
        else if (userChoice ==="Paper"){
            // Rock , Scissors
            userWin = compChoice === "Scissors" ? false:true;
        }
        else {
            userWin = compChoice === "Rock" ? false:true;
        }
        showWiner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener ("click" ,()=> {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
        
    })
});