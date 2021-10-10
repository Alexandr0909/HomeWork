// function rand() {
//       let random = []
//       for (let i=0;i<=20;i++){
//     random.push(Math.round((Math.random()*49+1)))
//       }
// return random
// }




// function rand(a, b, c) {
//     let random = []
//     for (let i = 0; i <= a; i++) {
//         random.push(Math.round((Math.random() * (c - b) + b)))
//     }
//     return random
// }
// rand(10, 1, 5)




// Задача 3 слайд 30
// function ind(url = "https://www.bmw.com/en/index.html") {
//     if (url.indexOf("http://") === 0 && url.lastIndexOf(".html") === -5) {
//         return true;
//     } else return false;
// }
// console.log(ind());




// Задача 4 - 5 слайд 31

// function strokaa() {
//     let stroka = "привет как твои дела что делаешь а что будет завтра";
//     console.log(stroka.split("а").length - 1);
//     console.log(stroka.split("А").length - 1);
// }
// console.log(strokaa())




// Задача 6 слайд 31

// let now = new Date();
// now.getDate();
// console.log(now);




// Задача 7 слайд 31

// function mill() {
//     console.log(Date.now());
// }
// mill();

// function f1() {
//     debugger;

//     randomRange = (x, y) => Math.floor(Math.random() * (y - x + 1) + x);

//     getarr = () => {
//         let arr = [];
//         for (let i = 0; i < 20; i++) arr.push(randomRange(10, 19));
//         return arr;
//     };

//     let counter = {};

//     for (let j = 0; j < 1000; j++) {
//         let arr = getarr();

//         for (let i = 0; i < arr.length; i++)
//             counter[arr[i]] = (counter[arr[i]] ? counter[arr[i]] : 0) + 1;
//     }

//     console.log(counter);
// }
// f1()





// HomeWork

// 1. Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. 
// Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.

function ()
