import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { buttonArr } from "../keyboard";

// import lottie components
import { Animation } from "./Animation.js";
import { resultSound } from "../imports.js";
import { Score } from "./Score";

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

  if (firstNote) {
    const keySound = new Audio(currentNote.sound);
    keySound.play();
    firstNote = false;
  }

  function onClick(currentButton) {
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

      setTimeout(() => {
        setLott();
        setScr("current");
      }, 1000);

      const soundMist = new Audio(resultSound.mist);
      soundMist.play();
    }
  }
  return (
    <div className="container text-center cont">
      <div className="row">
        <div className="col contTiger">
          <Animation type={lott} />
        </div>
        <p className="score h1">
          <Score result={scr} />
        </p>
      </div>

      <div className="row contNote justify-content-center">
          <div className="imgFrame">
            <img className="img-fluid pictNote" src={pict}></img>
          </div>
      </div>

      <div className="row">
        <div className="col contKeyb">
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
