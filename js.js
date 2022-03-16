//  Declaring Variables
const CHOICES = ["rock", "paper", "scissors"];
let playerSelection = prompt("Please choose rock, paper, or scissors", "").toLowerCase();
let computerSelection = computerChoice(CHOICES);
let playerScore = 0;
let computerScore = 0;

// Computer choosing rock, paper, or scissors
function computerChoice(CHOICES) {
   return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Determining winner
function playRound(computerSelection, playerSelection) {

    if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {
        computerScore = ++computerScore
        return `You lose! ${computerSelection} beats ${playerSelection}` 
        

    } else if (

        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore = ++playerScore
        return `You Win! ${playerSelection} beats ${computerSelection}`
        
    
    } else if (playerSelection == computerSelection) {
        return `Its a tie! ${playerSelection} and ${computerSelection}`
        
    } else {
        return `${playerSelection} is not a valid entry`
    }
}



// Best of 5 rounds
 function game(playRound) {
    for (let i = 0; computerScore || playerScore < 5; i++){
        
       playRound

    
     }
 }

console.log(playRound(computerSelection, playerSelection))
//

console.log(playerScore);
console.log(computerScore);

