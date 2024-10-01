import logo from "./logo.svg";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function Spuared({ value, setSpuared }) {
  return (
    <button className="square" onClick={setSpuared}>
      {value}
    </button>
  );
}

export default function Broad() {
  const [arrSquares, setArrSquares] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);
  // const [title, setTitle] = useState("the curent turn is : X ");
  // const [title, setTitle] = useState(
  //   "the curent turn is :  " + (XTurn ? "X" : "0")
  // );
  // let title = "the curent turn is :  " + (XTurn ? "X" : "0");

  const winner = checkForWinner(arrSquares);
  let status = "Next player: " + checkForWinner(arrSquares);
  status = XTurn ? "X" : "O"; 
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next player: " + (XTurn ? "X" : "O");
  // }
  function setSquares(i) {
    let newArrSpuared = [...arrSquares];
    if (newArrSpuared[i] || checkForWinner(arrSquares)) {
      return;
    }
    if (XTurn) {
      newArrSpuared[i] = "X";
      setXTurn(false);
    } else {
      newArrSpuared[i] = "0";
      setXTurn(true);
    }
    setArrSquares(newArrSpuared);
  }

  return (
    <>
      <h1>
        {/* {winner
          ? "Winner: " + winner
          : XTurn
          ? "It's X's turn"
          : "It's O's turn"} */}
        {status}
      </h1>
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
