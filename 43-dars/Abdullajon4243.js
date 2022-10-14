// function numberSplit(n) {
//   let x = [];
//   let y = n % 2;
//   let z = n / 2;
//   if (y == 0) {
//     x.push(z, z);
//   }
//   if (y !== 0) {
//     x.push(z - 0.5, z + 0.5);
//   }
//   return x;
// }

// function addNums(nums) {
//   let x = nums.split(",");
//   let res = 0;
//   x.forEach((element) => {
//     let z = parseInt(element);
//     res += z;
//   });
//   return res;
// }

// function filterArray(arr) {
//   return arr.filter((x) => typeof x !== "string");
// }

// function maxTotal(nums) {
//   let sort = nums.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 5; i < sort.length; i++) {
//     sum += sort[i];
//   }
//   return sum;
// }

// function sliceSum(arr, n) {
//   let newArr = arr.slice(0, n);
//   let count = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     count += newArr[i];
//   }
//   return count;
// }

function cardHide(card) {
  let turt = card.slice(-4);
  let boshi = card.slice(0, -4);
  let newArr = boshi.split("");
  let result = "";

  for (let i = 0; i < newArr.length; i++) {
    result += newArr[i] = "*";
  }

  return result + turt;
}

console.log(cardHide("1234123456785678"));