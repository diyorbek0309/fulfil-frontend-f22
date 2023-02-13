// Divides Evenly=============================
// // function declaration
// function dividesEvenly(a, b) {
//   return a % b == 0;
// }
// console.log(dividesEvenly(20, 10));

// // ARROW FN
// const dividesEvenlyArrow = (a, b) => a % b === 0;

// console.log(dividesEvenlyArrow(20, 12));


// Check if an Integer is Divisible By Five=======================
// function declaration
// function divisibleByFive(n) {
//   return n % 5 == 0 ? true : false;
// }
// console.log(divisibleByFive(23));
// // ARROW FN
// const divisibleByFiveArrow = (n) => (n % 5 == 0 ? true : false);

// console.log(divisibleByFiveArrow(20));


// Solve the Equation========================================

let arg = "3 + 3 + 4";

// function declaration
function equation(s) {
  return Function("return " + s)();
}
console.log(equation(arg));

// // ARROW FN
// const equationArrowFn = (s) => eval(s); //evalni googledan qidirdim urniga  tepadagi functiondan foydalansa bulekan evalni utmagandik lekin tushundim vazifasini!:)

// console.log(equationArrowFn(arg));
