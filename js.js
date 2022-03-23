//  Declaring Variables
const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

game();

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
        computerScore = ++computerScore;
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        
    } else if (

        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore = ++playerScore;
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
        
    } else if (playerSelection == computerSelection) {
        alert(`Its a tie! ${playerSelection} and ${computerSelection}`);
        
    } else {
        alert(`${playerSelection} is not a valid entry`);
    }
}




// Best of 5 rounds
function game() {
    
    while (computerScore < 5 && playerScore < 5) {
        
        let playerSelection = prompt("Please choose rock, paper, or scissors", "").toLowerCase();
        let computerSelection = computerChoice(CHOICES);
        playRound(computerSelection, playerSelection);
        
        let score = `The score is ${playerScore} to ${computerScore}.`
        alert(score);

        
            
    }
    
 }