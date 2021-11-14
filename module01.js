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
