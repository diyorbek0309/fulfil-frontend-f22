// Learn Lodash: _.drop, Drop the First Elements of an Array =====TASK 1 ==========
let newArray = [1, 2, 3, 4, 5, 6];

function drop(arr, val) {
  return arr.slice(val);
}

drop(newArray, 3);
//  console.log( drop(newArray,3));

// Fix the Bug: Simple Array Manipulation =====TASK 2 ==========

function incrementItems(arr) {
  return arr.map((num) => num + 1);
}

incrementItems(newArray);
// console.log(incrementItems(newArray));

// Find the Index  =====TASK 3 ==========

let arrFindIndex = ["hi", "edabit", "fgh", "abc"];

function findIndex(arr, str) {
  return arr.indexOf(str);
}

findIndex(arrFindIndex, "fgh");
console.log(findIndex(arrFindIndex, "fgh"));
