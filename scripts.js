//Use this file to implement Part One of your project
var animal = {};

animal.username = "Mittens";

animal['tagline'] = 'Pet me!';

var noises = [];

animal.noises = noises;

var count = 0;
for (var key in animal) {
  count++;
  if (key === 'username') {
      console.log('hi my name is ' + animal[key]);
  } else if (key === 'tagline') {
      console.log('I like to say ' + animal[key]);
  }
}

//Arrays

var noiseArray = ['purr', 'oink'];

noiseArray.unshift('Ezra');
noiseArray.push('Chiang');

noiseArray[3] = 'growl';

noiseArray['hello'] = 'GMAN';

animal.noises = noiseArray

var animals = [];

animals.push(animal);

// functions

function AnimalTestUser(user) {
  var args = arguments.length;
  var otherArgs = [];
  if (args > 1) {
    for (var i=1; i<args; i++) {
      otherArgs.push(arguments[i]);
    }
  }

  return {
    username: username,
    otherArgs: otherArgs
  };
}

//higher order functions 
