// const nums1 = [23, 17, 19, 41, 25];
// const nums2 = [3, 17, 19, 41, 25];

// function sumOfArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//     // i = 0; sum = 0 + numbers[0] = 23;
//     // i = 1; sum = 23 + numbers[1] = 23 + 17 = 40;
//     // i = 2; sum = 40 + numbers[2] = 40 + 19 = 59;
//     // i = 3; sum = 59 + numbers[3] = 59 + 41 = 100;
//     // i = 4; sum = 100 + numbers[4] = 100 + 25 = 125;
//   }

//   return sum;
// }

// let sumOfNums1 = sumOfArray(nums1);
// let sumOfNums2 = sumOfArray(nums2);

// console.log(sumOfNums1, sumOfNums2);

// const n = 123456789;
// // 2 + 3 + 4 + 5 = 14;

// function sumOfDigits(n) {
//   let sum = 0;
//   n = n.toString();

//   for (let i = 0; i < n.length; i++) {
//     sum = sum + parseInt(n[i]);
//     // i = 0; sum = 0 + parseInt(n[0]) = 0 + 1 = 1;
//     // i = 1; sum = 1 + parseInt(n[1]) = 1 + 2 = 3;
//     // i = 2; sum = 3 + parseInt(n[2]) = 3 + 3 = 6;
//   }
//   console.log(sum);
// }

// sumOfDigits(n);

const nums1 = [23, 17, 19, 41, 25];
const nums2 = [17, 3, 19, 81, 25, 67, 12];

function commonElements(nums1, nums2) {
  let count = 0;
  //   let a = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        count++;
        // console.log(nums1[i]);
      }
      //   a++;
      //   console.log(a);
    }
  }

  return count;
}

console.log("Umumiy elementlar soni: ", commonElements(nums1, nums2));
