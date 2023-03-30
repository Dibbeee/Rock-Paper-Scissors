let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

function game() {
  console.log("Welcome!");
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (roundWinner == "player") {
      playerScore++;
    }
    if (roundWinner == "computer") {
      computerScore++;
    }
    console.log(
      `PlayerScore: ${playerScore} \t ComputerScore: ${computerScore}`
    );
    console.log("-------------------------------------");
  }
  console.log("Game Over!");
  if (playerScore > computerScore) {
    console.log("The winner is... \n THE PLAYER!!!");
  }
  if (playerScore < computerScore) {
    console.log("The winner is... \n THE COMPUTER!!!");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "Tie!";
    return "Tie! The score stays the same!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner = "player";
    return "Player Wins!";
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    roundWinner = "computer";
    return "Computer Wins!";
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("rock, paper or scissors");
  let choiceInLower = choice.toLowerCase();
  return choiceInLower;
}

// game();

const rock_btn = document.querySelector(".rock__btn");
const paper_btn = document.querySelector(".paper__btn");
const scissors_btn = document.querySelector(".scissors__btn");
