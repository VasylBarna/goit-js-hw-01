// // Задача 7 / 19 Модуль: 5

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// };
// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// // Задача 12 / 19 Модуль: 5

// class Storage {
//   #items;
//   constructor (items) {
//   this.#items = items;
// }

// getItems  () {
//   return this.#items;
// };

// addItem (newItem) {
//   this.#items.push(newItem);
// };

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };}

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // Задача 13 / 19 Модуль: 5
// class StringBuilder {
//   #value;
//   constructor (baseValue)   {
//   this.#value = baseValue;
// }

// getValue  () {
//   return this.#value;
// };

// padEnd (str) {
//   this.#value += str;
// };

// padStart (str) {
//   this.#value = str + this.#value;
// };

// padBoth (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };}

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= this.#price) {
      return newPrice;
    } else {
      this.#price = newPrice;
    }
  }
  // Пиши код выше этой строки
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
