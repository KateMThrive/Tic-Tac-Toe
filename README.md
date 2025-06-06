# Tic-Tac-Toe Game

A modern implementation of the classic Tic-Tac-Toe game built with React and TypeScript.

```
+---+---+---+
| X | O | X |
+---+---+---+
| O | X | O |
+---+---+---+
| X | O |   |
+---+---+---+
```

## Overview

This project is a fully functional Tic-Tac-Toe game that allows two players to take turns marking X and O on a 3×3 grid. The game automatically detects when a player has won or when the game ends in a draw.

## Features

- Interactive 3×3 game board
- Turn-based gameplay alternating between X and O
- Automatic winner detection

## Project Structure

```
tic-tac-toe/
├── public/                # Static files
├── src/
│   ├── components/        # React components
│   │   ├── Board/         # Game board component
│   │   ├── Square/        # Individual square component
│   │   └── Status/        # Game status component
│   ├── helpers/           # Helper functions
│   │   └── calculateWinner.ts  # Logic to determine the winner
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── index.css          # Global styles
└── package.json           # Project dependencies and scripts
```

## Technology Stack

- React 19
- TypeScript 4.9
- CSS Modules for component-specific styling
- Create React App for project setup and build configuration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App configuration

## Future Enhancements

- Game history tracking with time travel feature
- Customizable player names
- Score tracking across multiple games
- Real-time multiplayer via websockets
- AI opponent with adjustable difficulty levels
- Responsive design for mobile play

## License

This project is licensed under the MIT License - see the LICENSE file for details.
