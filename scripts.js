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
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    let num_tiles = setNumOfSquares();

    board.style.gridTemplateColumns = `repeat(${num_tiles} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${num_tiles} , 1fr)`;

    for(let rows = 0; rows < (num_tiles*num_tiles); ++rows)
    {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", hover);
        board.appendChild(square);
    }
}

function hover(e){
    this.classList.add("hover");
    console.log(e);
}
