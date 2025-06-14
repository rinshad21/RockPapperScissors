//get dom elements
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
//assigning intial score as 0
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
function updateScore() {
    playerscoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
updateScore();//called to load intial scores 
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]


    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A Tie🤝";
        
    }
    else {
        //using switch statement to check each playerchoice
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN😎" : "YOU LOSE😥";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN😎" : "YOU LOSE😥";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN😎" : "YOU LOSE😥";
                break;
                
        }
    }
    //update display text for result&choice

    playerDisplay.textContent = `Player: ${playerChoice}`;
    ComputerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    //using switch statement to change color of result and add score by 1
    switch (result) {
        case "YOU WIN😎":
            resultDisplay.classList.add("win");
            resultDisplay.classList.remove("lost", "draw");
            playerScore++;
          
            break;
        case "YOU LOSE😥":
            resultDisplay.classList.add("lost");
            resultDisplay.classList.remove("win", "draw");
            computerScore++;
            
            break;
        case "IT'S A Tie🤝":
            resultDisplay.classList.add("draw");
            resultDisplay.classList.remove("lose", "win");
            break;
            
        
    }
    //updating the score ro local storge after every round
    updateScore();
    localStorage.setItem('playerScore', playerScore.toString());
    localStorage.setItem('computerScore', computerScore.toString());
}
    //creating function for reset
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScore();
        localStorage.setItem('playerScore', playerScore.toString());
        localStorage.setItem('computerScore', computerScore.toString());

        //clearing for reset
        playerscoreDisplay.textContent =  0;
        computerScoreDisplay.textContent = 0;
        resultDisplay.textContent = "";
    }

