var inquirer = require('inquirer');

// count++;
		// playerList();
	//
//

var letter = function(){
	inquirer.prompt([{	
		name: "letter",
		message: "Guess a letter?"
	}
	]).then(function(answers) {
		console.log(guessWord);
		console.log(answers);
		return answers;
	})
		
}

module.exports = letter();