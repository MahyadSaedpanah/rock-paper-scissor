const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You win.");
    playerScore++;
  } else if (result === "computer") {
    console.log("You lose!");
    computerScore++;
  } else {
    console.log("It's a tie.");
  }

  console.log(`your score: ${playerScore}`);
  console.log(`computer score: ${computerScore}`);
  console.log("-----------------------");
};

const play = () => {
  const playerChoice = prompt("choose rock, paper, scissors");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`you choose ${playerChoice}`);
  } else {
    console.log("you cheated");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoise = choices[randomNumber];
  console.log(`computer chooses ${computerChoise}`);

  const gameResult = checkWinner(playerChoice, computerChoise);
  showResult(gameResult);
  if (playerScore >= 5) {
    console.log("Finish, Player Won.");
    return;
  } else if (computerScore >= 5) {
    console.log("Finish, Computer Won.");
    return;
  }
  play();
};
play();
