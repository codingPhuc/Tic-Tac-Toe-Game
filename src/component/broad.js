import { checkForWinner } from "../util/gameUtil";
import Spuared from "./squared";
export default function Broad({ XTurn, arrSquares, setSquares }) {
  const winner = checkForWinner(arrSquares);

  let status = "Next player: " + winner;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XTurn ? "X" : "O");
  }

  return (
    <>
            <h1>{status}</h1>     {" "}
      <div className="board-row">
               {" "}
        <Spuared
          value={arrSquares[0]}
          setSpuared={() => setSquares(0)}
        ></Spuared>
               {" "}
        <Spuared
          value={arrSquares[1]}
          setSpuared={() => setSquares(1)}
        ></Spuared>
               {" "}
        <Spuared
          value={arrSquares[2]}
          setSpuared={() => setSquares(2)}
        ></Spuared>
             {" "}
      </div>
           {" "}
      <div className="board-row">
               {" "}
        <Spuared
          value={arrSquares[3]}
          setSpuared={() => setSquares(3)}
        ></Spuared>
               {" "}
        <Spuared
          value={arrSquares[4]}
          setSpuared={() => setSquares(4)}
        ></Spuared>
               {" "}
        <Spuared
          value={arrSquares[5]}
          setSpuared={() => setSquares(5)}
        ></Spuared>
             {" "}
      </div>
           {" "}
      <div className="board-row">
               {" "}
        <Spuared
          value={arrSquares[6]}
          setSpuared={() => setSquares(6)}
        ></Spuared>
               {" "}
        <Spuared
          value={arrSquares[7]}
          setSpuared={() => setSquares(7)}
        ></Spuared>
               {" "}
        <Spuared
          value={arrSquares[8]}
          setSpuared={() => setSquares(8)}
        ></Spuared>
             {" "}
      </div>
         {" "}
    </>
  );
}
