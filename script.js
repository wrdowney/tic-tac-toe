const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const resetBoard = () => {
        board.fill("");
    }
})();

const displayController = (() => {

})();

const playerFactory = (name, symbol) => {
    return {
        name,
        symbol
    }
}