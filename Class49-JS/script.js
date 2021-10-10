// let frm = document.forms.reg;
// let sex = frm.elements.sex;  /* или так - [0] */
// console.dir(sex[1]);

// Второй вариант

let frm = document.forms.reg;
let user = frm.user;
let sex = frm.sex; /* масмв из 2-х элементов */
let about = frm.about;
console.log(user.value, sex[0].checked, about.value);
