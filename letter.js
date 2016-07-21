var inquirer = require('inquirer');
var word = require('./word.js');
console.log(word);
var count = 0;
var wordBlank=[];
var length1 = word.length;
for (var i=0; i<length1; i++){
	wordBlank += "_ ";
}

wordBlank = wordBlank.trim().split(' ');

console.log(wordBlank);
var guessLetter = function(){
	inquirer.prompt([{	
		name: "guess",
		message: "Guess a letter?"
		}
	]).then(function(answer) {
		var indices = [];
		for(var i=0; i<word.length;i++) {
			if (word[i] == answer.guess) indices.push(i);
		}
		
		
		var value = word.indexOf(answer.guess);
		if (indices.length > 0 ){
			for(var i=0; i<indices.length;i++) {
				wordBlank[indices[i]] = answer.guess ;
			}
			console.log(value);
			
			wordBlank[value]= answer.guess;

			console.log((wordBlank.toString()).replace(/,/g, ' '));
			
		}		
	})
};
//console.log(wordBlank);
//wordBlank = wordBlank.split("");
var letter1 = function(){
	if (count < 1) {
		//RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
		guessLetter();
		
	   count++;
	   letter1();
    } else {
    	return false;
    };
};
letter1();
