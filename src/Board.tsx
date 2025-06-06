import { useState } from "react";
import Square from "./components/Square/Square";
import Status from "./components/Status/Status";
import calculateWinner from "./helpers/calculateWinner";
import { Mark } from "./types/marks";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMark, setCurrentMark] = useState(Mark.X);
  const boardSize = 3;

  const handleClick = (index: number) => {
    // Prevent from overwriting existing marks
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = currentMark;
    setCurrentMark(currentMark === Mark.X ? Mark.O : Mark.X);
    setSquares(nextSquares);
  };

  return (
    <>
      <Status squares={squares} currentMark={currentMark} />
      {Array.from({ length: boardSize }).map((_, row) => {
        const rowStart = row * boardSize;
        return (
          <div className="board-row" key={row}>
            {squares
              .slice(rowStart, rowStart + boardSize)
              .map((square, index) => {
                const originalIndex = index + rowStart;
                return (
                  <Square
                    key={originalIndex}
                    value={square}
                    onClick={() => handleClick(originalIndex)}
                  />
                );
              })}
          </div>
        );
      })}
    </>
  );
}
