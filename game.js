var fs = require('fs');
// returns the path to the word list which is separated by `\n` 
var wordListPath = require('word-list');
var wordArray = fs.readFileSync(wordListPath, 'utf8')
var wordArray = wordArray.split('\n');

var rand = wordArray[Math.floor(Math.random() * wordArray.length)];
module.exports = rand;