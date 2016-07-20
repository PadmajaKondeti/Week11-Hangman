var inquirer = require('inquirer');
var word = require('./word.js');
console.log(word);
var count = 0;
var wordBlank=[];
var length1 = word.length;
for (var i=0; i<length1; i++){
	wordBlank[i] =" _ ";
}
console.log(wordBlank);
var letter1 = function(){
    if (count < length1) {
		//RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
		inquirer.prompt([{	
			name: "guess",
			message: "Guess a letter?"
			}
		]).then(function(answer) {
			var value = word.indexOf(answer.guess);
			console.log(value);
			wordBlank[value] = " "+ answer.guess + " ";
			console.log(wordBlank);
		})
	   count++;
	   //letter1();
    };
};
letter1();