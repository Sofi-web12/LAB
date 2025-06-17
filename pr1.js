"use strict";
console.log("Hello from external file!");


try {
  x = 10; // ❌ ПОМИЛКА! Змінна не оголошена.
  console.log(x);
} catch (e) {
  console.warn("Strict mode error:", e.message);
}

// Оголошення змінних
let age = 25; // let - змінна, яку можна змінювати
const PI = 3.14; // const - константа, значення змінити неможливо
var nameVar = "John"; // var - застарілий, не рекомендується

// Область видимості
{
  let blockVar = "Я у блоці";
  console.log(blockVar); // Працює
}
// console.log(blockVar); // ПОМИЛКА: blockVar не доступна за межами блоку

// Приклад зміни значення
let counter = 10;
counter++;
console.log(counter); // 11

// Типи даних та перетворення
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 100n); // "bigint"

console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

// Взаємодія з користувачем
alert("Welcome!");
let userInput = prompt("Enter your name:");
console.log("Користувач ввів:", userInput);
let confirmation = confirm("Are you sure?");
console.log("Користувач підтвердив?", confirmation);

// Комплексне завдання: Анкета
let name = prompt("Як вас звати?");
let userAge = Number(prompt("Скільки вам років?"));
let city = prompt("Ваше місто?");
let color = prompt("Улюблений колір?");
let isWorking = confirm("Ви зараз працюєте?");
let isAdult = userAge >= 18;

console.log("Ім'я:", name, "| Тип:", typeof name);
console.log("Вік:", userAge, "| Тип:", typeof userAge);
console.log("Місто:", city, "| Тип:", typeof city);
console.log("Колір:", color, "| Тип:", typeof color);
console.log("Працює:", isWorking, "| Тип:", typeof isWorking);
console.log("Повнолітній:", isAdult, "| Тип:", typeof isAdult);

alert(`Привіт, ${name} з міста ${city}!
Вік: ${userAge} (${isAdult ? "повнолітній" : "неповнолітній"})
Улюблений колір: ${color}
Працює: ${isWorking ? "так" : "ні"}`);