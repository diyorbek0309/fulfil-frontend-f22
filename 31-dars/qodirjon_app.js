// ========== Qodirjon =========
//* Lesson - 31

//! Task-1

const arr = [-15, -20];

function maxNumberOfArray(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min, max);
}

// maxNumberOfArray(arr);

//! Task-2

// FAQAT 1 XONALI SONLAR UCHUN

let text1 = "Mening 4 ta kompyuterim va 2 ta mashinam bor";
let text2 = "3 boshli ajdarho";

const numbersWord = [
  "nol",
  "bir",
  "ikki",
  "uch",
  "to`rt",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "to`qqiz",
];

function numberToWord(text) {
  const arrText = text.split(" ");
  console.log(arrText);

  for (let i = 0; i < arrText.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (arrText[i] == j) {
        arrText[i] = numbersWord[j];
      }
    }
  }
  
  return arrText.join(" ");
}

let resultText = numberToWord(text2);
console.log(resultText)

//! Task-3

const nums = [1, 2, 3, 4, 5, 5, 3, 2, 1, 7, 7];

function singleNumber() {
  let single;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums.sort()[i] === nums.sort()[i + 1]) {
      single = nums.sort()[i + 2];
    }
  }
  console.log(single);
}

singleNumber();
