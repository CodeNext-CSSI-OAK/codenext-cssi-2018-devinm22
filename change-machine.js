// Author: Devin Mateo-Walker

let readline = require('readline-sync');

let centAsAString = readline.question("Enter cents");
let cents = Number(centAsAString);

let quarters = Math.floor(cents / 25);
console.log(quarters + "quarters");
//cents = cents % 25;
cents -= quarters * 25;
console.log('cents = ' + cents);

let dimes = Math.floor(cents / 10);
console.log(dimes + "dimes");
cents = cents % 10;

let nickles = Math.floor(cents / 5);
console.log(nickles + "nickles");
cents = cents % 5;

let pennies = cents;
console.log(cents + "pennies");
