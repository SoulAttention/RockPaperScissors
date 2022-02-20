
const CHOICES = ["rock", "paper", "scissors"];
let playerSelection = prompt("Please choose rock, paper, or scissors", "");
let computerSelection = computerChoice(CHOICES);

function computerChoice(CHOICES) {
   return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(computerSelection, playerSelection) {
    if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`

    } else if (

        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    
    } else if (playerSelection == computerSelection) {
        return `Its a tie! ${playerSelection} and ${computerSelection}`
    
    } else {
        return `${playerSelection} is not a valid entry`
    }
    
}

let results = playRound(computerSelection, playerSelection);

alert(results);

