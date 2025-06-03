# TIC-TAC-TOE

# Tic Tac Toe

A classic two‐player Tic Tac Toe game built with HTML, CSS, and JavaScript. Players alternate placing “X” and “O” in a 3×3 grid. The first to line up three of their symbols (horizontally, vertically, or diagonally) wins; if all nine squares fill without a winner, it’s a draw. A popup appears to announce the result, and a “New Game” or “Restart” button resets the board.

---

## Table of Contents

- [Features](#features)  
- [Demo](#demo)  
- [Technologies Used](#technologies-used)  
- [Installation & Setup](#installation--setup)  
- [How to Play](#how-to-play)  
- [File Structure](#file-structure)  
- [Contributing](#contributing)  
- [License](#license)

---

## Features

- **Responsive 3×3 Grid**  
  Each cell is a button styled with CSS so it looks and feels like a game board.

- **Turn Indicator & Click Effects**  
  - Cursor changes to a pointer when hovering over a clickable cell or control button.  
  - Buttons scale slightly on click (via `:active` CSS) for visual feedback.

- **Win & Draw Detection**  
  - JavaScript checks all eight winning patterns after each move.  
  - If a player lines up three symbols, a popup announces the winner.  
  - If all nine moves are made without a winner, a “Draw” message appears.

- **Popup Overlay**  
  - A full‐screen semi‐transparent overlay displays the win/draw message and offers “New Game” and “Restart” buttons.  
  - `popup.hide { display: none; }` keeps it hidden until invoked.

- **Reset & Restart**  
  - “New Game” or “Restart” buttons re‐enable all cells, clear their contents, and hide the popup.

---

## Demo

> **Note:** Simply open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari). No server or build step is required—this is a static, front‐end–only project.

1. Click any empty square to place an “X” (first move).  
2. Next click places an “O,” and so on.  
3. Once someone wins, the overlay popup appears, declaring the winner.  
4. If all squares fill with no winner, the popup announces a draw.  
5. Click **New Game** or **Restart** to clear the board and start over.

---

## Technologies Used

- **HTML5**  
  - Semantic structure for the 3×3 grid, popup modal, and control buttons.
- **CSS3**  
  - Flexbox for the grid layout.  
  - Responsive sizing using `vmin` and `em` units.  
  - Custom styles for `.b-opt`, `#restart`, `#newgame`, and `.popup`.  
  - `:active` pseudo‐class for click feedback (scale, shadow, color changes).  
  - `.hide` utility class to toggle popup visibility (`display: none`).
- **JavaScript (ES6)**  
  - `querySelectorAll` and `querySelector` to grab board cells and popup elements.  
  - Event listeners on each `.b-opt` button to place “X” or “O,” disable itself, and run game logic.  
  - Win patterns stored in an array of index triples.  
  - Functions:
    - `checkingwin()` loops through patterns and calls `winfunction(letter)` if a match is found.  
    - `winfunction(letter)` disables all buttons, removes `.hide` from the popup, and sets `#message.innerHTML` to the winner text.  
    - `drawfunction()` triggers when move count reaches 9 without a win, showing “It’s a Draw”.  
    - `disableButtons()` and `enableButtons()` to toggle the board state.  
    - Event handlers on `#newgame` and `#restart` to reset `count`, clear cells, and hide the popup.

---

## Installation & Setup

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/your‐username/tic‐tac‐toe.git
