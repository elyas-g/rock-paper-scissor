function getComputerChoice() {
  const index = Math.round(2 * Math.random() + 1);
  const litsOfChoice = ["rock", "paper", "scissors"];
  return litsOfChoice[index - 1];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Rock, paper or scissors: _____ ");
  return choice.toLowerCase();
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  console.log(`User: ${humanChoice}`);
  console.log(`Bot: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("Tie!!!");
    return "";
  }

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock. Try again!");
      return "computer";
    }
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors. Congratulations!");
      return "human";
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper. Try again!");
      return "computer";
    }
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock. Congratulations!");
      return "human";
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors. Try again!");
      return "computer";
    }
    if (computerChoice === "paper") {
      console.log("You win! Scissorswha beats paper. Congratulations!");
      return "human";
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let round = 1; round <= 5; round++) {
    const result = playRound(getHumanChoice(), getComputerChoice());
    if (result === "computer") {
      computerScore++;
    }
    if (result === "human") {
      humanScore++;
    }
  }
  const msg =
    humanScore > computerScore
      ? "Congratulations!! You have won the game."
      : "Opps!! you have lost the game. Try again";
  console.log(`${humanScore}:${computerScore} ${msg}`);
}

playGame();
