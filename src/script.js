let gridSize = 16;
const container = document.querySelector(".container");
let containerStyle = 'display: flex; flex-wrap: wrap; width: 520px; height: 520px;'; // Ensure a square container
//let pixelStyle = `height: calc(100% / ${gridSize}); width: calc(100% / ${gridSize}); margin: 0; border: 1px solid black; background-color: aquamarine; box-sizing: border-box;`; 
container.setAttribute('style', containerStyle);

function createGrids(val)
{

    for (let i = 0; i <val * val; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    let pixelStyle = `height: calc(100% / ${val}); width: calc(100% / ${val}); margin: 0; border: 1px solid black; background-color: aquamarine; box-sizing: border-box;`; 
    div.setAttribute('style', pixelStyle);
    container.appendChild(div);
    }
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
    // pixel.setAttribute('style', pixelStyle);
    pixel.addEventListener("mouseover",setColor);
});

}
createGrids(gridSize);

function getRandomColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    var green = Math.floor(Math.random() * 256); // Random value between 0 and 255
    var blue = Math.floor(Math.random() * 256); // Random value between 0 and 255
    
    // Construct the CSS color string
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    
    return color;
}


function setColor(event){
    var div = event.target;
    div.style.backgroundColor = getRandomColor();
}



function newGrids(){
    let inputVal = document.getElementById("integerVal").value;
    var intVal = parseInt(inputVal,10);

    // Remove existing grid cells (without removing event listeners) // gemini shit
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrids(intVal);
}


const butn = document.querySelector('button');
butn.addEventListener('click', newGrids);
