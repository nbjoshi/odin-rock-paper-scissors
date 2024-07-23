function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please pick between rock, paper, and scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("It's a tie");
    }
    else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    console.log("You win! Rock beats Scissors.");
                    humanScore += 1;
                }
                else {
                    console.log("You lose! Paper beats Rock.");
                    computerScore += 1;
                }
                break;
            case "paper":
                if (computerChoice == "rock") {
                    console.log("You win! Paper beats Rock.");
                    humanScore += 1;
                }
                else {
                    console.log("You lose! Scissors beats Paper");
                    computerScore += 1;
                }
                break;
            case "scissors":
                if (computerChoice == "paper") {
                    console.log("You win! Scissors beats Paper");
                    humanScore += 1;
                }
                else {
                    console.log("You lose! Rock beats Scissors")
                    computerScore += 1;
                }
                break;
        }
    }
}

function playGame() {
 
    

}

let humanScore = 0;
let computerScore = 0;
    
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();