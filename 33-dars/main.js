// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[2] = "Kiwi"
// fruits[4] = fruits[3];

// fruits.push("Peach", "Kiwi"); // array oxiridan element qo'shish
// fruits.unshift("Peach", "Kiwi");

// fruits.pop();
// fruits.shift();
// delete fruits[1];

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(3, 0, "Kiwi", "Peach");
// fruits.splice(2, 2);
// ["Banana", "Kiwi", "Peach", "Cherry", "Mango"]
// fruits.splice(1, 2, "Kiwi", "Peach", "Cherry");

// let fruitsCopy = fruits.slice(2, 4);
// let reducedFruits = fruits.slice(fruits.indexOf("Orange") + 1, fruits.length);

// let joinedFruits = fruits.join(" * ");

// let sortedNumbers = numbers.sort(function (a, b) {
//   return b - a;
// });

// let sum = 0;

// let numberIndex = numbers.forEach(function (number, index) {
//   if (number === 121) console.log(index);
// });

// let numberIndex = numbers.map(function (number, index) {
//   if (number === 121) return index;
//   return "Topilmadi"
// });

// const numbers = [23, 43, 121, 324, 76];

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// let sum = numbers.reduce(function (acc, cur) {
//   console.log("Acc:", acc);
//   console.log("Cur:", cur);
//   return acc + cur;
// }, 0);

let numbers = [];

for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

let filteredNumbers = numbers.filter(function (number) {
    return number % 5 === 0;
})

let sum = filteredNumbers.reduceRight(function (acc, cur) {
  return acc + cur;
}, 0);

// let lower100 = numbers.filter(function (number) {
//   return number > 100;
// });

// let lower100 = numbers.find(function (number) {
//   return number > 100;
// });

// let lower100 = numbers.findIndex(function (number) {
//   return number > 100;
// });

console.log(sum);
