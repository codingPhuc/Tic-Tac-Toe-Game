import { checkForWinner } from "../util/gameUtil";
import { useState } from "react";
import Broad from "./Broad";
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [gameMove, setMove] = useState(history.length - 1);

  const XTurn = gameMove % 2 === 0;

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

    setMove(currentHistory.length - 1); // SetCurrentSquares(newArrSpuared);
  }

  function jumpTo(nextMove) {
    setMove(nextMove); // setXTurn(nextMove % 2 === 0);
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
         {" "}
      </li>
    );
  });

  return (
    <div className="broad-container">
           {" "}
      <div>
                       {" "}
        <Broad
          XTurn={XTurn}
          arrSquares={currentSquares}
          setSquares={setSquares}
        ></Broad>
             {" "}
      </div>{" "}
           {" "}
      <div>
                <ol>{moves}</ol>     {" "}
      </div>
         {" "}
    </div>
  );
}
