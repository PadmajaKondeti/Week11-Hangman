var inquirer = require('inquirer');
var word = require('./word.js');
console.log(word);
var count = 0, numGuesses = 0;
var wordBlank=[];
var wordlength = word.length;
for (var i=0; i<wordlength; i++){
	wordBlank += "_ ";
};
var guessedWord = wordBlank;
console.log(guessedWord);
var wordBlankArray = wordBlank.trim().split(' ');
var guessLetter = function(){
	if ((guessedWord.indexOf('_')>= 0) && (numGuesses < wordlength)){
		inquirer.prompt([{
			name: "guess",
			message: "Guess a letter?"
			}
		]).then(function(answer) {
			var indices = [];
			for(var i=0; i<wordlength;i++) {
				if (word[i] == answer.guess){
					indices.push(i);
				} 
			}
			if (indices.length > 0 ){
				for(var i=0; i<indices.length;i++) {
				wordBlankArray[indices[i]] = answer.guess ;
				}
				guessedWord = (wordBlankArray.toString()).replace(/,/g, ' ');
				console.log((guessedWord));
			}
			numGuesses++;    
			guessLetter(); 
		});
	} else{
		if (guessedWord.replace(/ /g, '') == word) {
			console.log("Hooray, you won!!");
		} else {
			console.log("Sorry the word is " + word );
		}
	};
};
guessLetter();