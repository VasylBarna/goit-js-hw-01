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

// Задача 9 / 44 Модуль: 6

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newEven = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newEven.push(element + value);
//     } else {
//       newEven.push(element);
//     }
//   });
//   return newEven;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// Задача 10 / 44 Модуль: 6

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// Задача 11 / 44 Модуль: 6
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);

// Задача 12 / 44 Модуль: 6
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

// Задача 13 / 44 Модуль: 6
// const getUserNames = (users) => users.map((user) => user.name);

// Задача 14 / 44 Модуль:
// Пиши код ниже этой строки
// const getUserEmails = users => users.map((user) => user.email);
// Пиши код выше этой строки

// Задача 15 / 44 Модуль:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// const oddNumbers = numbers.filter((num) => num % 2 === 1);

// / Задача 16 / 44 Модуль:
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// / Задача 17 / 44 Модуль:
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// / Задача 18 / 44 Модуль:
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter((user) => user.eyeColor === color)

// };
// // Пиши код выше этой строки

// / Задача 19 / 44 Модуль:
// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter((user) => user.age >= minAge && user.age <= maxAge)

// };
// // Пиши код выше этой строки

// / Задача 20 / 44 Модуль:
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];
// const getUsersWithFriend = (users, friendName) => {
//   const result = users.filter((user) => user.friends.includes(friendName));

//   return result;
// };

// / Задача 21 / 44 Модуль:

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqeFriends = allFriends.filter(
//     (user, index) => allFriends.indexOf(user) === index
//   );
//   return uniqeFriends;
// };
// / Задача 22 / 44 Модуль:
// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//     const onlineFriends = users.filter((user) => user.isActive);

// return onlineFriends;
// };
// Пиши код выше этой строки

// / Задача 23 / 44 Модуль:
// Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//     const offlineFriends = users.filter((user) => user.isActive === false);

// return offlineFriends;
// };
// Пиши код выше этой строки

// / Задача 24/ 44 Модуль:
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// / Задача 25/ 44 Модуль:
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
// const result = users.find((user) => user.email === email);
//   return result;
// };
// Пиши код выше этой строки

// / Задача 26/ 44 Модуль:
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((item) => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((item) => item % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every((item) => item % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((item) => item % 2 === 1);

// const eachElementInThirdIsEven = thirdArray.every((item) => item % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((item) => item % 2 === 1);

// / Задача 27/ 44 Модуль:
// Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//    return users.every((user) => user.isActive);
// };
// Пиши код выше этой строки

// / Задача 28/ 44 Модуль:
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((item) => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((item) => item % 2 === 1);

// const anyElementInSecondIsEven = secondArray.some((item) => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((item) => item % 2 === 1);

// const anyElementInThirdIsEven = thirdArray.some((item) => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((item) => item % 2 === 1);

// / Задача 29/ 44 Модуль:
// Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some((user) => user.isActive);
// };
// Пиши код выше этой строки

// / Задача 30/ 44 Модуль:
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, values) => {
//   return acc + values;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// / Задача 31/ 44 Модуль:
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// / Задача 32/ 44 Модуль:
// const calculateTotalBalance = users =>
//  users.reduce((total, user) => total + user.balance, 0);
// Пиши код выше этой строки

// / Задача 33/ 44 Модуль:
// Пиши код ниже этой строки
// const getTotalFriendCount = users =>
// users.reduce((allFriends, user) => allFriends + user.friends.length, 0);
// // Пиши код выше этой строки

// / Задача 34/ 44 Модуль:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
// ];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// / Задача 35/ 44 Модуль:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// / Задача 36/ 44 Модуль:
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
//   "Говард Лавкрафт",
// ];
// // Пиши код ниже этой строки
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// / Задача 37/ 44 Модуль:
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки
// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author)
// );
// const sortedByReversedAuthorName = [
//   ...books,
// ].sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author)
// );
// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );
// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );

// / Задача 38/ 44 Модуль:
// Пиши код ниже этой строки
// const sortByAscendingBalance = users => { return users.sort((firstBalance, secondBalance) =>
// firstBalance.balance - secondBalance.balance);};
// Пиши код выше этой строки

//  Задача 39/ 44 Модуль:
// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users =>
//  [...users].sort((firstFriend, secondFriend) =>
// secondFriend.friends.length - firstFriend.friends.length);
// // Пиши код выше этой строки

// Задача 40/ 44 Модуль:
// Пиши код ниже этой строки
// const sortByName = users => [...users].sort((firstName, secondName) =>
// firstName.name.localeCompare(secondName.name));
// Пиши код выше этой строки

// Задача 41/ 44 Модуль:
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки
// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort();

// Задача 42/ 44 Модуль:
// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .filter((user) => user.name)
//     .map((user) => user.name);
// };
// // Пиши код выше этой строки

// Задача 43/ 44 Модуль:
// Пиши код ниже этой строки
// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((user) => user.friends)
//     .filter((friends, index, users) => users.indexOf(friends) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
// Пиши код выше этой строки

// Задача 44/ 44 Модуль:
// Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => 
//    [...users].filter((user) => user.gender === gender)
//    .reduce((total, user) => total + user.balance, 0)

// // Пиши код выше этой строки