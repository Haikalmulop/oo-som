function getComputerChoice(){
    let game = ["rock", "paper", "scissor"];
    let yes = Math.floor(Math.random() * game.length);
        return game[yes];
};

let computer = getComputerChoice();
console.log(computer)
let player = prompt("Choose your luck", "rock, paper or scissor").toLowerCase();
console.log(player)

let playerScore = 0;
let computerScore = 0;
    
    function playRound(player, computer){

        if (player === computer){
            return "draw";
        
        }   else if (player == "rock" && computer == "paper"){
            //computerScore++
                return "computer win";
        }  else if (player == "scissor" && computer == "rock"){
                //computerScore++
                return "computer win";
        } else if ( player == "paper" && computer == "scissor"){
                //computerScore++
                return "computer win";
            } else {
                //playerScore++
                return "you win";
            }
        }
playRound();
//console.log(playerScore)
//console.log(computerScore)
//console.log(playRound(player,computer));
function playGame(){
    for (i = 1; i < 3; i++){
        let result = playRound(player,computer)
        console.log(result)
        if (result == "you win"){
            playerScore++
            console.log(playerScore)
        } else {
            computerScore++
            console.log(computerScore)
        }
        
        if (playerScore > computerScore){
            return "Player win! GAME OVER";
        } else {
            return "Computer Win! GAME OVER";
        }
    }
 }

let end = playGame();
console.log(end) 