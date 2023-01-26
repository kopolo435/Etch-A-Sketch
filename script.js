const gridContainer=document.getElementById("gridContainer");
const newGridButton=document.querySelector("#newGrid");
const itemList=document.querySelectorAll(".gridItem");

for(let i=0;i<256;i++){ //Crea grid inicial de 16x16
    let gridItem=document.createElement("div");
    gridItem.classList.add("gridItem");
    gridContainer.appendChild(gridItem);
    
}


itemList.forEach(item => item.addEventListener('mouseover', () =>{ //Registra evento en el item y cambia su color
    item.classList.add("hoveredItem");
    console.log('hola');
}))

