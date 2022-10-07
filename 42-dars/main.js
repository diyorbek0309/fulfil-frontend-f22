// try {
//   let result = add(10, 20);

//   console.log("123");
// } catch (e) {
//   console.log({ name: e.name, message: e.message });
// } finally {
//   console.log("Finally");
// }

// console.log("Bye");

// var message = "Hi"; // global

// function say() {
//   var message = "Hello"; // locale

//   if (true) {
//     let message = "if ichida";
//     console.log(message);   //
//   }

//   console.log(message); // Hello
// }

// function say2() {
// //   var message = "Salom";
//   console.log(message); // Hi
// }

// say();
// say2();
// console.log(window.message); // Hi

// if (true) {
//   var message = "Hello";
//   console.log(message);
// }

// console.log(message);

// function say() {
//   var message = "Hello"; // locale

//   if (true) {
//     let message = "if ichida"; // block scoped
//     console.log(message);   //
//   }

//   console.log(message); // Hello
// }

// say()

// var counter = 10;
// var counter;
// console.log(counter); // 10

// console.log(counter); // undefined
// counter = 1;
// console.log(counter);
// var counter; // hoisted

// let firstName = "Azizbek";

// const person = {
//   firstName: "Diyorbek",
//   lastName: "Olimov",
//   id: 11,
//   get fullName() {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// person.fullName;

// function hechNima() {
//   console.log(this);
// }

// hechNima();

// console.log(this.innerHeight);

// const nothing = () => {
//   console.log(this);
// };

// nothing();

// function clickHandler(a) {
//   console.log(a.innerText);
// }
