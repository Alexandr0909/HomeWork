// Task 1

// Создайте функцию,
// которая получает в качестве аргументов три числа
// и возвращает наименьшее из них.

// function getNum(a, b, c) {
//     let a = parseInt(prompt("Введите 1-e число!"));
//     let b = parseInt(prompt("Введите 2-e число!"));
//     let c = parseInt(prompt("Введите 3-e число!"));
//     // case_1
//     if (a < b && b < c) {
//         console.log(a);
//     }
//     // case_2_______________________
//     if (c < b && b < a) {
//         console.log(c);
//     }
//     // case_3_______________________
//     if (b < a && a < c) {
//         console.log(b);
//     }
//     // case_4_______________________
//     if (c < a && a < b) {
//         console.log(c);
//     }
//     // case_5_______________________
//     if (a < c && c < b) {
//         console.log(a);
//     }
//     // case_6_______________________
//     if (b < c && c < a) {
//         console.log(b);
//     }
// }

// Task 2

//  Создайте функцию, которая получает в качестве аргументов значения суток,
//  часов и минут, а возвращает соответствующее им количество секунд.

// function getTime(d, h, m) {
//     return d * 86400 + h * 3600 + m * 60;
// }

// getTime( );

// Task 3

//  Напишите рекурсивную функцию для подсчёта факториала числа.

// Task 4

//  Напишите рекурсивную функцию,
//  которая разворачивает введённое число задом наперёд.
//  Например, если на вход функция получает 1234, вернуть она должна 4321.

// Task 5

//  Напишите функцию для решения квадратных уравнений.
//  В качестве параметров она должна принимать коэффиценты a, b и c,
//   возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии)
//   функция должна выводить в консоль.
// Примечание 1. Ищем только решения в действительных числах, комплексные не нужны!
// Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).
