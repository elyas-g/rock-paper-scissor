class Game {
  constructor() {
    this.body = document.querySelector("body");
    this.displayContainer = document.createElement("div");
    this.body.appendChild(this.displayContainer);

    this.rockButton = document.createElement("button");
    this.rockButton.innerText = "Rock";

    this.paperButton = document.createElement("button");
    this.paperButton.innerText = "Paper";

    this.scissorsButton = document.createElement("button");
    this.scissorsButton.innerText = "Scissors";

    this.body.appendChild(this.rockButton);
    this.body.appendChild(this.paperButton);
    this.body.appendChild(this.scissorsButton);

    this.rockButton.addEventListener("click", () => this.playRound("rock"));
    this.paperButton.addEventListener("click", () => this.playRound("paper"));
    this.scissorsButton.addEventListener("click", () =>
      this.playRound("scissors")
    );
  }

  getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    const litsOfChoice = ["rock", "paper", "scissors"];
    return litsOfChoice[index];
  }

  playRound(humanChoice) {
    const computerChoice = this.getComputerChoice();

    const HumanChoice = document.createElement("p");
    HumanChoice.innerText = `User: ${humanChoice}`;

    const ComputerChoiceDisplay = document.createElement("p");
    ComputerChoiceDisplay.innerText = `Bot: ${computerChoice}`;

    const displayResult = document.createElement("p");

    if (humanChoice === computerChoice) {
      displayResult.innerText = "Tie!!!";
    }

    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        displayResult.innerText = "You lose! Paper beats Rock. Try again!";
      }
      if (computerChoice === "scissors") {
        displayResult.innerText =
          "You win! Rock beats Scissors. Congratulations!";
      }
    }

    if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        displayResult.innerText = "You lose! Scissors beats Paper. Try again!";
      }
      if (computerChoice === "rock") {
        displayResult.innerText = "You win! Paper beats Rock. Congratulations!";
      }
    }

    if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        displayResult.innerText = "You lose! Rock beats Scissors. Try again!";
      }
      if (computerChoice === "paper") {
        displayResult.innerText =
          "You win! Scissors beats paper. Congratulations!";
      }
    }
    this.displayContainer.appendChild(HumanChoice);
    this.displayContainer.appendChild(ComputerChoiceDisplay);
    this.displayContainer.appendChild(displayResult);
  }
}
const game1 = new Game();
