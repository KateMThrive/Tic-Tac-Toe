interface SquareProps {
  value: string;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" data-testid="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
