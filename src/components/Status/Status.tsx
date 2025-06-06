import styles from "./status.module.css";
import { Mark } from "../../types/marks";
import calculateWinner from "../../helpers/calculateWinner";

interface StatusProps {
  squares: (Mark | null)[];
  currentMark: Mark | null;
}

const Status = ({ squares, currentMark }: StatusProps) => {
  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (currentMark === Mark.X ? Mark.X : Mark.O);

  return <div className={styles.status}>{status}</div>;
};

export default Status;
