function spelling(str) {
  let arr = [];
  for (let i = 1; i <= str.length; i++) {}
  return arr;
}
spelling("happy");

let result = spelling("happy");
console.log(result);

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    let test = num * i;
    arr.push(test);
  }
  return arr;
}
let res = arrayOfMultiples(7, 5);
console.log(res);
