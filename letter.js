var inquirer = require('inquirer');
var word = require('./word.js');
// count++;
		// playerList();
	//
//
console.log(word);
var count = 0;
var wordBlank="";
var length1 = word.length;
for (var i=0; i<length1; i++){
	wordBlank +=" _ " ;
}
console.log(wordBlank);
// var letter = function(){
//     if (count < length1+2 ) {
// 		//RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
// 		inquirer.prompt([{	
// 			name: "guess",
// 			message: "Guess a letter?"
// 			}
// 		]).then(function(answer) {
// 			console.log(answer);
			
// 		})
//         count++;
//         letter();
//     };
// };
// letter();
var letter1 = function(){
   // if (count < length1+2 ) {
		//RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
		inquirer.prompt([{	
			name: "guess",
			message: "Guess a letter?"
			}
		]).then(function(answer) {
			var value = word.indexOf(answer);
			console.log(value);
			
		})
	   // count++;
	   // letter();
    };

letter1();