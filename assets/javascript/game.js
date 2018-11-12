//dictionary of possible words
var dict = ["hyrule",
	"master sword",
	"ganon",
	"shrine",
	"rupees",
	"divine beasts",
	"sheikah slate",
	"korok"
];

var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var myMusic;

// Game Counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;

// html variables

var guessesLeft = "";

//var guessesLeft = "";

// Functions

function startGame() {
	selectedWord = dict[Math.floor(Math.random() * dict.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;
	// myMusic = new Audio("battle-audio.mp3");
	// myMusic.play();

	// reset
	guessesLeft = 12;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// populate blanks and successes with right number of blanks

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");

	};
}

function checkLetters(letter) {
	// check if letter exists in code at all

	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	};

	//check here in the word the letter exists, then populate out blanksandsuccesses array

	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	} else {
		wrongLetters.push(letter);
		guessesLeft--;
	}

};

function roundComplete() {
	console.log("Wins: " + winCount + " | Losses: " + lossCount + "| Guesses Left: " + guessesLeft)

	//update html to reflect most recent info

	document.getElementById("guesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guesses").innerHTML = wrongLetters.join(" ");

	// check if user won

	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		// update win counter in html

		document.getElementById("winCounter").innerHTML = "Wins: " + winCount;

		startGame();

	}

	// check if user lost
	else if (guessesLeft == 0) {
		lossCount++;
		alert("You Lost!");

		// update html

		document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;

		startGame();
	}

}

// change html 

document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;

// debugging

console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

// Main Process

// Registers key clicks

document.onkeyup = function (event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	// Testing and debugging

	console.log(letterGuessed);


}

// Initiates the code for the first time

startGame();