const number = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let result = document.querySelector(".result");

    guess = Number(guess); 

    if (guess === number) {
        result.textContent = '✅ Correct!';
        result.style.color = "green";
    } else if (guess > number) {
        result.textContent = '📈 Too High!';
        result.style.color = "red";
    } else {
        result.textContent = '📉 Too Low!';
        result.style.color = "red";
    }
}
