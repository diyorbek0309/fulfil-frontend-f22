// const obj1 = {
//   firstName: "Diyorbek",
//   laptop: {
//     cpu: "Ryzen 7",
//     ram: 16,
//   },
//   job: "programmer",
// };

// const obj2 = obj1;

// console.log(obj1, obj2);

// obj2.firstName = "Azizbek";

// console.log(obj1, obj2);
const fruits1 = ["cherry", "apple", "banana"];

// const obj2 = { ...obj1 };
const fruits2 = [...fruits1];

// console.log(obj1 == obj2);
// console.log(fruits1 == fruits2);

// const userInfo = {
//   name: "Mayank",
//   age: 31,
//   designation: "Developer",
//   address: {
//     streetNumber: 10,
//     city: "Delhi",
//     country: "India",
//   },
//   sayHello: () => {
//     return 1;
//   },
// };

// const stringifiedObject = JSON.stringify(userInfo);
// console.log(stringifiedObject);

// const newDeepCopy = JSON.parse(stringifiedObject);
// console.log(newDeepCopy);

// const newUserInfo = Object.assign(userInfo);
// console.log(newUserInfo);

// function sum() {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result = result + arguments[i];
//   }

//   console.log(result);
// }

const sum = (...args) => {
  let result = 0;

  args.forEach((item) => {
    result = result + item;
  });

  console.log(result);
};

// sum(1, 2, 3, 4, 5); // 15
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9); // 45

// fruits.splice(2, 1, "cherry", "banana")

const customSplice = (startIndex, deleteCount, ...args) => {
  console.log(startIndex, deleteCount, args);
};

// customSplice(2, 1, "cherry", "banana", "2", true);

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let [m, t, w, h, f] = days; // array destructuring
// let m = days[0];
// let t = days[1];
// let w = days[2];

// console.log(m, t, w);

const obj1 = {
  firstName: "Diyorbek",
  laptop: {
    cpu: "Ryzen 7",
    ram: 16,
  },
  job: "programmer",
};

let { firstName, job } = obj1;

// console.log(firstName, job);

const userInfo = {
  name: "Diyorbek",
  age: 31,
  designation: "Developer",
  address: {
    streetNumber: 10,
    city: "Delhi",
    country: "India",
  },
  sayHello: () => {
    console.log("Hello");
  },
  get sayHi() {
    return this.name;
  },
  set setName(name) {
    this.name = name;
  },
};

userInfo.setName = "Botirjon";
console.log(userInfo);

