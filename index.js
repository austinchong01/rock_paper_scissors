
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
function getHumanChoice(){
    let choice = window.prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

//determine who wins
function playRound(){
    let humChoice = getHumanChoice();
    console.log(humChoice);
    let compChoice = getComputerChoice();
    console.log(compChoice);


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

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log (playRound());
        console.log(humanScore);
        console.log(computerScore);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
