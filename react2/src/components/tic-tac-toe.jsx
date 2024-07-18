import useTicTacToe from "../hooks/use-tic-tac-toe";

function TicTacToe() {
  const { board, calculateWinner, getStatusMessage, handleClick, resetGame } =
    useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              disabled={b !== null}
              onClick={() => handleClick(index)}
              className="cell"
              key={index}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
