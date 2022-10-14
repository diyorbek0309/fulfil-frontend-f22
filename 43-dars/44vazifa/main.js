function spelling(str) {
  let resArr = [];
  for (let i = 1; i <= str.length; i++) {
    resArr.push(str.slice(0, i));
  }
  return resArr;
}

// console.log(spelling('hello'))

function arrayOfMultiples(num, length) {
  let res = [];
  for (let i = 1; i <= length; i++) {
    res.push(i * num);
  }
  return res;
}
// console.log(arrayOfMultiples(7,5))

class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

class Circle {
  constructor(num) {
    this.num = num;
  }
  getArea() {
    return 3.14 * this.num ** 2;
  }
  getPerimeter() {
    return 3.14 * this.num * 2;
  }
}
let circy = new Circle(11);
console.log(circy.getPerimeter());
console.log(circy.getArea());

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
