import React, { useState } from "react";
import Board from "./Components/Board";
import Message from "./Components/Message";
import { calculateWinner } from "./helpers";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner ? ` Winner is ${winner}` : `Next player is ${isXnext?'X': 'O'}` 
  const handlePlayAgain = () =>{
    setBoard(Array(9).fill(null));
  }
  const handleSquareClick = (position) => {
    
    if (board[position] || winner ) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? "X" : "O";
        }
        return square;
      });
    });

    setIsXnext((prev) => !prev);
  };
  return (
    <div className="flex flex-col min-h-screen justify-around items-center">
      <div>
        <h1 className="text-4xl font-bold mb-8">Tic - Tac - Toe</h1>
       <Message winner={winner} isXnext={isXnext}/>
      </div>
      <Board isXnext={isXnext} board={board} handleClick={handleSquareClick} />
      <button onClick={handlePlayAgain}  className="bg-blue-600 text-white px-4 rounded-md py-2">
        Next Game
      </button>
      <footer className="font-thin text-gray-800">
        Made with ❤ by Adarsh Patel
      </footer>
    </div>
  );
}

export default App;
