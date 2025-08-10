let randomNumber = Math.floor(Math.random() * 100) + 1;
let inputBox = document.getElementById("guessInput");
let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let message = document.getElementById("msg");
let attempts = 0;
let prevGuesses = [];

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let userGuess = Number(inputBox.value);
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100";
        message.style.color = "orange";
        inputBox.value = "";
        return;
    } 
    attempts++;
    if (userGuess === randomNumber) {
        message.textContent = `🥳🎉 You have guessed it right! Great job! The Number is ${randomNumber} Attempts : ${attempts}`;
        message.style.color = "green";
        submitBtn.disabled = true;
        inputBox.disabled = true;
        prevGuesses = [];

    } else { 
        if (userGuess < randomNumber) {
            message.textContent = "📉 Too low! Try a bigger number.";
            message.style.color = "blue";
        } else {
            message.textContent = "📈 Too high! Try a smaller number.";
            message.style.color = "blue";
        }
        if (attempts === 10) {
            message.textContent = `Game Over! You have completed your limit. The number was ${randomNumber}`;
            message.style.color = "red";
            submitBtn.disabled = true;
            inputBox.disabled = true;
        }
    }
    if (userGuess !== randomNumber && attempts <= 10) {
        prevGuesses.push(userGuess);
        document.getElementById("prev").textContent = `Your guesses : ${prevGuesses.join(", ")}`;
    }
    inputBox.value = "";
});

resetBtn.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("prev").textContent = ""; // ✅ clears the guesses from screen
    message.textContent= "Start guessing the number! You have only 10 Guesses.";
    message.style.color = "#1e3799";
    submitBtn.disabled = false;
    inputBox.disabled = false;
    inputBox.value = "";
    
});