import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { game } from "../game.js";

import { buttonArr } from "../keyboard";

// import lottie components
import { Animation } from "./Animation.js";
import { resultSound } from "../imports.js";
import { Score } from "./Score";
import { ButtonRestart } from "./ButtonRestart";

let firstNote = true;

export function NoteChange({ notesArr }) {
  /** Функция получения индекса ноты */
  function getNoteIndex() {
    return notesArr[Math.floor(Math.random() * notesArr.length)];
  }

  const [currentNote, setCurrentNote] = useState(getNoteIndex());
  const [lott, setLott] = useState();
  const [pict, setPict] = useState(currentNote.pict);
  const [scr, setScr] = useState(0);
  const [showButton, setShowButton] = useState(false);

  if (firstNote) {
    const keySound = new Audio(currentNote.sound);
    keySound.play();
    firstNote = false;
  }

  function onClick(currentButton) {
    setShowButton(false);

    if (currentNote.name === currentButton.value) {
      setLott("success");
      setScr("success");
      const soundSucc = new Audio(resultSound.succ);
      soundSucc.play();
      setTimeout(() => {
        const newCurrentNote = getNoteIndex();
        setCurrentNote(newCurrentNote);
        setLott();
        setScr("current");
        setPict(newCurrentNote.pict);
        const keySound = new Audio(newCurrentNote.sound);
        keySound.play();
      }, 1000);
    } else {
      setLott("mistake");
      setScr("mistake");

      if (game.attempt > 1) {
        setTimeout(() => {
          setLott();
          setScr("current");
        }, 1000);
      } else {
        setShowButton(true);
      }

      const soundMist = new Audio(resultSound.mist);
      soundMist.play();
    }
  }
  return (
    <div className="container-fluid note-container">
      <div className="row">
        <div className="col-6 score-container">
          <p className="score h3">
            Счёт: <Score result={scr} />
          </p>
        </div>
        <div className="col-6 attempts-container">
          <p className="score h3">
            Попыток: { game.attempt }
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col tiger-container">
          {!showButton && <Animation type={lott} /> }
          {showButton && <ButtonRestart />}
        </div>
      </div>

      <div className="row note-img-container justify-content-center">
        <div className="imgFrame">
          <img className="img-fluid pictNote" src={pict}></img>
        </div>
      </div>

      <div className="row">
        <div className="col keyboard-container justify-content-center align-self-stretch">
          {buttonArr.map((button) => (
            <input
              key={button.key}
              onClick={() => onClick(button)}
              type="image"
              className="img"
              src={button.img}
            ></input>
          ))}
        </div>
      </div>
    </div>
  );
}
