let board;
let squareSize = 50;
let cols, rows;

function setup() {
    createCanvas(400, 400);
    cols = width / squareSize;
    rows = height / squareSize;
    board = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    randomizeBoard();
}

function draw() {
    background(220);
    renderBoard();
    
    // Draw overlay for affected squares on mouse press
    if (mouseIsPressed) {
        let x = Math.floor(mouseX / squareSize);
        let y = Math.floor(mouseY / squareSize);
        if (x >= 0 && x < cols && y >= 0 && y < rows) {
            fill(0, 100); // Semi-transparent color
            rect(x * squareSize, y * squareSize, squareSize, squareSize);
        }
    }
    
    checkWinCondition();
}

function renderBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            fill(board[i][j]);
            rect(j * squareSize, i * squareSize, squareSize, squareSize);
        }
    }
}

function mouseClicked() {
    let x = Math.floor(mouseX / squareSize);
    let y = Math.floor(mouseY / squareSize);

    if (keyIsDown(SHIFT)) {
        // Shift-click: only flip the square under the mouse
        board[y][x] = board[y][x] === 0 ? 255 : 0;
    } else {
        // Regular click: flip surrounding squares
        flipSurroundingSquares(x, y);
    }
}

function flipSurroundingSquares(x, y) {
    let positions = [
        [x, y],
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
    ];
    
    for (let pos of positions) {
        let [px, py] = pos;
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
            board[py][px] = board[py][px] === 0 ? 255 : 0;
        }
    }
}

function checkWinCondition() {
    let firstValue = board[0][0];
    for (let row of board) {
        for (let value of row) {
            if (value !== firstValue) {
                return false;
            }
        }
    }
    displayWinMessage();
    return true;
}

function displayWinMessage() {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
}

function randomizeBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] = Math.random() < 0.5 ? 0 : 255; // Randomly set to 0 or 255
        }
    }
}
