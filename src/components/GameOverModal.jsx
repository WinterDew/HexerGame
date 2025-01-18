import React from "react";

const GameOverModal = ({ isGameOver, onClose, numTries, target}) => {
  const getMessage = () => {
    if (isGameOver === 1) {
      return {
        title: "You Win!",
        message: `Congratulations, you have guessed the color correctly`,
      };
    } else if (isGameOver === -1) {
      return {
        title: "Game Over!",
        message: `Sorry, you didn't guess the color.`,
      };
    }
    return null;
  };

  const { title, message } = getMessage() || {};

  if (!title) return null; // Don't render anything if isGameOver is not 1 or -1

  return (
    <div className={`modal ${isGameOver ? 'modal-open' : ''} modal-bottom sm:modal-middle`}>
      <div className={`modal-box bg-base-300 text-base-content`}>
        <h2 className={`text-2xl font-semibold text-center ${isGameOver == 1 ? "text-success" : "text-error"}`}>{title}</h2>
        <p className="text-lg mt-4 text-left text-wrap">{message}</p>
        {isGameOver == 1 && <p className="text-lg mt-1 text-left text-wrap">In {numTries} Attempt{numTries == 1 ? "":"s"}!</p>}
        <p className="text-lg mt-1 text-left text-wrap">The Color was: {target.toUpperCase()}</p>

        <div className="modal-action">
          <button className="btn btn-light" onClick={onClose}>
            Replay!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
