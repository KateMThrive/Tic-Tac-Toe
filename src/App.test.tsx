import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Mark } from "./types/marks";

describe("Tic-Tac-Toe Game", () => {
  test("renders game board with 9 squares", () => {
    render(<App />);
    const squareButtons = screen.getAllByTestId("square");
    expect(squareButtons).toHaveLength(9);
  });

  test("renders game title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Tic Tac Toe/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("starts with player X and alternates to player O after a move", () => {
    render(<App />);
    // Initial state should show X as next player
    expect(screen.getByText(/Next player: X/i)).toBeInTheDocument();

    // Click on the first square
    const squares = screen.getAllByTestId("square");
    fireEvent.click(squares[0]);

    // After X's move, it should be O's turn
    expect(screen.getByText(/Next player: O/i)).toBeInTheDocument();
  });

  test("marks squares with correct player symbols", () => {
    render(<App />);
    const squares = screen.getAllByTestId("square");

    // First move by player X
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe(Mark.X);

    // Second move by player O
    fireEvent.click(squares[1]);
    expect(squares[1].textContent).toBe(Mark.O);

    // Third move by player X
    fireEvent.click(squares[2]);
    expect(squares[2].textContent).toBe(Mark.X);
  });

  test("prevents overwriting an already marked square", () => {
    render(<App />);
    const squares = screen.getAllByTestId("square");

    // Mark the first square with X
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe(Mark.X);

    // Try to mark the same square with O
    fireEvent.click(squares[0]);
    // Square should still contain X
    expect(squares[0].textContent).toBe(Mark.X);
    // Next player should still be O
    expect(screen.getByText(/Next player: O/i)).toBeInTheDocument();
  });

  test("detects a winning condition for X", () => {
    render(<App />);
    const squares = screen.getAllByTestId("square");

    // Player X marks top row
    fireEvent.click(squares[0]); // X in top-left
    fireEvent.click(squares[3]); // O somewhere else
    fireEvent.click(squares[1]); // X in top-middle
    fireEvent.click(squares[4]); // O somewhere else
    fireEvent.click(squares[2]); // X in top-right (winning move)

    // Should display winner message
    expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
  });

  test("detects a winning condition for O", () => {
    render(<App />);
    const squares = screen.getAllByTestId("square");

    // Create a scenario where O wins with the middle column
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[6]); // X
    fireEvent.click(squares[7]); // O wins with middle column

    // Should display winner message
    expect(screen.getByText(/Winner: O/i)).toBeInTheDocument();
  });

  test("prevents further moves after a winner is determined", () => {
    render(<App />);
    const squares = screen.getAllByTestId("square");

    // X wins with top row
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[1]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[2]); // X wins

    // Try to make another move
    fireEvent.click(squares[5]);

    // Square should remain empty
    expect(squares[5].textContent).toBe("");

    // Winner message should still be displayed
    expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
  });

  test("can play a full game that ends in a draw", () => {
    render(<App />);
    const squares = screen.getAllByTestId("square");

    // Play moves that result in a draw
    // X | O | X
    // X | X | O
    // O | X | O
    const moveSequence = [0, 1, 2, 3, 5, 6, 4, 8, 7];

    // Execute all moves
    moveSequence.forEach((index) => {
      fireEvent.click(squares[index]);
    });

    // All squares should be filled
    squares.forEach((square) => {
      // console.log("square.textContent", square.textContent);
      expect([Mark.X, Mark.O]).toContain(square.textContent);
    });

    // No winner should be declared
    expect(screen.queryByText(/Winner:/i)).not.toBeInTheDocument();

    // Should show next player (though game is effectively over)
    expect(screen.getByText(/Next player:/i)).toBeInTheDocument();
  });
});
