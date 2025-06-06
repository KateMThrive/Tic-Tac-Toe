import { Mark } from "../types/marks";

const calculateWinner = (squares: (Mark | null)[]) => {
  const winningLines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningLines) {
    const mark = squares[a];
    if (mark && mark === squares[b] && mark === squares[c]) {
      return mark;
    }
  }

  return null;
};

export default calculateWinner;
