// available choices for computer
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// setting starting variables
var wins = 0;
var losses = 0;
var guessesLeft= 9;
var lettersGuessed = [];
var computerAnswer = [];

// generates computer answer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
computerAnswer.push(computerGuess);
console.log(computerGuess[0]);

// answer in console log
console.log(answer);

// game
document.onkeyup = function() {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    if (userGuess === computerGuess[0]) {
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
    }
}