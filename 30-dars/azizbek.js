function juftSonlar(n) {
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// juftSonlar(100);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = "";
// function ketmaKet(m) {
//   for (let num of m) {
//     //FOR OF BILAN
//     n = n + " " + num;
//     console.log(n);
//   }
// }
// ketmaKet(nums);

function ketmaKet(m) {
  for (let i = 0; i < nums.length; i++) {
    //FOR  BILAN
    n = n + " " + nums[i];
    console.log(n);
  }
}
ketmaKet(nums);
