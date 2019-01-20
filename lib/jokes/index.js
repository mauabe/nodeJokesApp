/* 
Title: Jokes Library
*/

//Dependencies
var fs = require('fs');

//App object
var jokes = {};

//Get all jokes and return
jokes.allJokes = function(){
  var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');
  var arrayOfJokes = fileContents.split(/\r?\n/);
  return arrayOfJokes;
}

//Export the library
module.exports = jokes;
