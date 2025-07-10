let inputWindow = document.getElementById("inputWindow");
let wordToGuess = "omllette";
let guessedLetters = [];
let incorrectGuesses = 0;
let maxIncorrectGuesses = 15;


function hint() {
  alert(`It's one of the best and most popular breakfast :)`);
}

function newInputWindow() {
  let window = "";
  for (let i = 0; i < wordToGuess.length; i++) {
    if (guessedLetters.includes(wordToGuess[i])) {
      window += wordToGuess[i] + " ";
    } else {
      window += "_ ";
    }
  }
  inputWindow.textContent = window;
}

function playAgain() {
  guessedLetters = [];
  incorrectGuesses = 0;
  newInputWindow();
}

function displayInput(letter) {
  if (wordToGuess.includes(letter)) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
    }
  } else {
    incorrectGuesses++;
  }

  newInputWindow();

  if (incorrectGuesses >= maxIncorrectGuesses) {
    alert("Game Over! You lost!");
  }
}
