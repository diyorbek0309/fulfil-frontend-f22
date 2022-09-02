// let i = 0;

// for (; i < 100000; i++) {
//   console.log(i);
// }

// const person = { fname: "Diyorbek", lname: " Olimov" };

// let text = "";

// for (let x in person) {
//   //1-qadam: x = fname
//   //2-qadam: x = lname
//   text = text + person[x];
// }

// console.log(text);

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let car of cars) {
//   // 1-qadam: BMW
//   // 2-qadam: Volvo
//   // 3-qadam: Mini

//   text = text + car;
// }

// for (let i = 0; i < 3; i++) {
//   text = text + cars[i];

//   //   1-qadam: i = 0; text = ""
//   //   2-qadam: i = 1; text = "BMW"
//   //   3-qadam: i = 2; text = "BMWVolvo"
//   //   4-qadam: i = 3; text = "BMWVolvoMini"
// }

// console.log(text);

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 100;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for (let i = 10; ; i = i + 5) {
//   if (i % 1225 === 0) {
//     console.log("Evrika: 1225!");
//     break;
//   } else {
//     console.log(i);
//   }
// }

// 1 dan 10 gacha sonlar orasidan faqat toqlarini consolega chiqaring.

// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log("Juft son");
//     continue;
//     console.log("Continuedan pastgi console.log");
//   } else {
//     console.log("Toq son: ", i);
//   }
// }

// function printPattern(range) {
//   for (let i = 1; i <= range; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += j + " ";
//     }
//     console.log(str);
//   }
// }
// printPattern(10);
