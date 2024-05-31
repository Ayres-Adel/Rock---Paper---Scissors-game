const choices = ["Rock", "Paper", "Scissors"];
const Player = document.getElementById("Player");
const Computer = document.getElementById("Computer");
const Result = document.getElementById("Result");

function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    Player.textContent = `Player: ${playerChoice}`;
    Computer.textContent = `Computer: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        Result.textContent = "Result: It's a draw!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        Result.textContent = "Result: You win!";
    } else {
        Result.textContent = "Result: You lose!";
    }
}

window.playgame = playgame;
