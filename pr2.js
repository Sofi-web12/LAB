"use strict";
console.log("Підключено JavaScript для Практичної роботи No2");

// 1. Функція-оголошення
function greet() {
    console.log("Привіт, світ!");
}
greet();
greet();

// 2. Функціональний вираз
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // 20

// 3. Стрілочна функція
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // 5

// 4. Функція з параметрами та return
function square(x) {
    return x * x;
}
console.log(square(6)); // 36

// 5. Демонстрація областей видимості
if (true) {
    let localVar = "Я в блоці";
    console.log(localVar); // Працює
}
// console.log(localVar); // Має викликати ReferenceError

// 6. Функція-лічильник із замиканням
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 7. Демонстрація контексту this
const person = {
    name: "Олена",
    sayHello() {
        console.log(`Привіт, мене звуть ${this.name}`);
    }
};
person.sayHello(); // Привіт, мене звуть Олена

// 8. Каррінг
function add(a) {
    return function(b) {
        return a + b;
    };
}
const addTen = add(10);
console.log(addTen(5)); // 15

// 9. Комплексна функціональна анкета
function createSurvey() {
    const name = prompt("Введіть ваше ім'я:");
    const age = Number(prompt("Введіть ваш вік:"));
    const city = prompt("Введіть ваше місто:");
    const isAdult = age >= 18;
    return {
        name,
        age,
        city,
        isAdult
    };
}

function displaySurvey(surveyData) {
    const message = `Ім'я: ${surveyData.name}\nВік: ${surveyData.age}\nМісто: ${surveyData.city}\n${surveyData.isAdult ? "Користувач повнолітній" : "Користувач неповнолітній"}`;
    alert(message);
    console.log(message);
}

const surveyData = createSurvey();
displaySurvey(surveyData);

// 10. Калькулятор конвертації температур
function createConverter(a) {
    return function(b) {
        return function(temp) {
            return temp * a + b;
        };
    };
}
const cToF = createConverter(9 / 5)(32); // C -> F
const fToC = createConverter(5 / 9)(-32 * 5 / 9); // F -> C

function temperatureConverter() {
    const direction = prompt("Оберіть напрямок конвертації: Введіть 1 для C → F, 2 для F → C");
    const temp = Number(prompt("Введіть числове значення температури:"));
    if (direction === "1") {
        const result = cToF(temp);
        alert(`${temp}°C = ${result.toFixed(2)}°F`);
        console.log(`${temp}°C = ${result.toFixed(2)}°F`);
    } else if (direction === "2") {
        const result = fToC(temp);
        alert(`${temp}°F = ${result.toFixed(2)}°C`);
        console.log(`${temp}°F = ${result.toFixed(2)}°C`);
    } else {
        alert("Некоректний вибір!");
    }
}

temperatureConverter();
