function makeAbba(a, b) {
  return a + b + b + a;
}

function comboString(a, b) {
  if(a.length > b.length) {
    return b + a + b;
  }
  return a + b + a;
}

function lastTwo(str) {
  if(str.length >= 2) {
  let lastChar = str.chsrAt(str.length - 1);
  let secondLastChar = str.charAt(str.length - 2);
  let firstPart = str.substring(o, str.length - 2);
  return firstPart + lastChar + secondLastChar;
  }
  return str;
}

console.log(makeAbba ("hey", "yo"));
console.log(comboString("sad", "happy"));
console.log(comboString("happy", "sad"));

// let x;
// console.log(x);
//  x = 3;
