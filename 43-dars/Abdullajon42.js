function numberSplit(n) {
  // n = 14
  // n = 15
  let x = [];
  let y = n % 2; // y = 0; y = 1;
  let z = n / 2; // z = 7; z = 7.5;
  if (y) {
    x.push(z - 0.5, z + 0.5); // x.push(7.5 - 0.5, 7.5 + 0.5);
  } else {
    x.push(z, z); // x.push(7, 7)
  }
  return x;
}

function addNums(nums) {
  let x = nums.split(",");
  let res = 0;
  x.forEach((element) => {
    let z = parseInt(element);
    res += z;
  });
  return res;
}

function filterArray(arr) {
  return arr.filter((x) => typeof x !== "string");
}
