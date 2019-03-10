// available choices for computer
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// setting starting variables
var wins = 0;
var losses = 0;
var guessesLeft= 9;
var lettersGuessed = [];
var computerAnswer = [];

// generates computer letter selection
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
computerAnswer.push(computerGuess);

// selected letter in console log
console.log(computerGuess[0]);
// this was working but then I added something & broke it...


// Game
// obtain user guess: when key is clicked, letter is stored
document.onkeyup = function() {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

// user guesses correctly: winner! wins increases, game resets (guessed letters cleared, guesses left resets)
    if (userGuess === computerGuess[0]) {
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
    }

// user guesses incorrectly: guess' left decreases 
    else (userGuess !== computerGuess[0]) {
        guessesLeft--;
        
    // adds letters guessed to letters guessed
        lettersGuessed.push(computerGuess);
        document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    }

// user out of guesses: losses increases, guesses left resets
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
    }

// display date: number of wins, losses, attempts left, letters guessed
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;

}