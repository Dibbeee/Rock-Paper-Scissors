
// JS for Game

let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

// function game() {
//   console.log("Welcome!");
//   while (playerScore < 5 && computerScore < 5) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//     if (roundWinner == "player") {
//       playerScore++;
//     }
//     if (roundWinner == "computer") {
//       computerScore++;
//     }
//     console.log(
//       `PlayerScore: ${playerScore} \t ComputerScore: ${computerScore}`
//     );
//     console.log("-------------------------------------");
//   }
//   console.log("Game Over!");
//   if (playerScore > computerScore) {
//     console.log("The winner is... \n THE PLAYER!!!");
//   }
//   if (playerScore < computerScore) {
//     console.log("The winner is... \n THE COMPUTER!!!");
//   }
// }

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "Tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++
    roundWinner = "player";
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++
    roundWinner = "computer";
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

// function getPlayerChoice() {
//   let choice = prompt("rock, paper or scissors");
//   let choiceInLower = choice.toLowerCase();
//   return choiceInLower;
// }



const rock_btn = document.querySelector(".rock__btn");
const paper_btn = document.querySelector(".paper__btn");
const scissors_btn = document.querySelector(".scissors__btn");
const playerScorePara = document.querySelector(".playerScorePara");
const computerScorePara = document.querySelector(".playerScorePara");

rock_btn.addEventListener('click', () => {
  playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
})
paper_btn.addEventListener('click', () => {
  playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
})
scissors_btn.addEventListener('click', () => {
  playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
})
