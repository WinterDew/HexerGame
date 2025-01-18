import React from "react";
import ColorChip from "./colorChip";
import HexInput from "./HexInput";  // Import HexInput

export default function ColorPanel({ color1, color2, updateGuess, guessesLeft}) {
  return (
    <div className="card bg-base-100 w-[95%] md:w-[80%] shadow-xl flex flex-col items-center p-4 my-10">
      {/* Color Chips Section */}
      <div className="flex flex-row justify-center gap-4 items-center mb-4">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">TARGET</h3>
          <ColorChip color={color1} label="Target" />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">YOUR GUESS</h3>
          <ColorChip color={color2} label="Your Guess" />
        </div>
      </div>

      {/* HexInput Section */}
      <div className="max-w-96 w-full mt-4"> {/* Margin Top for spacing */}
        <HexInput
          updateGuess={updateGuess}
        />
      </div>
      <p className="mt-1 rounded-md bg-base-200 px-3 py-2">Guesses Left: {guessesLeft}</p>
    </div>
  );
}
