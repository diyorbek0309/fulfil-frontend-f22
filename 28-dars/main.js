// Regular function

function sayHello(name) {
  console.log("Assalomu aleykum " + name);
}

let ism = "Botirjon";

// sayHello(ism);
// sayHello("Diyorbek");
// sayHello("Azizbek");

function sum(number1, number2) {
  console.log(number1 + number2);
}

// sum(45, 36); // 81
// sum(4532434, 36234234);

function findPeremetier(width, height) {
  console.log((width + height) * 2);
}

// findPeremetier(12, 8);

// const developer = {
//   name: "Diyorbek",
//   age: 22,
// };

const car = {
  brand: "Chevrolet",
  color: "black",
  year: 2022,
  isMechanic: false,
};

car.year = "2021";

// car = {
//   brand: "Chevrolet",
//   color: "black",
//   year: 2022,
//   isMechanic: false,
// };

// console.log(car["color"]);
// console.log(car["year"]);

// console.log(car.color);
// console.log(car.year);

const developer = {
  name: "Diyorbek",
  age: 22,
  address: {
    country: "Uzbekistan",
    city: "Urgench",
  },
  salomlashish: function () {
    console.log("Assalomu aleykum!");
  },
};

// developer.salomlashish();
// console.log(developer.address.city);

// const fruits = ["olma", "olcha", "behi"];

const fruits = new Array("olma", "olcha", "behi");
const mixedArray = ["Javascript", 2, false, null];

const helloArray = ["h", "e", "l", "l", "o"];

// helloArray[4] = "p"
// helloArray[5] = "p"
// helloArray[15] = "p"

// birinchi element
console.log(helloArray.length); // "h"
