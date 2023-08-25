import { useState } from "react";
import { game } from "../game.js";
import { ButtonRestart } from "./ButtonRestart.js";

let score = 0;
let button = <ButtonRestart />;

export function Score({ result }) {

console.log(game.attempt);
    if (result === "success") {
        game.score++;
        score = game.score;
    }
    else if (game.attempt <= 0) {
    score = button;
    game.bestResult = game.score;
    game.attempt = 3;
    game.score = 0;
    }
    else if (result === "current") {
        score = game.score;
    }
    else if (result === "mistake" && game.attempt >= 0){
        score = "mistake";
        --game.attempt;
        }

    return (
        <p>{score}</p>
    );
};
   




