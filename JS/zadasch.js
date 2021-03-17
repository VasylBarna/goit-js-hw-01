// const result = [];
// for (var i = 0; i < 5; i++) {
//   result[i] = (function (y) {
//     return function () {
//       console.log(y);
//     };
//   })(i);
// }
// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();

// // або

// var result = [];
// for (var i = 0; i < 5; i++) {
//   result[i] = (function inner(x) {
//     // additional enclosing context
//     return function () {
//       console.log(x);
//     };
//   })(i);
// }
// result[0](); // 0, expected 0
// result[1](); // 1, expected 1
// result[2](); // 2, expected 2
// result[3](); // 3, expected 3
// result[4](); // 4, expected 4

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);

  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior("Poly", 200, "sword");
console.log(poly);
