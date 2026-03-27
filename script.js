// Generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Game settings
let attemptsLeft = 7;

// Elements
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

// Display attempts initially
attempts.textContent = "Attempts left: " + attemptsLeft;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);

    if (!userGuess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    if (attemptsLeft <= 0) return;

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        endGame();
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high!";
    } 
    else {
        message.textContent = "📈 Too low!";
    }

    attempts.textContent = "Attempts left: " + attemptsLeft;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
        endGame();
    }
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    restartBtn.style.display = "inline-block";
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 7;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";

    message.textContent = "";
    attempts.textContent = "Attempts left: " + attemptsLeft;

    restartBtn.style.display = "none";
}
