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
        name,
        symbol
    }
}