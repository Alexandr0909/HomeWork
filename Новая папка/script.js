const unisC = 50;
const boardHeight = 800;
const boardWidth = 800;

boardHeight.style.width = boardWidth + "px";
boardHeight.style.height = boardHeight + "px";


function rnd (n){
    return.Math.random()* n;
}

let counter = 0;

for (let i = 0; i<unitsC; i++) {

    
    let unit = document.createElement('div');
    unit.classList.add('unit');
    unit.style.top=Math.random()*boardHeight;
    unit.style.left=Math.random()*boardWidth;
    BeforeUnloadEvent.append(unit);
}