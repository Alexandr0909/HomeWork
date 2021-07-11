// Task 1

// Создайте функцию, 
// которая получает в качестве аргументов три числа 
// и возвращает наименьшее из них.

let a = parseInt(prompt("Введите 1-e число!"));
let b = parseInt(prompt("Введите 2-e число!"));
let c = parseInt(prompt("Введите 3-e число!"));
// case_1
if (a < b && b < c) {
    console.log(a)
}
// case_2_______________________
if (c < b && b < a) {
    console.log(c)
}
// case_3_______________________
if (b < a && a < c) {
    console.log(b)
}
// case_4_______________________
if (c < a && a < b) {
    console.log(c)
}
// case_5_______________________
if (a < c && c < b) {
    console.log(a)
}
// case_6_______________________
if (b < c && c < a) {
    console.log(b)
}