import Square from "./components/square";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={handleClick} />
        <Square value={squares[1]} onClick={handleClick} />
        <Square value={squares[2]} onClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={handleClick} />
        <Square value={squares[4]} onClick={handleClick} />
        <Square value={squares[5]} onClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={handleClick} />
        <Square value={squares[7]} onClick={handleClick} />
        <Square value={squares[8]} onClick={handleClick} />
      </div>
    </>
  );
}
