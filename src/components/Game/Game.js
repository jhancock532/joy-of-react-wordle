import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("active");
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  function handleGuessChange(event) {
    if (event.target.value.length <= 5) {
      setGuess(event.target.value.toUpperCase());
    }
  }

  function handleGuessSubmit(event) {
    event.preventDefault();

    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const nextGuess = {
      value: guess, // This is the same as event.target.guessInput.value!
      key: crypto.randomUUID(),
      corruptedLetter: Math.floor(Math.random() * 5),
    };

    console.log(nextGuess);

    const nextGuessList = [...guessList, nextGuess];
    setGuessList(nextGuessList);
    setGuess("");

    if (guess === answer) {
      setGameStatus("won");
    }

    if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <div>
      {gameStatus !== "active" && (
        <Banner
          type={gameStatus === "won" ? "happy" : "sad"}
          numGuesses={guessList.length}
          answer={answer}
        />
      )}
      <GuessList answer={answer} guesses={guessList} />
      <GuessForm
        guess={guess}
        gameStatus={gameStatus}
        handleGuessChange={handleGuessChange}
        handleGuessSubmit={handleGuessSubmit}
      />
    </div>
  );
}

export default Game;
