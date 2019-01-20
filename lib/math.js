/*
Title: Math Library

*/
//App object
var math = {};

//Get random integer between two integers

math.getRandomNumber = function (min, max){
  min = typeof(min) == 'number' && min % 1 === 0 ? min : 0;
  max = typeof(max) == 'number' && max % 1 === 0 ? max : 0;
  return Math.floor(Math.random()*(max - min + 1) + min);
};

//Eport library
module.exports = math;