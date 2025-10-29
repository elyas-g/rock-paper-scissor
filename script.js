const body = document.querySelector("body");
const displayContainer = document.createElement("div");

function getComputerChoice() {
  const index = Math.round(2 * Math.random() + 1);
  const litsOfChoice = ["rock", "paper", "scissors"];
  return litsOfChoice[index - 1];
}

function playRound(humanChoice, computerChoice) {
  const displayResult = document.createElement("p");

  const HumanChoice = document.createElement("p");
  HumanChoice.innerText = `User: ${humanChoice}`;

  const ComputerChoice = document.createElement("p");
  ComputerChoice.innerText = `Bot: ${computerChoice}`;

  displayContainer.appendChild(HumanChoice);
  displayContainer.appendChild(ComputerChoice);

  if (humanChoice === computerChoice) {
    displayResult.innerText = "Tie!!!";
    displayContainer.appendChild(displayResult);
    body.appendChild(displayContainer);
    return "";
  }

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      displayResult.innerText = "You lose! Paper beats Rock. Try again!";
      displayContainer.appendChild(displayResult);
      body.appendChild(displayContainer);
      return "computer";
    }
    if (computerChoice === "scissors") {
      displayResult.innerText =
        "You win! Rock beats Scissors. Congratulations!";
      displayContainer.appendChild(displayResult);
      body.appendChild(displayContainer);
      return "human";
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      displayResult.innerText = "You lose! Scissors beats Paper. Try again!";
      displayContainer.appendChild(displayResult);
      body.appendChild(displayContainer);
      return "computer";
    }
    if (computerChoice === "rock") {
      displayResult.innerText = "You win! Paper beats Rock. Congratulations!";
      displayContainer.appendChild(displayResult);
      body.appendChild(displayContainer);
      return "human";
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      displayResult.innerText = "You lose! Rock beats Scissors. Try again!";
      displayContainer.appendChild(displayResult);
      body.appendChild(displayContainer);
      return "computer";
    }
    if (computerChoice === "paper") {
      displayResult.innerText =
        "You win! Scissors beats paper. Congratulations!";
      displayContainer.appendChild(displayResult);
      body.appendChild(displayContainer);
      return "human";
    }
  }
}

//buttons
const rockButton = document.createElement("button");
rockButton.innerText = "Rock";
const paperButton = document.createElement("button");
paperButton.innerText = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.innerText = "Scissors";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
