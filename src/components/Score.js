import { game } from "../game.js";
import { ButtonRestart } from "./ButtonRestart.js";

export function Score({ result }) {
  let score = 0;
  let showButton = false;

  switch (result) {
    case "success":
      score = ++game.score;
      break;

    case "current":
      score = game.score;
      break;

    case "mistake":
      score = "mistake";
      if (--game.attempt <= 0) {
        showButton = true;
        game.restart();
      }
      break;
  }

  console.log(game.attempt);
  
  return (
    <>
      <p>{score}</p>
      {showButton && <ButtonRestart />}
    </>
  );
}
