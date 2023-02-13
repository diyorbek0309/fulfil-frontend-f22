// 1

function numberSplit(num) {
  let a = Math.floor(num / 2);
  let b = num - a;
  let c = [];
  c.push(a, b);

  return c;
}
// console.log(numberSplit(11));

// 2

// function addNums(nums) {
//   return nums
//     .split(", ")
//     .map((word) => +word)
//     .reduce((pre, cur) => pre + cur, 0);
// }
// console.log(addNums("1, 2, 3, 4, 5, 6, 7, 8, 9"));

// 3

// function filterArray(arr) {
//   return arr.filter((num) => typeof num === "number");
// }
// console.log(filterArray([true, 121, 2, "asda", "sdb"]));
