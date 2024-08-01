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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    const hText = document.querySelector("#hscore");
    const cText = document.querySelector("#cscore");
    const rText = document.querySelector("#roundresults");

    let playRound = function(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            rText.textContent = "It's a tie";
        }
        else {
            switch(humanChoice) {
                case "rock":
                    if (computerChoice == "scissors") {
                        humanScore += 1;
                        hText.textContent = `Your Score: ${humanScore}`;
                        rText.textContent = "You win! Rock beats Scissors";
                    }
                    else {
                        computerScore += 1;
                        cText.textContent = `Computer Score: ${computerScore}`;
                        rText.textContent = "You lose! Paper beats Rock";
                    }
                    break;
                case "paper":
                    if (computerChoice == "rock") {
                        humanScore += 1;
                        hText.textContent = `Your Score: ${humanScore}`;
                        rText.textContent = "You win! Paper beats Rock";
                    }
                    else {
                        computerScore += 1;
                        cText.textContent = `Computer Score: ${computerScore}`;
                        rText.textContent = "You lose! Scissors beats Paper";
                    }
                    break;
                case "scissors":
                    if (computerChoice == "paper") {
                        humanScore += 1;
                        hText.textContent = `Your Score: ${humanScore}`;
                        rText.textContent = "You win! Scissors beats Paper";
                    }
                    else {
                        computerScore += 1;
                        cText.textContent = `Computer Score: ${computerScore}`;
                        rText.textContent = "You lose! Rock beats Scissors";
                    }
                    break;
            }
        }
    }

    const endGame = function() {
        humanScore = 0;
        computerScore = 0;
        hText.textContent = "Your Score: 0";
        cText.textContent = "Computer Score: 0";

        const div = document.querySelector("#results");
        const playText = document.createElement("h3");
        playText.textContent = "Click on rock, paper, or scissors, to begin the next game!";
        div.appendChild(playText);
    }

    const checkWinner = function() {
        if (humanScore >= 5) {
            rText.textContent = "Congrats, you won!";
            endGame();

        }
        else if (computerScore >= 5) {
            rText.textContent = "Sorry, you lost!";
            endGame();
        }
    }

    rockBtn.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        checkWinner();        
    })

    paperBtn.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        checkWinner();   
    })

    scissorsBtn.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        checkWinner();   
    })
}

playGame()