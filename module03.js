const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

console.log(hotel.name); // Resort Hotel
console.log(hotel["name"]); // Resort Hotel

hotel.name = "Coastline Resort";
console.log(hotel.name); // Coastline Resort
console.log(hotel["name"]); // Coastline Resort

hotel["name"] = "Stardust Hotel";
console.log(hotel.name); // Stardust Hotel
console.log(hotel["name"]); // Stardust Hotel

const hotelA = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

hotelA.address = "1, Beach ave.";
hotelA["manager"] = "Chuck Norris";

console.log(hotelA.address); // 1, Beach ave.
console.log(hotelA.manager); // Chuck Norris

const hotelB = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

delete hotelB.name;
console.log(hotelB); // {stars: 5, capacity: 100}

delete hotelB["stars"];
console.log(hotelB); // {capacity: 100}

const hotelC = {
  name: "Resort Hotel",
  stars: 5,
  guests: ["mango", "poly", "ajax"],
};

console.log(hotelC.stars); // 5
console.log(hotelC.pool); // undefined

let name = "Resort Hotel";
let stars = 5;

// Эта ES5 запись избыточна
const es5hotel = {
  name: name,
  stars: stars,
  capacity: 100,
};

/*
 * ES6 Shorthand properties
 * Имя ключа будет аналогично имени переменной
 * Значение свойства будет равно значению переменной
 */
const es6hotel = {
  name,
  stars,
  capacity: 100,
};

console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}

const hotelD = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  // Так метод объявлялся в ES5
  greetInES5: function () {
    console.log("Welcome!");
  },
  // Так метод объявляется в ES6
  greetInES6() {
    console.log("Welcome!");
  },
};

// hotelD.greetInEs5(); // Welcome!
// hotelD.greetInEs6(); // Welcome!

const hotelE = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotelE.showName(); // Resort Hotel

hotelE.changeCapacity(200);
console.log(hotelE.capacity); // 200

const hotelF = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

for (const key in hotelF) {
  console.log("Value: ", hotelF[key]);
}

/*
 * Value: "Resort Hotel"
 * Value: 5
 * Value: 100
 */

const hotelG = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

const keys = Object.keys(hotelG); // ["name", "stars", "capacity"]
const values = Object.values(hotelG); // ["Resort Hotel", 5, 100]
const entries = Object.entries(hotelG); // [Array(2), Array(2), Array(2)]
console.log(keys, values, entries);

const temperatures = [18, 14, 12, 21, 17, 29];

const min = Math.min(...temperatures); // 12
console.log(min);

const add = function (...args) {
  console.log(args); // массив всех аргументов
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);

const addA = function (value, ...args) {
  console.log(value); // первый аргумент
  console.log(args); // массив всех остальных аргументов
};

addA(10, 1, 2, 3);
addA(15, 1, 2, 3, 4, 5);