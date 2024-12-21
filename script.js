let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
});

function handleCellClick(index) {
    if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById(`cell-${index}`).textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            document.getElementById("winner-message").textContent = `${gameBoard[a]} Wins!`;
            return;
        }
    }

    if (!gameBoard.includes("")) {
        gameActive = false;
        document.getElementById("winner-message").textContent = "It's a draw!";
    }
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("winner-message").textContent = "";
}
