# Tic Tac Toe 🎮

A classic two‐player Tic Tac Toe game built with HTML, CSS, and JavaScript. Players alternate placing “X” and “O” in a 3×3 grid. The first to line up three of their symbols (horizontally, vertically, or diagonally) wins; if all nine squares fill without a winner, it’s a draw. A popup appears to announce the result, and a “New Game” or “Restart” button resets the board.

![Capture d’écran 2025-06-03 174942](https://github.com/user-attachments/assets/03dbbbcf-ae8b-487f-ae38-c72170f2783e)

---

## Table of Contents 📋

* [Features](#features)
* [Demo 🚀](#demo)
* [Technologies Used 💻](#technologies-used)
* [Installation & Setup ⚙️](#installation--setup)
* [How to Play 🎲](#how-to-play)
* [File Structure 📂](#file-structure)
* [Contributing 🤝](#contributing)
* [License 📄](#license)

---

## Features 🌟

* **Responsive 3×3 Grid** 🧩
  Each cell is a button styled with CSS so it looks and feels like a game board.

* **Turn Indicator & Click Effects** 🔄

  * Cursor changes to a pointer when hovering over a clickable cell or control button. 🖱️
  * Buttons scale slightly on click (via `:active` CSS) for visual feedback. ✨

* **Win & Draw Detection** 🏆

  * JavaScript checks all eight winning patterns after each move. ✅
  * If a player lines up three symbols, a popup announces the winner. 🎉
  * If all nine moves are made without a winner, a “Draw” message appears. 🤝

* **Popup Overlay** 💬

  * A full‐screen semi‐transparent overlay displays the win/draw message and offers “New Game” and “Restart” buttons.
  * `popup.hide { display: none; }` keeps it hidden until invoked.

* **Reset & Restart** 🔁

  * “New Game” or “Restart” buttons re‐enable all cells, clear their contents, and hide the popup.

---

## Demo 🚀

> **Note:** Simply open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari). No server or build step is required—this is a static, front‐end–only project.

1. Click any empty square to place an “X” (first move). ✖️
2. Next click places an “O,” and so on. ⭕
3. Once someone wins, the overlay popup appears, declaring the winner. 🥳
4. If all squares fill with no winner, the popup announces a draw. ⚖️
5. Click **New Game** or **Restart** to clear the board and start over. 🔄

---

## Technologies Used 💻

* **HTML5** 🏷️

  * Semantic structure for the 3×3 grid, popup modal, and control buttons.
* **CSS3** 🎨

  * Flexbox for the grid layout.
  * Responsive sizing using `vmin` and `em` units.
  * Custom styles for `.b-opt`, `#restart`, `#newgame`, and `.popup`.
  * `:active` pseudo‐class for click feedback (scale, shadow, color changes).
  * `.hide` utility class to toggle popup visibility (`display: none`).
* **JavaScript (ES6)** 📜

  * `querySelectorAll` and `querySelector` to grab board cells and popup elements.
  * Event listeners on each `.b-opt` button to place “X” or “O,” disable itself, and run game logic.
  * Win patterns stored in an array of index triples.
  * Functions:

    * `checkingwin()` loops through patterns and calls `winfunction(letter)` if a match is found.
    * `winfunction(letter)` disables all buttons, removes `.hide` from the popup, and sets `#message.innerHTML` to the winner text.
    * `drawfunction()` triggers when move count reaches 9 without a win, showing “It’s a Draw”.
    * `disableButtons()` and `enableButtons()` to toggle the board state.
    * Event handlers on `#newgame` and `#restart` to reset `count`, clear cells, and hide the popup.

---



## How to Play 🎲

1. **Start the game** by opening `index.html`.
2. **Player X begins** by clicking any empty square.  ✖️
3. **Player O’s turn** follows on the next click. ⭕

   * The JavaScript variable `xturn` toggles between `true` (X’s turn) and `false` (O’s turn).
   * On each click:

     ```js
     if (xturn) {
       cell.innerText = "X";
       xturn = false;
     } else {
       cell.innerText = "O";
       xturn = true;
     }
     cell.disabled = true;
     ```
4. **Move Counter**: Each click increments `count`.

   * If `count === 9` and no winner yet, `drawfunction()` is called to show “It’s a Draw.” 🤝
5. **Win Check**: After each move, `checkingwin()` loops through the `winpattern` array and compares three cell values:

   ```js
   for (let pattern of winpattern) {
     let [i1, i2, i3] = pattern;
     let e1 = button[i1].innerText;
     let e2 = button[i2].innerText;
     let e3 = button[i3].innerText;

     if (e1 !== "" && e2 !== "" && e3 !== "" && e1 === e2 && e2 === e3) {
       winfunction(e1);
       return;
     }
   }
   ```
6. **Win Function**: `winfunction(letter)` does:

   ```js
   disableButtons();               // disables all 9 cells
   message.innerHTML = `Player ${letter} wins! 🎉`;
   popup.classList.remove("hide"); // shows the overlay
   ```
7. **Restart**: When the winner popup is visible, click **New Game** or **Restart**:

   ```js
   count = 0;
   enableButtons();    // clears and re‐enables all cells
   popup.classList.add("hide");
   message.innerHTML = "simple msg"; // optional default text
   xturn = true;       // reset to X’s turn
   ```




* **index.html**

  * Contains the `<div class="wrapper">` that centers everything.
  * `<div class="container">` holds nine `<button class="b-opt">` cells.
  * `<div class="popup hide">` holds `<p id="message">` and two buttons: `#newgame` and `#restart`.
  * `<script src="index.js"></script>` at the bottom.

* **style.css**

  * Global reset and body gradient background.
  * `.b-opt` styling (size, font, box‐shadow, cursor, `:active` effect).
  * `.wrapper`, `.container` for centering and flex layout.
  * Control button styles (`#restart`, `#newgame`) with `:active` pressed effect.
  * `.popup` overlay layout and `.popup.hide { display: none; }`.

* **index.js**

  * Element queries: `document.querySelectorAll(".b-opt")`, `document.querySelector(".popup")`, `getElementById("newgame")`, `getElementById("restart")`, `getElementById("message")`.
  * Game logic: `winpattern` array, `xturn`, `count`.
  * Functions: `checkingwin()`, `winfunction(letter)`, `drawfunction()`, `disableButtons()`, `enableButtons()`.
  * Event listeners:

    * For each `.b-opt`: place X/O, disable self, increment `count`, call `checkingwin()` (or `drawfunction()` if `count === 9`).
    * `#newgame` & `#restart` to reset the board.
    * `window.onload = enableButtons` to ensure the board is clear on page load.



---




   
