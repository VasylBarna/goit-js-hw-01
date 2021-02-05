// Оператори ветвления


// let balance = 10000;
// let payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем колтчество доступних стредств на счету`);
// if (balance >= payment) {
//               balance = balance - payment;
//               console.log("Все хорошо! Снимаем деньги, спасибо за покупку");
//               console.log(`На счету осталось ${balance} кредитов`);
// }

// let balance = 1000;
// let payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем колтчество доступних стредств на счету`);
// if (balance >= payment) {
//               balance -= payment;
//               console.log("Все хорошо! Снимаем деньги, спасибо за покупку");
//               console.log(`На счету осталось ${balance} кредитов`)
// } else { console.log("На счету недостаточно денег для проведения операции"); }

// console.log("Операция завершена");

// if ... else if и скидка
const totalExpenses = 20000;
const payment = 500;
let discount = 0;
if (totalExpenses >= 100 && totalExpenses < 1000) {
              discount = 0.02;
              console.log("Бронзовий партнер скидка 2%");
} else if (totalExpenses >= 1000 && totalExpenses < 5000) { discount = 0.05;
              console.log("Серебряний партнер скидка 5%");
}
              else if (totalExpenses >= 5000) { discount = 0.1;
              console.log("Золотой партнер скидка 10%");
}
else console.log("У Вас еще нет партнерской скидки");
const finalAmount = payment - payment * discount;
console.log(finalAmount);
console.log(`Оформляем заказ на сумму ${finalAmount} со скидкой ${discount * 100}%`);

// Область видимости
const name = "Mango"
if (true) {
              const age = 5;
              const name = "pollly";
              console.log(age);
              console.log(name);
}
console.log(name);