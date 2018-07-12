// function makeSandwich() {
//   console.log('this is my function');
// }
//
// makeSandwich();

/////
function subtract(num1, num2) {
  console.log(num1 - num2);

  return num1 - num2;

}

// let result = subtract(6, 4);
//   console.log('The result is: ' + result);
// console.log('The result is : ' + subtract(6, 4);
// 6 - (100 - 99
console.log('The log result is : ' + subtract(6, subtract(100, 99)));

function absoluteDifference(num1, num2) {
  if (num2 > num1) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
  return num1 - num2;

}

console.log(absoluteDifference (6, 4));
console.log(absoluteDifference(4, 6));
// let x = 6;
// let y = 4;
// subtract(x, y);
