let computerScore = 0;
let playerScore = 0;
// let roundWinner = "";



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // roundWinner = "Tie!";
    console.log('Tie!');
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    // roundWinner = "player";
    console.log('Player Wins!');
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    // roundWinner = "computer";
    console.log('Computer Wins!');
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

console.log(`Player chose ${playerSelection}!`);
console.log(`Computer chose ${computerSelection}!`);
console.log(`Player: ${playerScore} \t Computer: ${computerScore}`);