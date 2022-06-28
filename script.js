let gameSquares = document.querySelectorAll('.game-square');
let gameMessage = document.querySelector('.game-message');
let gameOver = false;

const gameBoard = (() => {
    board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const resetBoard = () => {
        board.fill("");
    }

    const checkWin = () => {
        let win = false;
        let winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        winCombos.forEach(combo => {
            if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== "") {
                win = true;
            }
        });
        return win;
    }

    return {getBoard, resetBoard, checkWin}
})();

const displayController = (() => {
    const update = () => {
        gameBoard.getBoard().forEach((cell, index) => {
            document.getElementById(`${index + 1}`).innerHTML = cell;
            gameOver = false;
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
        if(!gameOver) {
            if(square.innerHTML === '') {
                gameBoard.getBoard()[square.id - 1] = currentPlayer.name;
                displayController.update();
                if (currentPlayer === playerX) {
                    currentPlayer = playerO;
                }
                else {
                    currentPlayer = playerX;
                }
                gameMessage.innerHTML = `Player ${currentPlayer.name}'s turn`;
                if(gameBoard.checkWin()) {
                    gameMessage.innerHTML = `Player ${currentPlayer.name} wins!`;
                    gameOver = true;
                }
                else if(gameBoard.getBoard().every(cell => cell !== '')) {
                    gameMessage.innerHTML = 'It\'s a tie!';
                    gameOver = true;
                }
            }
        }
    }
    )
});

let restartButton = document.querySelector(".btn-restart");
restartButton.addEventListener('click', () => {
    gameBoard.resetBoard();
    displayController.update();
});
