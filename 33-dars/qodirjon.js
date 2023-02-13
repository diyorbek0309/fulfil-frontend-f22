//! Homework 34-Lesson

//* Task - 1

const nums = [8, 5, 7, 4, 0];

function dropArray(arr, number) {
  for (let i = 0; i < number; i++) {
    arr.shift();
  }
  return arr;
}

// dropArray(nums, 5)

//* Task - 2

const numbers = [1, 2, 3, 4, 5];

function addOne(arr) {
  let newArr = [];
  arr.map((x) => {
    newArr.push(x + 1);
  });
  console.log(newArr);
}

// addOne(numbers)

//* Task - 3

const words = ["red", "white", "blue", "green", "yellow"];

function indexOfArray(arr, word) {
  let index = arr.indexOf(word);
  console.log(index);
}

// indexOfArray(words, 'yellow')
