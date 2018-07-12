// Author: Devin Mateo-Walker
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Devin Mateo-Walker");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log("You walk in the house and see a zombie ! ");
  let = readline.question("You attempt to kill the zombie. (stab it in the head or run from it) ");
    console.log("You stab the zombie in the head and it dies, You are able to escape and go home.");

    console.log("You run from the zombie and fall into a trap, there's no way to escape so you are now stuck there.");

} else {
  console.log("You hear a scream, you turn around and go home. ");

}
console.log("Thanks for playing!");
