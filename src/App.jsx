import { useState } from "react";
import generateRandomColor from "./services/generateRandomColor";
import ColorPanel from "./components/ColorsPanel";
import ShowTries from "./components/ShowTries";
import HexInput from "./components/HexInput";
import calculateColorStats from "./services/calculateColorStats";
import { ToastProvider, useToast } from "./components/Toast";
import GameOverModal from "./components/GameOverModal";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  // States
  const [currentGuess, setCurrentGuess] = useState("");
  const [target, setTarget] = useState(generateRandomColor());
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, setIsGameOver] = useState(0); // 0 no, 1 won, -1 lost.
  const maxTries = 5;
  function resetGame(){
    setCurrentGuess("");
    setTarget(generateRandomColor());
    setGuesses([]);
    setIsGameOver(0);
  }

  // console.log(target);

  function handleNewGuess(value){
    setCurrentGuess(value);
    const [done, stats] = calculateColorStats(target, value);
    setGuesses(
      [{try: value, stats: stats}, ...guesses]
    );
    if(done == 1){
      setIsGameOver(1);
    }
    if(guesses.length >= maxTries - 1 && done == 0){
      setIsGameOver(-1);
    }
  }

  return (
    <ToastProvider>
      <div className="bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[length:20px_20px] min-h-screen w-full flex flex-col items-center justify-start bg-base-300" data-theme="nord">
        <NavBar />
        <ColorPanel
            color1={target}
            color2={currentGuess == "" ? "#FFFFFF" : "#" + currentGuess}
            updateGuess={handleNewGuess}
            guessesLeft={maxTries - guesses.length}
        />
        <ShowTries tries={guesses}></ShowTries>
        <GameOverModal isGameOver={isGameOver} onClose={() => resetGame()} numTries={guesses.length} target={target} />
      </div>
      <Footer />
    </ToastProvider>
  );
}
