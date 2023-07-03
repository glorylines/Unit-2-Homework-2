// // let firstName = prompt("Ваше имя:");
// let firstName = null;

// while (!firstName || !isNaN(firstName)) {
//   firstName = prompt("Ваше имя:");
// }

// let surname = prompt("Ваша фамилия:");
// let fatherName = prompt("Ваше отчество:");

// let fullName = firstName + " " + surname + " " + fatherName;

// let age = prompt("Ваш возраст в годах:");

// let ageInDays = age * 365;
// let futureAge = +age + 5;

// let gender = confirm("Ваш пол - женский?");
// if (gender === true) {
//     gender = "да"
// } else {
//     gender = "нет"
// }

// let pension = (age < 55);
// if (pension === true) {
//     pension = "нет"
// } else {
//     pension = "да"
// }

// alert("Ваше ФИО: " + fullName + "\nВаш возраст в годах: " + age + "\nВаш возраст в днях: " + ageInDays + "\nЧерез 5 лет вам будет: " + futureAge + "\nВаш пол - женский? " + gender + "\nВы на пенсии: " + pension);


// ОСНОВНОЕ ЗАДАНИЕ

// let firstName = null;

// while (!firstName || !isNaN(firstName)) {
//   firstName = prompt("Ваше имя:");
// }

// Задание-1

// let codeWord1 = "обернись";
// let codeWord2 = "неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";

// let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);
// alert(cipher);


// Задание-2

// let cardinalDirections = prompt("В какую сторону света вы хотели бы отправить?");
// switch (cardinalDirections) {
//     case "юг":
//         alert("На юг пойдешь счастье найдешь");
//         break;
//     case "север":
//         alert("На север пойдешь много денег найдешь");
//         break;
//     case "запад":
//         alert("На запад пойдешь верного друга найдешь");
//         break;
//     case "восток":
//         alert("На восток пойдешь разработчиком станешь");
//         break;
//     default:
//         alert("Попробуйте пожалуйста еще раз");
// }
// console.log(cardinalDirections);


// ADVANCE LEVEL


// Задание-1

// let firstName = "пОлИнА";
// firstName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
// let lastName = "нАбЕрЕжНаЯ";
// lastName = lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase();

// alert("Привет, " + firstName + " " + lastName + "!");


// Задание-2

// let number = prompt("Введите число:");
// let subtract = prompt("Сколько отнять от предыдущего результата?");
// let add = prompt("Сколько прибавить от предыдущего результата?");
// let multiply = prompt("Сколько умножить от предыдущего результата?");
// let divide = prompt("Сколько разделить от предыдущего результата?");
// let result = number - subtract + add * multiply / divide;
// alert("(" + "(" + "(" + number + "-" + subtract + ")" + "+" + add + ")" + "*" + multiply + ")" + "/" + divide + "=" + result);


// Задание-3

// let start = prompt("Введите начальное число:");
// console.log("Введите начальное число: ", start)
// let end = prompt("Введите конечное число:");
// console.log("Введите конечное число: ", end);

// while (start < end) {
//     start++;
//     console.log("Результат:", start);
// }


// Задание-4

// let start = prompt("Введите начальное число:");
// console.log("Введите начальное число: ", start)
// let end = prompt("Введите конечное число:");
// console.log("Введите конечное число: ", end);
// let sum = start + end;

// for (let sum = start + end; start < end; start++ ) {
//     console.log("Сумма чисел:", sum);
// }


// Задание-5

// let numberOne = prompt("Введите число:");
// console.log("Введите число:", numberOne);
// console.log("Таблица умножения для числа:", numberOne);

// for (let numberTwo = 1; numberTwo <= 10; numberTwo++) {
//     console.log(numberOne + "*" + numberTwo + "=" + (numberOne * numberTwo));
// }
