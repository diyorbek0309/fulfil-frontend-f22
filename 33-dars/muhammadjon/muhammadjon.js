// // 33 - lesson tasks
// // Drop the Frist elements of an Array
// const arr = [1, 2, 3]
// let  drop = arr.slice(1);
// console.log(drop);

// // Find the index
const findIndex = ["hi", "edabit", "fgh", "blue", "yellow", "red", "a", "g", "y", "d"];
findIndex.forEach(function (word, index) {
    if(word === "a") console.log(index);
})
