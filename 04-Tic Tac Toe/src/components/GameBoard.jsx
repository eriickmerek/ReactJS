
export default function GameBoard({ onSelectSquare, board }) {

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button 
                                    onClick={() => onSelectSquare(rowIndex,colIndex)}
                                    disabled={playerSymbol !== null} //Stop users from re-selecting a selected box. Var playerSymbol will contain 'X' or 'O' if it's already selected.
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}