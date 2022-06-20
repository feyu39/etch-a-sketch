let container = document.querySelector(".container");
let button = document.querySelector(".set-square-num");

button.addEventListener("click", createSquares);

function setNumOfSquares(){
    let numTiles = "None";
    do 
    {
        numTiles = prompt("Select Number of Tiles (Under 100)");
    } 
    while (isNaN(parseInt(numTiles, 10)) === true || parseInt(numTiles, 10) > 100);
    console.log(parseInt(numTiles, 10));
    return parseInt(numTiles, 10);
}

function createSquares()
{
    let num_tiles = setNumOfSquares();
    for(let rows = 0; rows < num_tiles; ++rows)
    {
        let row = document.createElement("div");
        row.classList.add("row");

        for(let squares = 0; squares < num_tiles; ++squares)
        {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", hover);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function hover(e){
    this.classList.add("hover");
    console.log(e);
}
