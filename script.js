let gameSquares = document.querySelectorAll('.game-square');
let gameMessage = document.querySelector('.game-message');


const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const resetBoard = () => {
        board.fill("");
    }
    return {getBoard, resetBoard}
})();

const displayController = (() => {
    const update = () => {
        gameBoard.getBoard().forEach((cell, index) => {
            document.getElementById(`${index + 1}`).innerHTML = cell;
        });
    }
    return {update}
})(gameBoard);

displayController.update();

const playerFactory = (name, symbol) => {
    return {
        name
    }
}

let playerX = playerFactory('X');
let playerO = playerFactory('O');

let currentPlayer = playerX

gameSquares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.innerHTML === '') {
            square.innerHTML = currentPlayer.name;
            if (currentPlayer === playerX) {
                currentPlayer = playerO;
            }
            else {
                currentPlayer = playerX;
            }
            gameMessage.innerHTML = `Player ${currentPlayer.name}'s turn`;
        }
    }
    )
});

let restartButton = document.querySelector(".btn-restart");
restartButton.addEventListener('click', () => {
    gameBoard.resetBoard();
    displayController.update();
});
