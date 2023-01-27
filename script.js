function CheckHover(itemList){
    
    itemList.forEach(item => item.addEventListener('mouseover', () =>{ //Registra evento en el item y cambia su color
    //item.classList.add("hoveredItem");
    item.style.backgroundColor=random_rgba();
    }))
}
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
const gridContainer=document.getElementById("gridContainer");
const newGridButton=document.querySelector("#newGrid");


for(let i=0;i<256;i++){ //Crea grid inicial de 16x16
    let gridItem=document.createElement("div");
    gridItem.classList.add("gridItem");
    gridContainer.appendChild(gridItem);
    
}
itemList=document.querySelectorAll(".gridItem");
CheckHover(itemList);

newGridButton.addEventListener('click',() =>{

    let itemAmount=Number(window.prompt('Enter the number of squares per side of the new grid. Maximum 100'));
    if(itemAmount>100){
        window.alert("The maximum number is 100");
        return;
    }

    let itemDimension= (32/itemAmount).toFixed(2); /*Indica el nuevo tamaño de los item. 
                                                    32 es el tamaño en em del grid*/

    itemList.forEach(item=>{
        gridContainer.removeChild(item);
    })
 
    for(let i=0;i<(itemAmount*itemAmount);i++){ //Añade la nueva cantidad de items al grid
        let gridItem=document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.width=itemDimension+'em';
        gridItem.style.height=itemDimension+'em';
        gridContainer.appendChild(gridItem);
    }
    itemList=document.querySelectorAll(".gridItem");
    CheckHover(itemList);
    
})


