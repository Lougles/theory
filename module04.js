console.group("1");
console.log("Callback");
const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = "HOCs are awesome";
  callback(string);
};

higherOrderFunction(printMessage);
console.groupEnd();

console.group("2");
console.log(
  "Но что, если мы хотим сделать что-то, кроме логирования чисел? Поскольку «делать что-то» можно представить как функцию, а функции - это просто значения, мы можем передать действие как аргумент."
);
const printValue = function (value) {
  console.log(value);
};

const prettyPrint = function (value) {
  console.log("Logging value: ", value);
};

const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

// Передаем printValue как callback-функцию
repeat(3, printValue); //в качестве аргумента ф-ция.
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint); //в качестве аргумента ф-ция.
// Logging value: 0
// Logging value: 1
// Logging value: 2
console.groupEnd();

console.group("3");
console.log(
  "Часто callback-функции анонимны и объявляются как стрелочные функции прямо во время передачи"
);
const repeatA = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

const labels = [];

repeatA(5, (value) => {
  labels.push(`Label ${value + 1}`); // стрелочная ф-ция передается прямо в аргументе
});

console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
console.groupEnd();

console.group("4");
console.log(
  "При таком подходе мы можем выполнять фильтрацию массива по критерию используя всего одну функцию для перебора, а операции над каждым элементом будут зависеть от callback-функции."
);
const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
console.log(freshFruits); // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
console.log(fruitsWithQuantity); // массив с объектами apples и grapes
console.groupEnd();

console.group("5");
console.log(
  "Глобальный контекст есть в стеке по умолчанию, создается на старте выполнения скрипта, обычно называется main или global и находится в его нижней части, то есть помещается туда первым. Если при выполнении кода происходит вызов функции, для нее создается новый контекст и добавляется на верх стека контекстов."
);
console.log(
  "JS-движок исполняет функцию, контекст выполнения которой находится на самом верху стека. После того, как произойдет выход из функции (return), ее контекст выполнения снимается со стека. Далее выполняться функция, контекст которой лежит следующим."
);
const bar = function () {
  console.log("bar");
};

const baz = function () {
  console.log("baz");
};

const foo = function () {
  console.log("foo");
  bar();
  baz();
};

foo();

console.log(
  "При выполнении этого кода сначала вызывается foo(), затем внутри foo() сначала вызывается bar(), а затем baz(). Вызовы console.log() так же учитываются, ведь это функция. На иллюстрации ниже пошагово изображен стек вызовов примера."
);
console.groupEnd();

console.group("6");
console.log("Лексическое окружение");
/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

const x = 10;
/*
  Global env
    Record: {x: 10}
    Parent: null
*/

const y = 20;
/*
  Global env
    Record: {x: 10, y: 20}
    Parent: null
*/

/*
  Записывается в момент объявления функции
  [[Environment]] = Global env
*/
const fooA = function (z) {
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30}
      Parent: Global env
  */

  const x = 100;
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30, x: 100}
      Parent: Global env
  */

  return x + y + z;
};

/*
  Global env
    Record: {x: 10, y: 20, foo: <function>}
    Parent: null
*/
console.log(fooA(30)); // 150

console.groupEnd();

console.group("7");
console.log(
  "Замыкание (closure) — это связь между функцией и ее цепочкой областей видимости."
);
const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
console.groupEnd();

console.group("8");
console.log("");
function showThis() {
  console.log("this in showThis: ", this);
}

// Вызываем в глобальном контексте
showThis();
// this in showThis: Window

const user = { name: "Mango" };

/*
 * Записываем ссылку на функцию в свойство объекта
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;

/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте
 * которого осуществляется вызов, а не на глобальный объект.
 */

user.showContext();
// this in showThis: {name: "Mango", showContext: ƒ}
console.groupEnd();

console.group("9");
console.log("call");
const greet = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotel = { name: "Resort Hotel" };
const motel = { name: "Sunlight Motel" };

console.log(greet.call(hotel, "Mango", 5));
// "Mango, welcome to 5-star Resort Hotel!"

console.log(greet.call(motel, "Poly", 4));
// "Poly, welcome to 4-star Sunlight Motel!"

console.log("apply");

const greetA = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotelA = { name: "Resort Hotel" };
const motelA = { name: "Sunlight Motel" };

console.log(greetA.apply(hotelA, ["Mango", 5]));
// "Mango, welcome to 5-star Resort Hotel!"

console.log(greetA.apply(motelA, ["Poly", 4]));
// "Poly, welcome to 4-star Sunlight Motel!"

console.log("bind");
const greetB = function (guest) {
  return `${guest}, welcome to ${this.name}!`;
};

const hotelB = { name: "Resort Hotel" };

const hotelGreeter = greetB.bind(hotelB, "Mango");

hotelGreeter(); // "Mango, welcome to Resort Hotel!"

console.log("========");

const hotelC = {
  name: "Resort Hotel",
  showThis() {
    console.log(this);
  },
};

const fn = function (callback) {
  callback();
};

// Передаем копию метода showThis с контекстом привязанным к hotel
fn(hotelC.showThis.bind(hotelC)); // {name: "Resort Hotel", showThis: ƒ}

console.groupEnd();
