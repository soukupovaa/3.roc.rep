// Hangman game
var wordBank = ["javascript", "programming", "openai", "hangman"]; // Array of words
var maxAttempts = 6; // Maximum number of attempts

var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // Select a random word
var guessedLetters = []; // Array to store guessed letters
var attemptsLeft = maxAttempts; // Number of attempts left

// Function to display current state of the word
function displayWord() {
  var wordDisplay = '';
  for (var i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.indexOf(selectedWord[i]) !== -1) {
      wordDisplay += selectedWord[i] + ' ';
    } else {
      wordDisplay += '_ ';
    }
  }
  console.log(wordDisplay);
}

// Function to process a guessed letter
function guessLetter(letter) {
  if (guessedLetters.indexOf(letter) !== -1) {
    console.log('You already guessed that letter!');
    return;
  }
  
  guessedLetters.push(letter);
  
  if (selectedWord.indexOf(letter) === -1) {
    attemptsLeft--;
    console.log('Wrong guess! Attempts left: ' + attemptsLeft);
    if (attemptsLeft === 0) {
      console.log('Game over! The word was: ' + selectedWord);
    }
  } else {
    console.log('Correct guess!');
  }
  
  displayWord();
}

// Start the game
console.log('Hangman Game');
displayWord();

// Example usage
guessLetter('a');
guessLetter('e');
guessLetter('i');
guessLetter('o');
guessLetter('u');
guessLetter('z');