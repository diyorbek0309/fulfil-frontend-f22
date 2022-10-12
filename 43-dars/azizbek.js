

function numberSplit(n) {
	return [Math.floor(n/2), Math.ceil(n/2)]
}



function addNums(nums) {
	return nums.split(', ').reduce((a, b) => a + +b, 0);
}



function filterArray(arr) {
	return arr.filter((n) => {
		return n === +n
	})
}