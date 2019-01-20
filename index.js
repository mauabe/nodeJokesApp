/*
Title: Basic Node App
*/

//Dependencies
var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');
//var newJokes = require('jokes');


//App object
var app = {};

//Configuration
app.config = {
  'timeBetweenJokes' : 3000
};

//Function that prints a random joke
app.printAJoke = function(){

  var allJokes = jokesLib.allJokes();
  var numberOfJokes = allJokes.length;
  var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);
  var selectedJoke = allJokes[randomNumber - 1];
  console.log(selectedJoke);
}

// Function that loops 
app.indefininteLoop = function(){
  setInterval(app.printAJoke, app.config.timeBetweenJokes);
}

//invoke loop
app.indefininteLoop();
