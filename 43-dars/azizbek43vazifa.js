function maxTotal(nums) {
  return nums
    .sort((a, b) => b - a) // kamayish tartibi
    .slice(0, 5)
    .reduce((a, b) => a + b, 0);
}

// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])  //43
// =============================================================

function sliceSum(arr, n) {
  return arr.splice(0, n).reduce((acc, curr) => acc + curr, 0);
}
// sliceSum([1,2,54,6,3,4,5],3) //57

// ==============================================================

function cardHide(card) {
  card = card.split("");
  for (let i = 0; i < card.length - 4; i++) {
    card[i] = "*";
  }
  return card.join("");
}
// cardHide('3479823748712938479')  //***************8479
