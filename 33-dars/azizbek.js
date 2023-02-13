// VERY EASY

// Convert Minutes Into Seconds===================
function convert(minutes) {
  return minutes * 60;
}
// convert(5)
// console.log(convert(10));

// Return the First Element in an Array =====================

let nums = [2, 43, 5, 5, 6, 6, 7];
function getFirstValue(arr) {
  return arr[0];
}
let result = getFirstValue(nums);
// console.log(result);

// Return the Remainder from Two Numbers ====================
function remainder(x, y) {
  return x % y;
}
remainder(5, 20);
// console.log(remainder(5, 20));

//  EASY

// Add up the Numbers from a Single Number==================

function addUp(num) {
  let n = 0;
  for (let i = 1; i <= num; i++) {
    n += i;
  }
  return n;
}
//   addUp(19)
// console.log(addUp(19));

//   Largest Swap=========================================

function largestSwap(num) {
  // 27
  return Number(num.toString()[0]) >= Number(num.toString()[1]);
}
// largestSwap(24)
// console.log(largestSwap(24));

// Find the Amount of Potatoes=================================

function potatoes(str) {
  var arr = str.split("potato");
  console.log(arr);
  return arr.length - 1;
}

// console.log(potatoes("potatopotatopsgdfgdotato"));
