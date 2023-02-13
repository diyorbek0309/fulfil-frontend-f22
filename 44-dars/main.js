class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static age(year) {
    this.year = year;
    return 2022 - this.year;
  }

  run() {
    console.log("I am running " + this.name);
  }
}

class Nexia extends Car {
  constructor() {
    super("Nexia", 2018);
  }
}

class Wheel extends Nexia {
  constructor() {
    super();
  }
}

// let newCar = new Car("Gentra", 2009);
let myCar = new Car("Cobalt", 2020);
let newNexia = new Nexia();
// newNexia.run();

let newWheel = new Wheel();

console.log("My car is " + Car.age(2020) + " years old.");
// console.log("My car is " + myCar.age() + " years old.");
