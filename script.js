function getComputerChoice(){
     let yes = Math.floor(Math.random() * 3) + 1;    // yang nie gunakan ranmdom no nak tentukan dapat apa
    
    if (yes === 1) {
        console.log("Rock");            // so if random dapat no 1, akan keluar rock
    } else if (yes === 2) {             // 2 dapat paper
        console.log("Paper")            // 3 dapat scissor
    } else if (yes === 3) {
        console.log("Scissor");
    }
};
getComputerChoice();

function getHumanChoice(){
    let human = prompt("Choose your luck", "rock, paper or scissor");
   

    if (human !== "rock" && human !== "paper" && human !== "scissor"){         //nie kalau user input tak letak betul marah user
        console.log("try again");
    } else {
        console.log(`"You choose ${human}"`)
    }
};
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

}