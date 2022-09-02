// 1 - task
// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log("Juft son: ", i);
//   }
// }

// 2 - task
// let n = 10;
// let total = 1225 * n;
// for (let i = 1; i <= total; i++) {
//   if (i % 1225 === 0) {
//     console.log(i);
//     // if (i === total) {
//     //   break;
//     // }
//   }
// }

// 3 - task
const num = ["1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10"];
let text = "";
for (let i = 0; i <= 9; i++) {
  text = text + num[i];
  console.log(text);
}
