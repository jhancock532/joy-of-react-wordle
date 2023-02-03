import React from "react";

function GuessForm({
  guess,
  handleGuessChange,
  handleGuessSubmit,
  gameStatus,
}) {
  return (
    <form onSubmit={handleGuessSubmit} className="guess-input-wrapper">
      <label htmlFor="guessInput">Enter guess</label>
      <input
        type="text"
        id="guessInput"
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => handleGuessChange(event)}
        disabled={gameStatus !== "active"}
      />
    </form>
  );
}

export default GuessForm;
