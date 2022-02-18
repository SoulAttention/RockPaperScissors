let playerSelection = prompt("write rock, paper or scissors");
const choices = ["rock", "paper", "scissors"];
let computerSelection = computerPlay(choices);


function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function game(computerPlay, playerSelection) {
    switch(computerSelection > playerSelection) {
        case "rock" > "paper":
            return ("You Win Paper beats Rock!");
            break;
        case "scissors" > "paper":
            return ("You lose scissors beats paper!");
            break;
        case "paper" > "paper":
            return ("Its a tie!");
            break;
        case "rock" > "rock":
            return ("Its a tie!!");
            break;
        case "scissors" > "rock":
            return ("You win rock beats scissors!");
            break;
        case "paper" > "rock":
            return ("You lose paper beats rock!"); 
            break;   
        case "rock" > "scissors":
            return ("You lose rock beats scissors!");
            break;
        case "scissors" > "scissors":
            return ("Its a tie!");
            break;
        case "paper" > "scissors":
            return ("You win scissors beats paper!");
            break;
        default:
            return ("uh oh something went wrong");
    }
}

let result = game(computerPlay, playerSelection);

alert(result);

function realGame(result) {
    function playRound {
        
    }
}

console.log(playerSelection);