// Задача 1 / 44 Модуль: 6
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach((price) => {
    totalPrice += price;
  });
  // Пиши код выше этой строки
  return totalPrice;
}

// Задача 2 / 44 Модуль: 6
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach((array) => {
    if (array > value) {
      filteredNumbers.push(array);
    }
  });
  // Пиши код выше этой строки
  return filteredNumbers;
}
// Задача 3 / 44 Модуль: 6
