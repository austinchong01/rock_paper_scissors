
//randomly return rock, paper, or scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10);

    if (0 <= choice && choice < 3){
        return "rock";
    } else if (3 <= choice && choice < 6){
        return "paper";
    } else if (6 <= choice && choice <= 9){
        return "scissors";
    }
}

//get human choice
// function getHumanChoice(){
//     let choice = window.prompt("Rock, Paper, or Scissors?");
//     return choice.toLowerCase();
// }

//determine who wins
function playRound(choice){
    // let humChoice = getHumanChoice();

    let humChoice = choice;
    //console.log(`human: ${humChoice}`);
    let compChoice = getComputerChoice();
    //console.log(`computer: ${compChoice}`);


    if (humChoice == compChoice) {
        return "It's a tie!";
    }

    if (humChoice == "scissors" && compChoice == "paper"){
        ++humanScore;
        return "You win! Scissors beats paper!";
    }else if (humChoice == "scissors" && compChoice == "rock"){
        ++computerScore;
        return "You lose! Rock beats scissors";
    }

    if (humChoice == "rock" && compChoice == "scissors"){
        ++humanScore;
        return "You win! Rock beats scissors!";
    }else if (humChoice == "rock" && compChoice == "paper"){
        ++computerScore;
        return "You lose! Paper beats rock";
    }

    if (humChoice == "paper" && compChoice == "rock"){
        ++humanScore;
        return "You win! Paper beats rock!";
    }else if (humChoice == "paper" && compChoice == "scissors"){
        ++computerScore;
        return "You lose! Scissors beats paper";
    }
}

// create 3 buttons for selection
// add event listener to buttons
// call playRound with the correct "playerSelection" once the button is clicked

let humanScore = 0;
let computerScore = 0;


const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);


const body = document.querySelector("body");
// body.style.cssText = "display: flex; gap: 10px";

let end = false;

body.addEventListener("click", (event) => {
    if (end){
        return;
    }

    let target = event.target;
    let res;

    switch(target.textContent){
        case "rock":
            res = playRound("rock");
            break;
        case "paper":
            res = playRound("paper");
            break;
        case "scissors":
            res = playRound("scissors");
            break;
        default:
            return;
    }

    let div = document.createElement("div");
    div.textContent = res + " You: " + humanScore + " Computer: " + computerScore;
    document.body.appendChild(div);

    if (humanScore == 5){
        div = document.createElement("div");
        div.textContent = "You beat the computer!";
        document.body.appendChild(div);
        end = true;
        return;
    }
    
    if (computerScore == 5){
        div = document.createElement("div");
        div.textContent = "Computer Wins!";
        document.body.appendChild(div);
        end = true;
        return;
    }

});

