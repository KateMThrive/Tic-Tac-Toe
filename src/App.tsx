import { useState } from "react";
import Board from "./components/Board/Board";
import { Mark } from "./types/marks";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const squares = history[history.length - 1];
  const [currentMark, setCurrentMark] = useState(Mark.X);

  const onPlay = (nextSquares: (Mark | null)[]) => {
    setCurrentMark(currentMark === Mark.X ? Mark.O : Mark.X);
    const nextHistory = [...history, nextSquares];
    setHistory(nextHistory);
  };

  return (
    <>
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <main className="game">
        <div className="game-field">
          <Board squares={squares} currentMark={currentMark} onPlay={onPlay} />
        </div>
        <div className="game-info">
          <ol>Some info</ol>
        </div>
      </main>
    </>
  );
}
