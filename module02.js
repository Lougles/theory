console.log("==========Создание==========");
// Пустой массив
const arr = [];

// Массив clients с тремя элементами
const clients = ["Mango", "Poly", "Ajax"];

console.log(clients); // ["Mango", "Poly", "Ajax"]
//
//
//
console.log("==========Доступ к элементам==========");
const clientsA = ["Mango", "Poly", "Ajax"];

// Указывая в скобках индекс элемента мы получаем его значение
console.log(clientsA[0]); // Mango
console.log(clientsA[1]); // Poly
console.log(clientsA[2]); // Ajax
//
//
//
console.log("==========Переопределение==========");
const clientsB = ["Mango", "Poly", "Ajax"];

// Значение элемента можно заменить
clientsB[0] = "Kiwi";
console.log(clientsB[0]); // Kiwi

// Или добавить
clientsB[3] = "Alex";
console.log(clientsB[3]); // Alex

console.log(clientsB); // ["Kiwi", "Poly", "Ajax", "Alex"]

console.log("==========Длина массива==========");
const clientsC = ["Mango", "Poly", "Ajax"];

// length вернет текущую длину массива
console.log(clientsC.length); // 3

clientsC.length = 5;
console.log(clientsC.length); // 5
console.log(clientsC); // ["Mango", "Poly", "Ajax", empty × 2]
console.log(clientsC[4]); // undefined

clientsC.length = 2;
console.log(clientsC); // ["Mango", "Poly"]

console.log("==========Итерация по массиву==========");
const clientsD = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clientsD.length; i += 1) {
  console.log("Logging clients: ", clientsD[i]);
}
const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']

console.log("==========Цикл for...of==========");
// Итерация по массиву
const clientsE = ["Mango", "Ajax", "Poly"];

for (const client of clientsE) {
  console.log(client);
}

// Итерация по строке
const string = "javascript";

for (const character of string) {
  console.log(character);
}

console.log("==========Инструкции break и continue==========");
const clientsF = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clientsF) {
  /*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   */

  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  // Если они не совпадают то запишем в resultMsg сообщение об отсутствии имени
  message = "Клиента с таким именем нету в базе данных!";
}

console.log(message); // Клиент с таким именем есть в базе данных!

const clientsJ = ["Mango", "Poly", "Ajax"];
const clientNameToFindA = "Poly";
let messageA = "Клиента с таким именем нету в базе данных!";

for (const client of clientsJ) {
  if (client === clientNameToFindA) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  // Если не совпадает, то на этой итерации ничего не делаем
}

console.log(messageA); // Клиент с таким именем есть в базе данных!

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const numbersA = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbersA.length; i += 1) {
  if (numbersA[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbersA[i]}`); // 18, 29, 34
}

console.log("==========Многомерные массивы==========");
const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrixA[0][0]); // 1
console.log(matrixA[1][2]); // 6
console.log(matrixA[2][2]); // 9

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log("Подмассив матрицы matrix[i]: ", matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log("Элемент подмассива матрицы matrix[i][j]: ", matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45

console.log("==========Присвоение по ссылке и по значению==========");
let aa = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
let bb = aa;
console.log(aa); // 5
console.log(bb); // 5

// Изменим значение a
aa = 10;
console.log(aa); // 10
// Значение b не изменилось так как это отдельная копия
console.log(bb); // 5

const a = ["Mango"];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ['Mango']
console.log(b); // ['Mango']

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ['Mango', 'Poly']

// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одно и то же место в памяти
console.log(b); // ['Mango', 'Poly']

// Результат повторяется
b.push("Ajax");
console.log(a); // ['Mango', 'Poly', 'Ajax']
console.log(b); // ['Mango', 'Poly', 'Ajax']

console.log("==========Методы массива split() и join()==========");
// split
const messageB = "Welcome to Bahamas!";

// Разбивает строку по разделителю, в данном случае это пробел
console.log(messageB.split(" ")); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(messageB.split("")); // [много букв :)]

// join
const clientsH = ["Mango", "Poly", "Ajax"];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clientsH.join(" ")); // "Mango Poly Ajax"
console.log(clientsH.join(",")); // "Mango,Poly,Ajax"
console.log(clientsH.join("-")); // "Mango-Poly-Ajax"

console.log("==========Методы indexOf() и includes()==========");
const clientsI = ["Mango", "Ajax", "Poly", "Kiwi"];

console.log(clientsI.indexOf("Poly")); // 2
console.log(clientsI.indexOf("Monkong")); // -1

const clientsK = ["Mango", "Ajax", "Poly", "Kiwi"];

console.log(clientsK.includes("Poly")); // true
console.log(clientsK.includes("Monkong")); // false

console.log("==========Проверка множественных условий с includes()==========");
const fruit = "apple";

if (fruit === "apple" || fruit === "strawberry") {
  console.log("It is a red fruit!");
}
// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruitA = "cherry";

if (redFruits.includes(fruitA)) {
  console.log("It is a red fruit!");
}

console.log("==========push и pop==========");
// Создаем пустой массив
const stack = [];

// Добавляем элементы в конец массива
stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1, 2]

stack.push(3);
console.log(stack); // [1, 2, 3]

// Удаляем элементы из конца массива
console.log(stack.pop()); //  3
console.log(stack); // [1, 2]

console.log(stack.pop()); //  2
console.log(stack); // [1]

console.log(stack.pop()); //  1
console.log(stack); // []

console.log(stack.pop()); //  undefined

console.log("==========shift() и unshift()==========");
const clientsL = ["Mango", "Ajax", "Poly"];

console.log(clientsL.shift()); // Mango
console.log(clientsL); // ["Ajax", "Poly"]

clients.unshift("Kiwi");
console.log(clientsL); // ["Kiwi", "Ajax", "Poly"]

console.log("==========Метод slice()==========");
const clientsM = ["Mango", "Ajax", "Poly", "Kiwi"];

// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log(clientsM.slice(1, 3)); // ["Ajax", "Poly"]

// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(clientsM.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// Вернет копию исходного массива
console.log(clientsM.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Вернет новый массив состоящих из последних двух элементом исходного
console.log(clientsM.slice(-2)); // ["Poly", "Kiwi"]

console.log("==========Метод splice()==========");
// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]

// Предположим, что у вас есть массив с названиями цветов в виде строк.
const colors = ["red", "green", "blue"];

// Следующая операция помещает один новый элемент перед вторым элементом.
colors.splice(2, 0, "purple");

// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
console.log(colors); // ["red", "green", "purple", "blue"]

// Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
colors.splice(1, 0, "yellow", "pink");

// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ["C", "C++", "Java", "JavaScript"];

// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, "Python");

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, "C#", "Swift", "Go");

console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

console.log("==========concat()==========");
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClients = oldClients.concat(newClients);

console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

console.log(oldClients);
// ["Mango", "Ajax", "Poly", "Kiwi"]

console.log(newClients);
// ["Monkong", "Singu"]

console.log("==========Функциональное выражение==========");
// a, b, c это параметры
const add = function (a, b, c) {
  return a + b + c;
};

// 1, 2, 3 это аргументы
const result = add(1, 2, 3);
console.log(result); // 6

// 5, 10, 15 это аргументы
console.log(add(5, 10, 15)); // 30

console.log("==========Порядок выполнения кода==========");
const fnA = function () {
  console.log("Начала выполняться [fnA]");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
};

const fnB = function () {
  console.log("Выполняется [fnB]");
};

console.log("Начал выполнение [main]");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA]");

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

console.log("==========Параметры по умолчанию==========");
const count = function (countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
};

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
count(); // countFrom = 0, countTo = 10, step = 1

console.log("==========Псевдомассив arguments==========");
const sum = function () {
  let total = 0;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

console.log(sum(1, 2, 3)); //  6
console.log(sum(1, 2, 3, 4)); //  10
console.log(sum(1, 2, 3, 4, 5)); //  15

console.log("==========Способы преобразования псевдомассив==========");
const fnC = function () {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
};
const fnD = function (...args) {
  // В переменной args будет полноценный массив
};

console.log("==========Паттерн Guard Clause==========");
const withdrawA = function (amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля.");
  } else if (amount > balance) {
    console.log("Недостаточно средств на счету.");
  } else {
    console.log("Операция снятия средств проведена.");
  }
};

withdrawA(0, 300); // Для проведения операции введите сумму больше нуля.
withdrawA(500, 300); // Недостаточно средств на счету.
withdrawA(100, 300); // Операция снятия средств проведена.

//Function with pattern guard clause

const withdraw = function (amount, balance) {
  /*
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля.");
    return;
  }

  /*
   * Если условие первого if не выполнилось, его тело пропускается
   * и интерпретатор доходит до этого if.
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
  if (amount > balance) {
    console.log("Недостаточно средств на счету.");
    return;
  }

  /*
   * Если ни один из предыдущих if не выполнился,
   * интерпретатор доходит до этого кода и выполняет его.
   */
  console.log("Операция снятия средств проведена.");
};

withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
withdraw(500, 300); // Недостаточно средств на счету.
withdraw(100, 300); // Операция снятия средств проведена.

console.log("==========Объявление функции==========");
addE(1, 2, 3); // 6
print("text"); // text

function addE(a, b, c) {
  console.log(a + b + c);
}

function print(str) {
  console.log(str);
}
// ❌ Плохо
function fnG() {}

// ✅ Хорошо
const fnH = function () {};

console.log("==========Область видимости==========");
const bc = 10;

const addC = function () {
  const a = 5;

  return a + bc;
};

addC(); // 15

console.log("==========Область видимости функции==========");
const valueZZ = 50;

const addF = function (num) {
  const value = 10;
  const innerValue = 5;
  return num + value + innerValue;
};

// value объявлен глобально и поэтому доступен
console.log(valueZZ); // 50

console.log(addF(20)); // 35

// Ошибка, переменная innerValue не объявлена в этой области
// видимости, она доступна только внутри функции add
// console.log(innerValue);

console.log("==========Hoisting==========");
// Вот поэтому мы используем let или const

console.log(valueV); // undefined
valueV = 5;

if (true) {
  console.log(valueV); // 5
  var valueV = 10;
  console.log(valueV); // 10
}

valueV = 15;
console.log(valueV); // 15

// В каждой области видимости будет создана своя, независимая переменная value

// console.log(valueW); // ReferenceError: value is not defined
const valueW = 5;
console.log(valueW); // 5

if (true) {
  // console.log(valueW); // ReferenceError: value is not defined
  const valueW = 10;
  console.log(valueW); // 10
}

console.log(valueW); // 5

console.log("==========Стрелочные функции==========");
// Обычное функциональное выражение
const addExpression = function (a, b, c) {
  return a + b + c;
};

// Тоже самое записано как стрелочная функция
const addArrow = (a, b, c) => a + b + c;

// Если параметров несколько, то они перечисляются через запятую в круглых скобках.
const fnJ = (a, b, c) => {
  return a + b + c;
};

// Если параметр один, то он может быть без круглых скобок.
const fnK = (x) => {
  return x * 2;
};

// Если параметров нет, то обязательно должны быть пустые круглые скобки.
const fnL = () => {
  console.log("Hello! :]");
};
console.log("==========Стрелочные функции и arguments==========");
const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]
