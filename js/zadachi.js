// Задача 6 / 19 Модуль: 5

function Storage(items) {
  this.items = items;
}
Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  this.items.push(newItem);
  console.log(Storage.prototype.hasOwnProperty("addItem"));
};

Storage.prototype.removeItem = function (removeItem) {
  this.items = this.items.filter((items) => items !== removeItem);
  console.log(Storage.prototype.hasOwnProperty("removeItem"));
};

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

