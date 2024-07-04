import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

/////Global Functions//////
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

//Check the possible winning combinations to know whether a user won
function deriveWinner(gameBoard, players) {
  let winner = null;
  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner = players[firstSquareSymbol];
    }
  }
  
  return winner;
}

function deriveGameBoard(gameTurns){
  //Make a copy of the INITIAL_GAME_BOARD array
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  //Update the gameBoard with the users move
  for(const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard [row][col] = player; 
  }

  return gameBoard;
}
/////End Global Functions//////

function App() {
  const [ players, setPlayers] = useState(PLAYERS);
  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  //Check if we have a winner comparing the game board to the possible winning combinations
  const winner = deriveWinner(gameBoard, players);
  //Maximum number of plays is 9, if there is no winner by then we have ourselves a draw
  const hasDraw = gameTurns.length === 9 && !winner;

  /////Functions//////
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' );
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {square: {row:rowIndex, col:colIndex}, player: currentPlayer},
        ...prevTurns
      ];
      
      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  /////End Functions//////

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
          initialName={PLAYERS.X}
          symbol="X" 
          isActive={activePlayer === 'X'}
          onChangeName={handlePlayerNameChange}
        />
        <Player 
          initialName={PLAYERS.O}
          symbol="O" 
          isActive={activePlayer === 'O'}
          onChangeName={handlePlayerNameChange}
        />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch} />}
      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board={gameBoard} />
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App;
