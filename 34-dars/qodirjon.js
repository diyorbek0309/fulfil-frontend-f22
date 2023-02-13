//* Lesson - 34

// Homework

//! Task - 1

let str = ["asd", "bb", "cccd", "a"];

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

// console.log(sortByLength(str));

//! Task - 2

let str2 = "Happy BirthdaY";

function reverseCase(a) {
  let changeCase = [...a];

  for (let i = 0; i < a.length; i++) {
    if (changeCase[i].charCodeAt() >= 65 && changeCase[i].charCodeAt() <= 90) {
      changeCase[i] = String.fromCharCode(changeCase[i].charCodeAt() + 32);
    } else if (
      changeCase[i].charCodeAt() >= 97 &&
      changeCase[i].charCodeAt() <= 122
    ) {
      changeCase[i] = String.fromCharCode(changeCase[i].charCodeAt() - 32);
    }
  }
  return changeCase.join("");
}

// console.log(reverseCase(str2));

//! Task - 3

let word = "A Simple Java Script Program!";

function checkTitle(st) {
  let arr = st.split(" ");
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90
      ? (result = true)
      : (result = false);
  }
  return result;
}

// console.log(checkTitle(word));

//! Task - 4

let arr = [1, 3, 5];

let num = 25;

function toNumberOrToArray(x) {
  let result;
  if (typeof x === "number") {
    result = [...x.toString()];
  } else {
    result = parseInt(x.join(""));
  }

  return result;
}

console.log(toNumberOrToArray(arr));
