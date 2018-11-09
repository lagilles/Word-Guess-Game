//dictionary of possible words
var dict = ["hyrule",
    "master sword",
    "ganon",
    "shrine",
	"rupees", 
	"divine beasts", 
	"sheikah slate", 
	"korok"];

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

// Functions

function startGame(){
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;
}

function checkLetters (letters) {
	// check if letter exists in code at all

	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	};

	//check here in the word the letter exists, then populate out blanksandsuccesses array

	if(isLetterInWord) {
		for(var i=0; i<numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
		}
	}
}

	else {
		wongLetters.push(letter);
		guesses++;
	}

};

function roundComplete () {

}

// reset
guessesLeft = 12;
wrongLetters = [];
blanksAndSuccesses = [];

// populate blanks and successes with right number of blanks

for (var i = 0; i<numBlanks; i++){
	blanksAndSuccesses.push("_");

};

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

// Initiates the code for the first time

startGame();

// Registers key clicks

document.onkeyup(function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);

	// Testing and debugging

	console.log(letterGuessed);


})


// music

function startGame() {
	myMusic = new sound ("battle-audio.mp3");
	myMusic.play;
}

