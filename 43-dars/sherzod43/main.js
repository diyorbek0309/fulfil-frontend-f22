// 1

// function findMaxFive(nums) {
//   let nums1 = nums.sort(function (a, b) {
//     return a - b;
//   }); // o'sish 
//   let maxFive = 0;
//   for (let i = 5; i < nums1.length; i++) {
//     maxFive += nums1[i];
//   }
//   return maxFive;
// }

// console.log(findMaxFive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2

// function sliceSum(arr, n) {
//   if (n < arr.length) {
//     return arr.slice(0, n).reduce((acc, total) => acc + total, 0);
//   } else {
//     return arr.reduce((acc, total) => acc + total, 0);
//   };
// }
// console.log(sliceSum([1, 2, 3, 4, 5, 6], 3));

// 3

// function cardHide(card) {
//   return card.slice(card.length - 4).padStart(card.length, "*");
// }

// console.log(cardHide("0123456789"));
