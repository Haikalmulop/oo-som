const choices = ["Rock", "Paper", "Scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoices){

    const computerChoices = choices[Math.floor(Math.random() * choices.length)]
    let result = "";  
    //console.log(computerChoices)

    if (playerChoices === computerChoices) {
        result = "Draw";
    }
    else{
        switch(playerChoices){
            case "Rock":
                result = (computerChoices === "Scissor") ? "You Win!" : "You Lose!";
                //console.log(result)
                break;
            case "Paper":
                result = (computerChoices === "Rock") ? "You Win!" : "You Lose!";
                //console.log(result)
                break;
            case "Scissor":
                result = (computerChoices === "Paper") ? "You Win!" : "You Lose!";
                //console.log(result)
            break;
            }
        }
       
       playerDisplay.textContent = `Player: ${playerChoices}`;
       computerDisplay.textContent = `Computer: ${computerChoices}`;
       resultDisplay.textContent = result;

       resultDisplay.classList.remove("greenText", "redText");

       switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
       };

       if (playerScore === 5 || computerScore === 5){
        computerScore = -1;
        playerScore = -1;
        };
};