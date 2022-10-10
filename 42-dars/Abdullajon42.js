function numberSplit(n) {
  let x = [];
  let y = n % 2;
  let z = n / 2;
  if (y == 0) {
    x.push(z, z);
  }
  if (y !== 0) {
    x.push(z - 0.5, z + 0.5);
  }
  return x;
}

function addNums(nums) {
  let x = nums.split(',')
  let res =0;
  x.forEach(element => {
    let z = parseInt(element)
    res +=z
  });
  return res

}

function filterArray(arr) {
  return arr.filter(x => typeof x !== 'string');
}