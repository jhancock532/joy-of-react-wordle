import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessList({ answer, guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, guessIndex) => {
        const checkedGuess = checkGuess(guess.value, answer);

        return (
          <p className="guess" key={guess.key}>
            {guess.value.split("").map((letter, index) => (
              <span
                key={index}
                className={`cell ${
                  index === guess.corruptedLetter &&
                  guessIndex < NUM_OF_GUESSES_ALLOWED - 1
                    ? "corrupted"
                    : checkedGuess[index].status
                }`}
              >
                {letter}
              </span>
            ))}
          </p>
        );
      })}
      {/* Render the empty cells for future guesses. */}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((row) => (
        <p className="guess" key={row}>
          {range(5).map((col) => (
            <span key={col} className="cell" />
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
