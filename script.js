let secretNumber;
let score = 20;
let highScore = 0;
let guess;
let statusMessage = document.getElementById("messageID");
let highScoreMessage = document.getElementById("highscore-value");
let scoreMessage = document.getElementById("score-value");

init();

function init() {
  genrateRandomNumber();
  getValue();
  restart();
}

// Random number 
function genrateRandomNumber() {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
}

function displayAlert() {
  alert("Enter value between 1 to 20");
}

// Click event
function getValue() {
  document.getElementById("check").addEventListener("click", function () {
    guess = Number(document.getElementById("guess").value);
    
    // If all attempts are utilised
    if (score !== 0) {
      compareValue();
    } else {
      statusMessage.textContent = "✴You lost the game";
      document.getElementById("guessing-game-section").style.backgroundColor =
        "#f94449";
      document.getElementById("random-number").textContent = secretNumber;
    }
  });
}

function compareValue() {
  // If guess is empty
  if (!guess) {
    statusMessage.textContent = "⛔Enter a value.";
  }

  // If guess is equal to random number
  if (secretNumber === guess) {
    statusMessage.textContent = "🎉Correct Number!";
    highScoreMessage.textContent = highScore;
    document.getElementById("random-number").textContent = secretNumber;
    document.getElementById("guessing-game-section").style.backgroundColor =
      "#68BB59";
    highScoreMessage.textContent = score;
  }

  //   If guess is less than random number
  if (guess < secretNumber) {
    if (guess > 0) {
      statusMessage.textContent = "📉Too Low!";
      score = score - 1;
      scoreMessage.textContent = score;
    } else {
      displayAlert();
    }
  }

  // If guess is greater than random number
  if (guess > secretNumber) {
    if (guess < 21) {
      statusMessage.textContent = "📈Too High!";
      score = score - 1;
      scoreMessage.textContent = score;
    } else {
      displayAlert();
    }
  }
}

function restart() {
    document.getElementById("restart").addEventListener("click", function () {
    genrateRandomNumber();
    scoreMessage.textContent = 20;
    highScoreMessage.textContent = 0;
    document.getElementById("guessing-game-section").style.backgroundColor =
      "azure";
    document.getElementById("guess").value = '';
    document.getElementById("random-number").textContent = '?';
})}