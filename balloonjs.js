

const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

let score = 0;
let gameInterval;
let balloonInterval;

//game starto
startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    scoreDisplay.innerText = score;
    startButton.disabled = true;
    balloonInterval = setInterval(createBalloon, 1000);
    gameInterval = setTimeout(endGame, 30000); }


function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * (gameArea.offsetWidth - 40)}px`;
    const riseSpeed = Math.random() * 3 + 2;

balloon.addEventListener("click", function() {
    score++;
        scoreDisplay.innerText = score;
        balloon.remove(); });
    //     balloon.addEventListener("click", function() {
    //         score++;
    //             scoreDisplay.innerText = score;
    //             balloon.remove(); });
    // gameArea.appendChild(balloon);

    let position = 0;
    const balloonMove = setInterval(() => {
        position += riseSpeed;
        balloon.style.bottom = `${position}px`;
        if (position > gameArea.offsetHeight) {
            balloon.remove();
            clearInterval(balloonMove);}}, 20);}
function endGame() {
    clearInterval(balloonInterval);
    startButton.disabled = false;
    alert(`Game overo Your end score is: ${score}`);
}
