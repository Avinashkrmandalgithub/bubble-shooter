let bubbles = "";
let randomNumber;
let timer = 60;
let hitNumber;


function getNewHit(){
  hitNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitNumber;
}

function makeBubble() {
  for (let i = 1; i <= 189; i++) {
    randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble"> ${randomNumber} </div>`;
  }

  document.querySelector(".bubbles-container").innerHTML = bubbles;
}

function runTimer(){
  timerStart = setInterval(function() {
    if(timer > 0){
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    }
     else {
      clearInterval(timerStart);
    }
  }, 1000)
}


getNewHit();
runTimer();
makeBubble();

