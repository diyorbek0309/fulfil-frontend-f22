// <<<<<<1-task>>>>>>>>
// const a = [9, 12, 76, 87];

// function maxMin(arr) {
//   let max = arr[0],
//     min = arr[0];

//   for (let i = 1; i <= arr.length - 1; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }

//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }

//   console.log("Eng katta element: ", max);
//   console.log("Eng kichik element: ", min);
// }

// maxMin(a);

// <<<<<<<<<<<<< 3-task>>>>>>>>>
const a = [1, 2, 3, 4, 3, 2, 1];

for (let i = 0; i < a.length; i++) {
  let n = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[i] == a[j]) {
      n++;
    }
  }
  if (n == 1) {
    console.log(a[i]);
    break;
  }
}
