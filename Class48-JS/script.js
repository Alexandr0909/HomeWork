
// 1 Сделайте так, чтобы по нажатию на кнопку выводился alert
/* function onClickButton() {
    alert("Hello");
}
 */










// 2 Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button

/* let btnSend = document.querySelector('button');
let massage = document.querySelector('h1');

btnSend.addEventListener('click', () =>{
btnSend.innerText='Sending...';

  setTimeout(()=>{
    btnSend.style.display="none";
    massage.innerText='Massege Sent';
  }, 5000);
}); */









// 3 Создайте форму с полем для ввода и двумя кнопками, сделайте так,
// чтобы по нажатию на кнопку disable, поле становилось неактивным, в случае с enable - наоборот










// 4 Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока.
// Координаты выводить под блоком.
document.querySelector('#test').onmousemove = function (event) {
  event = event || window.event;
  document.querySelector('#x').innerHTML = event.offsetX;
  document.querySelector('#y').innerHTML = event.offsetY;
}

/* 
document.querySelector("n1");
n1.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let px = document.querySelector("p.x");
    let py = document.querySelector("p.y");
    px.innerText = "x: " + x;
    py.innerText = "y: " + y;
}); */






// 5 Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки.
// Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки

/* let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = 'ok.png';
})
btn2.addEventListener('click', () => {
    img.src = 'no.png';
})

btn3.addEventListener('click', () => {
    img.src = 'sky.png';
}) */









// 6 Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона.
// Добавление элементов выполните с помощью цикла. Добавьте событие при наведении мыши,
// которое будет скруглять данные блоки с помощью border-radius до круга.
// Для замедления эффекта скругления в CSS можно добавить transition.

let block = document.getElementsById('#blockr');

block.onmousemove = function(){
  this.style.borderRadius = '100px';
}
