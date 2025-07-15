let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  // rock, paper, scissor
  const options = ["rock", "paper", "scissors"];
  // Math.random() * 3 // range 0-2
  // Math.random() * 10 // range 0-9 and give decimal value
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
//   console.log("Game was draw");
  msg.innerText = "Game is Draw, Play again"
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You Win");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Congratulations!, You Win your ${userChoice} beats ${compChoice}`;
    let audio = new Audio("winner.mp3");
    audio.play();
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You lose");
    msg.innerText = `You lose, Try Again, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

function playGame(userChoice) {
//   console.log("user choice =", userChoice);
  // Genereate computer choice
  const compChoice = genCompChoice();
//   console.log("Comp Choice =", compChoice);

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : this;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
