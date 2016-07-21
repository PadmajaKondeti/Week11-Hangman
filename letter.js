var inquirer = require('inquirer');
var word = require('./word.js');
console.log(word);
var count = 0;
var wordBlank=[];
var wordlength = word.length;
for (var i=0; i<wordlength; i++){
	wordBlank += "_ ";
};
var wordBlankArray = wordBlank.trim().split(' ');
var guessLetter = function(){
	inquirer.prompt([{	
		name: "guess",
		message: "Guess a letter?"
		}
	]).then(function(answer) {
		var indices = [];
		for(var i=0; i<wordlength;i++) {
			if (word[i] == answer.guess) indices.push(i);
		}
		var value = word.indexOf(answer.guess);
		if (indices.length > 0 ){
			for(var i=0; i<indices.length;i++) {
				wordBlankArray[indices[i]] = answer.guess ;
			}
			console.log((wordBlankArray.toString()).replace(/,/g, ' '));
		}		
	})
};
var wordGame = function(){
			
	if (count < wordlength){
		guessLetter();
		count++;
	};
	//wordGame();
};
wordGame();