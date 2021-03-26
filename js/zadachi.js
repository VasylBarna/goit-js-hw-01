// // Задача 1 / 44 Модуль: 6
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach((price) => {
//     totalPrice += price;
//   });
//   // Пиши код выше этой строки
//   return totalPrice;
// }

// // Задача 2 / 44 Модуль: 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach((array) => {
//     if (array > value) {
//       filteredNumbers.push(array);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// Задача 3 / 44 Модуль: 6
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach((arr, i) => {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(arr);
//     }
//   });
//   return commonElements;

//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Задача 4 / 44 Модуль: 6

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

// Задача 5 / 44 Модуль: 6

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;
// // Пиши код выше этой строки

// Задача 6 / 44 Модуль: 6
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Задача 7 / 44 Модуль: 6
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// / Задача 8 / 44 Модуль: 6
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) =>{
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }

// Задача 8 / 44 Модуль: 6
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newEven = [];
  numbers.forEach((element) => {
    if (element % 2 === 0) {
      newEven.push((numbers = element + value));
    }
  });
  return newEven;
  // Пиши код выше этой строки
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
