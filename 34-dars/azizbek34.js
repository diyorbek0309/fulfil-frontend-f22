// Sort by String Length
let newArr = ["BMW", "Nissan", "Toyota", "mers"];
function sortByLength(arr) {
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}
// sortByLength(newArr);
// console.log(sortByLength(newArr));

// ============================================================================

// Reverse the Case
let reverseCaseText = "Reverse the Case";
function reverseCase(str) {
  let final = [];
  let arrayed = str.split(""); // ["R", "e", "v", "e", ...]
  for (let i = 0; i < str.length; i++) {
    if (arrayed[i] === arrayed[i].toLowerCase()) {
      final.push(arrayed[i].toUpperCase());
    } else {
      final.push(arrayed[i].toLowerCase());
    }
  }
  return final.join("");
}
// reverseCase(reverseCaseText);
// console.log(reverseCase(reverseCaseText));

// ============================================================================

// Check If It's a Title String
let titleTest = "Check If It's a title string ";
function checkTitle(title) {
  const t = title.split(" ")[1].split("")[0];
  return t == t.toUpperCase() ? true : false;
}

// checkTitle(titleTest);
// console.log(checkTitle(titleTest));

//   ==============================================================================

// Numbers to Arrays and Vice Versa

let numberToArray = 123124;

function toArray(num) {
  return String(num).split("").map(Number);
}
toArray(numberToArray);
console.log(toArray(numberToArray));

let arrayToNumber = [1, 2, 3, 4, 5, 6];
function toNumber(arr) {
  return parseInt(arr.join(""));
}
// toNumber(arrayToNumber);
// console.log(toNumber(arrayToNumber));
