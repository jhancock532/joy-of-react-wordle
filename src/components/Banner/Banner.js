import React from "react";

function Banner({ type, numGuesses, answer }) {
  return (
    <div className={`${type} banner`}>
      {type === "happy" && (
        <p>
          <strong>Congratulations!</strong> You got it in{" "}
          <strong>{numGuesses}</strong> guesses!{" "}
          <span role="img" aria-label="party popper">
            🎉
          </span>
        </p>
      )}
      {type === "sad" && (
        <p>
          <strong>Sorry!</strong> You ran out of guesses. The answer was{" "}
          <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
