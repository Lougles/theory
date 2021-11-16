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

console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
console.log("==========l==========");
