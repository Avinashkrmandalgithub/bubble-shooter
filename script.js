let bubbles = "";
let randomNumber = 0;
let timer = 60;
let hitNumber = 0;
let score = 0;
let gameActive = true;
let timerStart;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitNumber;
}

function makeBubble() {
  bubbles = "";
  for (let i = 1; i <= 189; i++) {
    randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector(".bubbles-container").innerHTML = bubbles;
}

function runTimer() {
  clearInterval(timerStart);
  gameActive = true;
  timerStart = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    } else {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearInterval(timerStart);
  gameActive = false;
  document.querySelector(".bubbles-container").innerHTML = `
    <div class="game-over-screen">
      <h1>Game Over</h1>
      <button id="restartBtn">Restart</button>
    </div>
  `;

  document.querySelector("#restartBtn").addEventListener("click", restartGame);
}

function restartGame() {
  score = 0;
  timer = 60;
  gameActive = true;

  document.querySelector("#scoreVal").textContent = score;
  document.querySelector("#timeVal").textContent = timer;

  getNewHit();
  makeBubble();
  runTimer();
}

document.querySelector(".bubbles-container").addEventListener("click", function (dets) {
  if (!gameActive) return;

  let clickedNumber = Number(dets.target.textContent.trim());
  if (!isNaN(clickedNumber)) {
    if (clickedNumber === hitNumber) {
      increaseScore();
      getNewHit();
      makeBubble();
    } else {
      score = Math.max(0, score - 5); // never go below 0
      document.querySelector("#scoreVal").textContent = score;
    }
  }
});

getNewHit();
runTimer();
makeBubble();
