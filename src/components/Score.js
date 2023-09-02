import { game } from "../game.js";

export function Score({ result }) {
  let score = 0;

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
        game.restart();
      }
      break;
  }

  console.log(game.attempt);

  return <>{score}</>;
}
