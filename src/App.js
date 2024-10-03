
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";
import { useDebugValue, useState } from "react";
import { current } from "@reduxjs/toolkit";

function Spuared({ value, setSpuared }) {
  return (
    <button className="square" onClick={setSpuared}>
      {value}
    </button>
  );
}

function Broad({ XTurn, arrSquares, setSquares }) {
  // const [arrSquares, setArrSquares] = useState(Array(9).fill(null));
  // const [XTurn, setXTurn] = useState(true);

  const winner = checkForWinner(arrSquares);
  let status = "Next player: " + checkForWinner(arrSquares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XTurn ? "X" : "O");
  }

  return (
    <>
      <h1>{status}</h1>
      <div className="board-row">
        <Spuared
          value={arrSquares[0]}
          setSpuared={() => setSquares(0)}
        ></Spuared>
        <Spuared
          value={arrSquares[1]}
          setSpuared={() => setSquares(1)}
        ></Spuared>
        <Spuared
          value={arrSquares[2]}
          setSpuared={() => setSquares(2)}
        ></Spuared>
      </div>
      <div className="board-row">
        <Spuared
          value={arrSquares[3]}
          setSpuared={() => setSquares(3)}
        ></Spuared>
        <Spuared
          value={arrSquares[4]}
          setSpuared={() => setSquares(4)}
        ></Spuared>
        <Spuared
          value={arrSquares[5]}
          setSpuared={() => setSquares(5)}
        ></Spuared>
      </div>
      <div className="board-row">
        <Spuared
          value={arrSquares[6]}
          setSpuared={() => setSquares(6)}
        ></Spuared>
        <Spuared
          value={arrSquares[7]}
          setSpuared={() => setSquares(7)}
        ></Spuared>
        <Spuared
          value={arrSquares[8]}
          setSpuared={() => setSquares(8)}
        ></Spuared>
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [XTurn, setXTurn] = useState(true);
  const [gameMove, setMove] = useState(history.length - 1);
  const XTurn = gameMove % 2 == 0;
  const currentSquares = history[gameMove];
  function setSquares(i) {
    let newArrSpuared = [...currentSquares];
    if (newArrSpuared[i] || checkForWinner(currentSquares)) {
      return;
    }
    if (XTurn) {
      newArrSpuared[i] = "X";
    } else {
      newArrSpuared[i] = "0";
    }
    const currentHistory = [...history.slice(0, gameMove + 1), newArrSpuared];
    setHistory(currentHistory);
    setMove(currentHistory.length - 1);
    // SetCurrentSquares(newArrSpuared);
  }
  function jumpTo(nextMove) {
    setMove(nextMove);
    // setXTurn(nextMove % 2 === 0);
  }
  const moves = history.map((Spuare, move) => {
    let description;
    if (move > 0) {
      description = "we are at the " + move + " move";
    } else {
      description = "reset game move ";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}> {description} </button>
      </li>
    );
  });
  return (
    <div className="broad-container">
      <div>
        {" "}
        <Broad
          XTurn={XTurn}
          arrSquares={currentSquares}
          setSquares={setSquares}
        ></Broad>
      </div>{" "}
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function checkForWinner(arrSquares) {
  const winningCombinations = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (let win of winningCombinations) {
    if (
      arrSquares[win[0]] !== null &&
      arrSquares[win[0]] === arrSquares[win[1]] &&
      arrSquares[win[1]] === arrSquares[win[2]]
    ) {
      return arrSquares[win[0]];
    }
  }
  return false;
}
// Spuared Component: Renders a button representing a square in the game.
// Broad Component: Renders the game board and handles the display of the game status.
// Game Component: Manages the game state, history, and rendering of the board and move list.
// checkForWinner Function: Determines if there is a winner based on the current state of the board.