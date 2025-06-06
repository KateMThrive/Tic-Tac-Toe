import styles from "./square.module.css";

interface SquareProps {
  value: string;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button className={styles.square} data-testid="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
