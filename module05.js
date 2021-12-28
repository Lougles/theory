console.group("1");
console.log(
  "Процедурное программирование — набор не связанных явно функций и переменных для хранения и обработки информации. Этот подход прост и прямолинеен, но при росте кодовой базы результатом может быть то, что называется spaghetti code — тесно связанный код."
);
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

console.log(getWage(baseSalary, overtime, rate));

console.log(
  "Объектно-ориентированное программирование (ООП) — методология, основанная на представлении программы в виде совокупности объектов, каждый из которых содержит данные (свойства) и методы для взаимодействия с ними."
);
console.log("Используем ООП, собрав данные в объект employee");
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());
console.groupEnd();

console.group("2");
console.log(
  "Конструкторы. Конструктор — это обычная функция, к которой применили оператор new. Это приводит к созданию нового объекта и вызову функции в контексте этого объекта."
);
const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.guestCount = 0;

  this.greet = function (guestName) {
    console.log(`Hello ${guestName}, wellcome to ${this.name}`);
  };

  this.addGuests = function (amount) {
    this.guestCount += amount;
  };

  this.removeGuests = function (amount) {
    this.guestCount -= amount;
  };
};

// В результате вызова
const hotel = new Hotel("Resort Hotel", 5, 100);
// Получаем такой объект
console.log(hotel);
// Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

const motel = new Hotel("Sunlight Motel", 4, 300);
console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

console.log(hotel);
hotel.greet("Mango"); // Hello Mango, wellcome to Sunrise Hotel
hotel.addGuests(50);
hotel.removeGuests(45);

console.log(
  "Управляем магазином. Время практики. Представьте, что у нас есть магазин и два менеджера, по продаже товаров. Необходимо написать логику для организации их работы. Для каждого менеджера создаётся отдельный объект."
);
const mango = {
  name: "Mango",
  sales: 5,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  },
};

console.log(mango.sales); // 5
console.log(mango.sell("TV")); // Manager Mango sold TV
console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
console.log(mango.sales); // 7

const poly = {
  name: "Poly",
  sales: 10,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  },
};

console.log(poly.sales); // 10
console.log(poly.sell("TV")); // Manager Poly sold TV
console.log(poly.sell("Microwave")); // Manager Poly sold Microwave
console.log(poly.sales); // 12

console.log(
  "Это было просто и всё работает хорошо, но мы буквально захардкодили менеджеров заранее. Представьте что будет, когда наш магазин вырастет и пополнится парой сотен менеджеров, для каждого из которых будет необходимо создать объект динамически во время выполнения программы. Очевидно, что создавать объекты подобным способом — не самая лучшая затея. К счастью, мы знаем о конструкторах."
);
console.log("==================");

const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  };
};

const mangoA = new Manager("Mango", 5);
console.log(mangoA.sales); // 5
console.log(mangoA.sell("TV")); // Manager Mango sold TV
console.log(mangoA.sell("Microwave")); // Manager Mango sold Microwave
console.log(mangoA.sales); // 7

const polyA = new Manager("Poly", 10);
console.log(polyA.sales); // 10
console.log(polyA.sell("TV")); // Manager Poly sold TV
console.log(polyA.sell("Microwave")); // Manager Poly sold Microwave
console.log(polyA.sales); // 12

console.groupEnd();

console.group("3");
console.log("Прототип объекта Object.create()");

const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true
console.log(dog.eats); // true

console.log("Object.prototype.hasOwnProperty()");

for (const key in dog) {
  console.log(key); // barks, eats
}
console.log(
  "Именно поэтому мы используем метод obj.hasOwnProperty(prop), который возвращает true, если свойство prop принадлежит самому объекту obj, а не его прототипу, иначе false."
);

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) console.log(key); // barks
}

console.log(
  "Метод Object.keys(obj) вернет массив только собственных ключей объекта obj, поэтому рекомендуется использовать именно его."
);
const dogKeys = Object.keys(dog);

console.log(dogKeys); // ['barks']
console.groupEnd();

console.group("4");

console.log("Свойство Function.prototype");
console.log(
  "Создадим функцию-конструктор Guest, которая будет создавать нам экземпляры объектов гостя отеля."
);
const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};
Guest.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};

console.log(Guest.prototype); // {constructor: ƒ}
const vova = new Guest("Vova", 28);

console.log(vova);
vova.showGuestInfo();
const lola = new Guest("Lola", 36);
lola.showGuestInfo();
console.groupEnd();

console.group("5");
console.log("Наследование и конструкторы");
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const vasya = new Hero("Vasya", 1000);
console.log(vasya); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
vasya.gainXp(500); // Mango gained 500 experience points
console.log(vasya); // Hero { name: 'Mango', xp: 1500 }

const Warrior = function (name, xp, weapon) {
  /*
   * Во время выполнения функции Warrior вызываем функцию Hero
   * в контексте объекта создающегося в Warrior, а так же передаем
   * аргументы для инициализации полей this.name и this.xp
   *
   * this это будущий экземпляр Warrior
   */
  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

// Сразу добавим метод для атаки в prototype воина
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const vanya = new Warrior("vanya", 200, "bow");
console.log(vanya);
vanya.attack();
vanya.gainXp(9999);
console.log(vanya);

console.groupEnd();

console.group("6");
console.log("ES6 классы");

//class declaration
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getFullInfo() {
    console.log(`
      Car ${this.name}
      Price  ${this.price}
    `);
  }
}

// Под капотом класс это функция-конструктор с прототипом
console.log(typeof Car); // "function"
console.log(Car.prototype); // {constructor: ƒ}

const car = new Car("Volkswagen", 26000);
console.log(car); // Car {}
console.log(car instanceof Car); // true
console.log(car instanceof Object); // true

car.getFullInfo();

class Mobile {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  get qwerty() {
    return this.name;
  }

  set qwerty(value) {
    this.name = value;
  }
}

const iphone = new Mobile("iphoneX", 10000);
console.log("", iphone.qwerty);

iphone.qwerty = "Iphone11ProMax";
console.log(iphone.qwerty);

console.log("Статические свойства и методы");
// Класс со статическими свойствами и методами
class Calc {
  // Класс-калькулятор для двух аргументов
  constructor() {}

  // Метод как замена свойству
  static get PI() {
    return 3.14;
  }

  // Статический метод +
  static add(...args) {
    return args.reduce((acc, next) => acc + next, 0);
  }

  // Статический метод *
  static mult(...args) {
    return args.reduce((acc, next) => acc * next, 1);
  }
}

console.log(Calc.PI); // 3.14
console.log(Calc.add(2, 3, 4)); // 9
console.log(Calc.mult(12, 3, 4)); // 144
