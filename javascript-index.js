
const containerDiv = document.querySelector("#containerDiv")

const gridSizeButton = document.querySelector("#gridSizePrompt")
gridSizeButton.addEventListener("click", (event) => {
    promptForNewGridSize()
})

const clearButton = document.querySelector("#clearButton")
clearButton.addEventListener("click", (event) => {
    updateFlexContainer()
})

let currentGridSize = 16

function getRndRGBVal() {
    return Math.floor(Math.random() * (256) );
}

function getRndColor()
{
    
    return "rgb(" + getRndRGBVal() + "," + getRndRGBVal() + "," + getRndRGBVal() + ")"; 
}

function updateFlexContainer()
{
    containerDiv.innerHTML = ''
    for (let j = 1; j <= currentGridSize**2; j++)
    {
        let square = document.createElement("div")
        square.classList.add("squareDiv")
        square.style.width = `${100 / currentGridSize}%`;
        square.style.height = `${100 / currentGridSize}%`;
        
        square.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = getRndColor()
        })
        containerDiv.appendChild(square)
    }
}

function promptForNewGridSize()
{
    let validInput = false
    while (!validInput)
    {
        let result = parseInt(prompt("What grid size? [1-100]"))
        if (isNaN(result))
        {
            alert("Not a number")
        }
        else if (result < 0)
        {
            alert("Negative Numbers Not Accepted")
        }
        else if (result > 100)
        {
            alert("Number must be from 1 to 100 inclusive")
        }
        else
        {
            currentGridSize = result
            updateFlexContainer()
            validInput = true
        }
    }
}

updateFlexContainer()