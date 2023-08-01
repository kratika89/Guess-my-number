"use strict";

/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Answer!";

document.querySelector(".guess").value = 23;
console.log((document.querySelector(".guess").value = 23));
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let demo = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "Correct Answer";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = secretnumber.toString();

    if (score > demo) {
      demo = score;
      document.querySelector(".demo").textContent = demo;
    }
  } else if (guess > secretnumber) {
    document.querySelector(".message").textContent = "Too high number";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretnumber) {
    document.querySelector(".message").textContent = "Too low number";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You lost the game!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "200px";
});
