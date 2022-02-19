
let choices = ["rock", "paper", "scissors"];
let playerSelection = prompt("write rock, paper or scissors", "");
let computerSelection = computerPlay(choices);
let computerScore = 0;
let playerScore = 0;



function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function game (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        ++computerScore
        ++playerScore
        alert("Its a tie!")
    } else if ( 
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        ++playerScore
        alert("You Win!")

    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")
    ){
        ++computerScore
        alert("You lost")

    }
}
console.log(computerScore);
console.log(playerScore);

let result = game(computerPlay, playerSelection);





