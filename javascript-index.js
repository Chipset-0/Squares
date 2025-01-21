
const containerDiv = document.querySelector("#containerDiv")

const gridSizeButton = document.querySelector("#gridSizePrompt")
gridSizeButton.addEventListener("click", (event) => {
    promptForNewGridSize()
})

const squareRowDiv = document.createElement("div")
squareRowDiv.classList.add("squareRowDiv")
function updateFlexContainer(gridWidth)
{
    for (let j = 1; j <= gridWidth**2; j++)
    {
        let square = document.createElement("div")
        square.classList.add("squareDiv")
        square.style.width = `${100 / gridWidth}%`;
        square.style.height = `${100 / gridWidth}%`;
        
        square.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "pink"
        })
        containerDiv.appendChild(square)
    }
}

function promptForNewGridSize()
{

}

updateFlexContainer(100)