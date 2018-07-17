// Author: Devin Mateo-Walker


// let readline = require ('readline-sync');
//
// let name = readline.question('What is your name? ');
//
// console.log('Have a nice day ' + name);


let readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));

// let ageAsAString = readline.question('What is your age? ');
// let age = Number(ageAsAString);

console.log('In 2028 you will be ' + (age + 10) + ' years old. ');
