// Author: Devin Mateo-Walker

let y = 2003;
console.log("y = " + y);

let a = y % 19;
console.log("a = " + a);

let b = Math.floor(y / 100);
console.log("b = " + b);

let c = y % 100;
console.log("c = " + c);

let d = Math.floor (b / 4);
console.log("d = " + d);

let e = b % 4;
console.log("e = " + e);

let f = Math.floor((b + 8) / 25);
console.log("f = " + f);

let g = Math.floor(( b - f + 1) / 3);
console.log("g = " + g);

let h = (19 * a + b - d - g + 15) % 30;
console.log("h = " + h);

let i = Math.floor(c / 4);
console.log("i = " + i);

let k = c % 4;
console.log("k = " + k);

let r = (32 + 2 * e + 2 * i - h - k) % 7;
console.log("r = " + r);

let m = Math.floor((a + 11 * h + 22 * r) / 451);
console.log("m = " + m);

let n = Math.floor((h + r - 7 * m + 114) / 31);
console.log("n = " + n);

let p = (h + r - 7 * m + 114) % 31;
console.log("p = " + p);

console.log("In 2003, Easter falls on 4/20");
