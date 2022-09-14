// Very Easy turkumidan:
// 1. Convert Minutes into Seconds
function convert(minutes) {
  return minutes * 60;
}

// 2. Return the First Element in an Array
function getFirstValue(arr) {
  return arr[0];
}

// 3. Return the Remainder from Two Numbers
function remainder(x, y) {
  return x % y;
}

// Easy turkumidan:
// 1. Add up the Numbers from a Single Number

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
// 2. Largest Swap

function largestSwap(num) {
  let strNum = num.toString();
  let revTemp = strNum[1];
  let rev = revTemp + strNum[0];
  let revNum = parseInt(rev);

  // 27; 2 > 7 => false
  // 27; 27 > 72 => false

  return num >= revNum;
}

// 3. Find the Amount of Potatoes
let str = "potatopotatopotatoapple";

function potatoes(n) {
  let searchFor = "potato";
  let count = 0;
  let pos = str.indexOf(searchFor);

  while (pos > -1) {
    ++count;
    pos = str.indexOf(searchFor, ++pos);
  }
  
  return count;
}

const result = potatoes([str]);
console.log(result);
