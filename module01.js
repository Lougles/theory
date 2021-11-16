// const a = b * 2;
// [([a] = [[b] * [2]])];
console.log("====================Объявление переменных====================");

/*
 * Для объявления переменной используются ключевые слова let и const,
 * за которыми следует имя переменной.
 * Переменным объявленным через let не обязательно сразу присваивать значение.
 */
let age;

/*
 * Переменные объявленные как const обязательно должны быть инициализированы
 * значением во время объявления, иначе будет ошибка.
 */
const yearOfBirth = 2006;

/*
 * Значение переменной можно получить обратившись к ней по имени.
 * console.log() используется для вывода данных в консоль разработчика,
 * с этим методом более детально познакомимся позже.
 */
console.log(yearOfBirth); // 2006

/*
 * Если переменной объявленной как let, изначально не присвоено значение,
 * она инициализируется специальным значением undefined (не определено).
 */
console.log(age); // undefined

/*
 * Если переменная объявлена как let, ее значение можно перезаписать.
 */
age = 14;
console.log(age); // 14

/*
 * Если переменная объявлена как const, перезаписать ее значение нельзя.
 * При попытке присвоить новое значение будешь ошибка выполнения скрипта.
 */

//yearOfBirth = 2020; // будет ошибка

// Константа хранящая значение цвета
const COLOR_TEAL = "#009688";

// Константа хранящая сообщение о авторизации
const MESSAGE_LOGIN_SUCCESS = "Добро пожаловать!";
console.log("====================Обращение к переменной====================");
let name;

/*
 * Переменная name объявлена, но не инициализирована, поэтому
 * ее значение undefined (не определено), тогда как переменная age
 * не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError
 */
console.log(name); // undefined
console.log(age); // ReferenceError: age is not defined

// console.log(a); // ReferenceError: a is not defined
let a = 10;
console.log(a); // 10

// console.log(b); // ReferenceError: b is not defined
const b = 15;
console.log(b); //15

//Типы примитивов
const myAge = 20;
const myNumber = 5.8;
const myName = "Mango";
const isAuthenticated = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;

// Переменная guest пуста и лишена значения
const guest = null;

console.log("====================Оператор typeof====================");

let names;
console.log(names); // undefined

// undefined
let az;
console.log(typeof az); // "undefined"

// null
const bz = null;
console.log(typeof bz); // "object"

// Number
const cz = 5;
console.log(typeof cz); // "number"

// String
const dz = "JavaScript is awesome!";
console.log(typeof dz); // "string"

// Boolean
const ez = false;
console.log(typeof ez); // "boolean"

console.log("====================Вывод данных====================");

const message = "JavaScript is awesome!";
/*
 * В круглых скобках указываем имя переменной,
 * значение которой необходимо вывести в консоль
 */
console.log(message); // JavaScript is awesome!

const nameA = "Mango";
/*
 * Можно сначала указать какую-то произвольную строку,
 * к примеру описывающую переменную или дополняющую ее, после чего
 * поставить запятую и указать имя переменной
 */
console.log("My name is: ", nameA); // My name is: Mango

/*
 * alert выводит модальное окно, текст которого соотсветствует значению
 * переменной (или литерала) которую мы укажем в скобках.
 */
alert(message);

console.log("====================Получение данных====================");
/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 */
const hotelName = prompt("Please enter desired hotel name:");
console.log(hotelName);

/*
 * Важная особенность prompt в том, что не зависимо что ввел пользователь,
 * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
 * не число 5, а строка "5". Об этом необходимо всегда помнить.
 */
const value = prompt("Please enter a number!");
console.log(typeof value); // 'string'
console.log(value); // '5'

console.log("====================Математические операторы====================");

// Операции с числами
const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2

// Остаток от деления
console.log(x % y); // 0

// Сложение с заменой (есть и для других операторов)
let values = 5;

// Аналогично записи value = value + 10;
values += 10;
console.log(values); // 15

const xx = 5;
const yy = 10;
const zz = 5;
console.log("xx,yy,zz", xx, yy, zz);

console.log("xx > yy:", xx > yy); // false
console.log("xx < yy:", xx < yy); // true
console.log("xx < zz:", xx < zz); // false
console.log("xx <= zz:", xx <= zz); // true
console.log("xx === yy:", xx === yy); // false
console.log("xx === zz:", xx === zz); // true
console.log("xx !== yy:", xx !== yy); // true
console.log("xx !== zz:", xx !== zz); // false

console.log("====================Приведение к числу====================");

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // 'number'

console.log(
  "====================Number.parseInt() и Number.parseFloat()===================="
);

// Парсит из строки целое число
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

// Парсит из строки дробное число
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

console.log("====================Проверка на число====================");

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

console.log(
  "====================Сложение чисел с плавающей точкой===================="
);

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// Сделать их целыми, умножив на 10, сложить, а результат разделить на 10
console.log((0.1 * 10 + 0.2 * 10) / 10);

console.log("====================Объект Math====================");

//  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

console.log("==========Конкатенация строк==========");

const messages = "Mango " + "is" + " happy";
console.log(message); // Mango is happy

// Теперь посмотрим на порядок операндов
let result;

result = 5 + "5";
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + "5" + 5;
console.log(result); // '555'
console.log(typeof result); // string

/*
 * Обратите внимание, произошла математическая операция
 * сложения для первых двух пятерок, после чего 10 было
 * преобразовано в строку '10' и сшито с '5'
 */
result = 5 + 5 + "5";
console.log(result); // '105'
console.log(typeof result); // string

console.log("==========Свойства и методы строк==========");

const messageString = "Welcome to Bahamas!";

console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

console.log(message.toLowerCase()); // welcome to bahamas!
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// При этом исходная строка не изменяется
console.log(message); // Welcome to Bahamas!

console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1

// Все методы строк чувствительны к регистру
console.log(message.includes("welcome")); // false
console.log(message.includes("Welcome")); // true

console.log("==========Шаблонные строки и интерполяция==========");
// Используя переменные необходимо составить строку с подставленными значениями
const nameInterpol = "Mango";
const ageInterpol = 2;
const mood = "happy";

const messageInterpol =
  "My name is " +
  nameInterpol +
  ", I'm " +
  ageInterpol +
  " years old and " +
  mood +
  ".";

console.log(messageInterpol); // My name is Mango, I'm 2 years old and happy.

/*
 * Составлять строки с подставляемыми значениями
 * используя конкатенацию очень неудобно.
 * На помощь приходят шаблонные строки и интерполяция.
 */
const sameMessage = `My name is ${nameInterpol}, I'm ${ageInterpol} years old and ${mood}.`;

console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// В интерполяции можно использовать любое валидное выражение
console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.

console.log("==========Логическое «И»==========");
const numI = 20;
const resultInterpol = numI > 10 && numI < 30;
console.log(resultInterpol); // true

const numU = 40;
const resultU = numU > 10 && numU < 30;
console.log(resultU); // false

console.log("==========Логическое «ИЛИ»==========");
const numA = 5;
const resultA = numA < 10 || numA > 30;
console.log(resultA); // true

const numB = 40;
const resultB = numB < 10 || numB > 30;
console.log(resultB); // true

const numC = 20;
const resultC = numC < 10 || numC > 30;
console.log(resultC); // false

console.log("==========Логическое «НЕ»==========");

console.log(!true); // false
console.log(!false); // true
console.log(!1); // false
console.log(!0); // true

console.log("==========Инструкция if==========");
let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100

let costA = 0;
const subscriptionA = "free";

if (subscriptionA === "pro") {
  costA = 100;
}

console.log(costA); // 0

console.log("==========Инструкция if...else==========");
let costB;
const subscriptionB = "free";

if (subscriptionB === "pro") {
  costB = 100;
} else {
  costB = 0;
}

console.log(costB); // 0

let costC;
const subscriptionC = "pro";

if (subscriptionC === "pro") {
  costC = 100;
} else {
  costC = 0;
}

console.log(costC); // 100

console.log("==========Инструкция else...if==========");
let costD;
const subscriptionD = "premium";

if (subscriptionD === "free") {
  costD = 0;
} else if (subscriptionD === "pro") {
  costD = 100;
} else if (subscriptionD === "premium") {
  costD = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(costD); // 500

console.log("==========Тернарный оператор==========");
let type;
const ageA = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

const ages = 20;
const types = ages >= 18 ? "adult" : "child";

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

const num11 = 5;
const num22 = 10;
const biggerNumber1122 = num11 > num22 ? num11 : num22;

console.log(biggerNumber); // 10

console.log("==========Инструкция switch==========");
let costF;
const subscriptionF = "premium";

switch (subscriptionF) {
  case "free":
    costF = 0;
    break;

  case "pro":
    costF = 100;
    break;

  case "premium":
    costF = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(costF); // 500

console.log("==========Область видимости==========");
const valuez = 5;

if (true) {
  console.log("Block scope: ", valuez); // 5
}

console.log("Global scope: ", valuez); // 5

if (true) {
  const valueA = 5;
  console.log("Block scope: ", valueA); // 5
}

console.log("Global scope: ", valueA); // ReferenceError: value is not defined

const global = "global";

if (true) {
  const blockA = "block A";

  // Видим глобальную + локальную A
  console.log(global); // 'global'
  console.log(blockA); // block A

  /*
   * Переменные blockB и blockC не найдены в доступных областях видимости.
   * Будет ошибка обращения к переменной.
   */
  // console.log(blockB); // ReferenceError: blockB is not defined
  // console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // Видим глобальную + внешнюю A + локальную B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    /*
     * Переменная blockC не найдена в доступных областях видимости.
     * Будет ошибка обращения к переменной.
     */
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // Видим глобальную + локальную C
  console.log(global); // global
  console.log(blockC); // block C

  /*
   * Переменные blockA и blockB не найдены в доступных областях видимости.
   * Будет ошибка обращения к переменной.
   */
  // console.log(blockA); // ReferenceError: blockA is not defined
  // console.log(blockB); // ReferenceError: blockB is not defined
}

// Видим только глобальную
console.log(global); // global

/*
 * Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
 * Будет ошибка обращения к переменной.
 */
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

console.log("==========Цикл while==========");
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
console.log("==========Цикл do...while==========");
let password = "";

do {
  password = prompt("Введите пароль длиннее 4-х символов", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);

console.log("==========Цикл for==========");
const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

console.log("==========Инструкции break и continue==========");

for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log("Дошли до 5-й итерации, прерываем цикл!");
    break;
  }
}

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}
