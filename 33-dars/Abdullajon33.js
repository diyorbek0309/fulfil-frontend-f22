function drop(arr, val = 1) {
  return arr.slice(val);
}

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] === arr[i]++;
  return arr;
}

function findIndex(arr, str) {
  return arr.indexOf(str);
}

console.log(incrementItems([8, 4, 6]));
