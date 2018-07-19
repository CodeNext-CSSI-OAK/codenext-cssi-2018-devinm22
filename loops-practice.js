let readline = require("readline-sync");
//
//
// let correctPassword = "badabing";
// let input = "";
// let attempts = 3;
// while(input !== correctPassword && tries > 0) {
//     input = readline.question("Please enter the correct password: ");
//     tries--;
// }
// if(tries === 0) {
//   console.log("You've tried too many times, give it back to the owner.");
// } else {
//   console.log("Access Gained");
// }

  // let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // for(let i = 0; i < alphabet.length; i++) {
  //   console.log(alphabet.charAt(i));
  // }

// for(let count = 0; count <= 30; count++) {
//   console.log(count);
// }

// let students = "MFAD"
// for(let i = 0; i < students.length; i++) {
//   console.log("Give " + students.charAt(i) + " a cookie.");
// }
//
// let i = 0;
// while(i < students.length) {
//   console.log("Give " + students.charAt(i) + " a cookie.");
//   i++;
// }
//
// let correctPassword = "hamzah";
// for(let input = ""; correctPassword !== input; ) {
//   input = readline.question("Enter the password: ");
// }

function containsSpace(str) {
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === " ") {
      return true;
    }
  }
  return false;
}

// console.log(containsSpace("star wars"));
// console.log(containsSpace("starwars"));
// console.log(containsSpace(""));
// console.log(containsSpace("    "));



// function countAs(str) {
//   let count = 0;
//   for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) === "a" || str.charAt(i) === "A") {
//       count++;
//     }
//   }
//   return count;
// }
//
// console.log(countAs("happy"));
// console.log(countAs("lady gaga"));
// console.log(countAs(""));


function reverseString(str) {
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

 console.log(reverseString("banana"));
 console.log(reverseString("A man, a plan, a canal: Panama!"));
 console.log(reverseString("dog"));


 
