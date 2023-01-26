const gridContainer=document.getElementById("gridContainer");
const newGridButton=document.querySelector("#newGrid");


for(let i=0;i<256;i++){ //Crea grid inicial de 16x16
    let gridItem=document.createElement("div");
    gridItem.classList.add("gridItem");
    gridContainer.appendChild(gridItem);
    
}

const itemList=document.querySelectorAll(".gridItem");
itemList.forEach(item => item.addEventListener('mouseover', () =>{ //Registra evento en el item y cambia su color
    item.classList.add("hoveredItem");
    console.log('hola');
}))

newGridButton.addEventListener('click',() =>{
  let squareAmount=Number(window.prompt('Enter the number of squares per side of the new grid'));
  let scuareWidth= 32/squareAmount; //32 es el tamaño en em del grid
})