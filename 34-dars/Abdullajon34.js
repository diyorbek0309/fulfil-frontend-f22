// let sortByLengths = ["apple", "pie", "shortcake"];

function sortByLength(arr1) {
  return arr1.sort(function (a, b) {
    return a.length - b.length;
  });
}

// console.log(sortByLength(sortByLengths));

// let revCase = "sPoNtAnEoUs";
// ["s", "P", "o", ...]

function reverseCase(str) {
  return str
    .split("")
    .map(function (a) {
      return a.match(/[a-z]/) ? a.toUpperCase() : a.toLowerCase();
    }) // ["S", "p", "O", ...]
    .join("");
}

// console.log(reverseCase(revCase));

let task3 = "A Mind Boggling Achievement";

function checkTitle(title) {
  return (
    title
      .split(" ") // ["A", "Mind", "Boggling", "Achievement"]
      .map(function (a) {
        return a[0] === a[0].toUpperCase();
      })
      .join(" ")
      .includes(false) == false
  );
}

// console.log(checkTitle(task3));

let arr = [2, 3, 5];

let num = 235;

function toArray(num) {
  return num
    .toString() // "235"
    .split("") // ["2", "3", "5"]
    .map(function (a) {
      return parseInt(a); // [2, 3, 5]
    });
}

function toNumber(arr) {
  // "235"
  return parseInt(arr.join("")); // 235
}

// console.log(toArray(num), toNumber(arr));
