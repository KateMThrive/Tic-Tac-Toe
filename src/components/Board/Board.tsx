import calculateWinner from "../../helpers/calculateWinner";
import { Mark } from "../../types/marks";
import Square from "../Square/Square";
import Status from "../Status/Status";
import styles from "./board.module.css";

interface BoardProps {
  squares: (Mark | null)[];
  currentMark: Mark | null;
  onPlay: (nextSquares: (Mark | null)[]) => void;
}

const Board = ({ squares, currentMark, onPlay }: BoardProps) => {
  const boardSize = 3;

  const handleClick = (index: number) => {
    // Prevent from overwriting existing marks
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = currentMark;
    onPlay(nextSquares);
  };

  return (
    <>
      <Status squares={squares} currentMark={currentMark} />
      {Array.from({ length: boardSize }).map((_, row) => {
        const rowStart = row * boardSize;
        return (
          <div className={styles.boardRow} key={row}>
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
};

export default Board;
