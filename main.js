// JS for the Game

let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    console.log("It was a Tie!");
  }

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    roundWinner = "player";
    console.log(
      `${playerSelection} beats ${computerSelection}! You gained a point!`
    );
  }

  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    computerScore++;
    roundWinner = "computer";
    console.log(
      `${computerSelection} beats ${playerSelection}! The computer gained a point!`
    );
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

// JS for the UI

const rock_btn = document.querySelector(".rock__btn");
const paper_btn = document.querySelector(".paper__btn");
const scissors_btn = document.querySelector(".scissors__btn");
const playerScorePara = document.querySelector(".playerScorePara");
const computerScorePara = document.querySelector(".computerScorePara");
const scoreInfo = document.querySelector(".scoreInfo");
const showScore = document.querySelector(".showScore");
const scoreMessage = document.querySelector(".scoreMessage");
const hiddenDiv = document.querySelector(".hiddenDiv");
const overlay = document.querySelector(".overlay");

rock_btn.addEventListener("click", () => clickEvent("Rock"));
paper_btn.addEventListener("click", () => clickEvent("Paper"));
scissors_btn.addEventListener("click", () => clickEvent("Scissors"));

function clickEvent(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateScore();
  if(gameOver()){
    openRestartMenu()
  }
}

function updateScore() {
  if (roundWinner == "tie") {
    scoreInfo.textContent = `It's a Tie!`;
  } else if (roundWinner == "player") {
    scoreInfo.textContent = "You won this round!";
  } else if (roundWinner == "computer") {
    scoreInfo.textContent = "You lost this round!";
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner == "player") {
    scoreMessage.textContent = `${playerSelection} beats ${computerSelection}!`;
  } else if (winner == "computer") {
    scoreMessage.textContent = `${playerSelection} loses out against ${computerSelection}!`;
  } else {
    scoreMessage.textContent = `${playerSelection} ties with ${computerSelection}`;
  }
}

function gameOver() {
  return playerScore === 5 || computerScore === 5;
}

function openRestartMenu() {
  hiddenDiv.classList.add("active");
  overlay.classList.add("active");
}
