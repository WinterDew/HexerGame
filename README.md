
---

# Hexer: The Colour Game

### Description:
**Hexer** is a fun and engaging color-guessing game inspired by **HexCodle**, originally created by the HexCodle team. The objective of the game is to guess the correct hex color code, much like the popular word game **Wordle**, but with colors instead of words.

This project was developed for **IIIT Hyderabad Felicity 2025's DeCore Club Event**  and is my implementation using **React.js** and **Vite**. In this version, the player has 5 attempts to guess the correct 6-character hexadecimal color code, with feedback provided for each guess to indicate how close the guess is to the correct color.


### Links:
- **Felicity 2025**: [IIIT Hyderabad Felicity 2025](https://felicity.iiit.ac.in)
- **DeCore IIITH**: [Decore the Design Club IIITH](https://clubs.iiit.ac.in/clubs/decore)
---

### Technologies Used:
- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast and optimized build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern UIs.
- **DaisyUI**: A UI component library for Tailwind CSS, providing pre-built components like buttons, cards, modals, and toasts.

---

### Game Mechanics:

1. **Starting the Game**: When the game begins, a random 6-character hex color code is generated, which the player must guess.
2. **Making a Guess**: The player enters a guess in the form of a hex color code (e.g., `#ABCD12`).
3. **Feedback**: After each guess, feedback is provided:
   - Correct color code: The game ends with a win.
   - If the guess is incorrect, the game continues, and the player can try again.
   - Feedback for each character in the guess is provided to indicate how close it is to the target color.
4. **Game Over**: If the player runs out of attempts without guessing the correct color, they lose the game.



### Acknowledgments:
- Thanks to the original creators of **[HexCodle](https://hexcodle.com/)** for inspiring this project.

- The UI components and responsiveness were made easy with **DaisyUI** and **TailwindCSS**.


