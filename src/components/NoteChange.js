import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { buttonArr } from "../keyboard";

// import lottie components
import { Animation } from "./Animation.js";
import { resultSound } from "../imports.js";

let firstNote = true;
export function NoteChange({ notesArr }) {
  const [currentNote, setCurrentNote] = useState(
    notesArr[Math.floor(Math.random() * notesArr.length)]
  );
  const [lott, setLott] = useState();
  const [pict, setPict] = useState(currentNote.pict);

  if (firstNote) {
    const keySound = new Audio(currentNote.sound);
    keySound.play();
    firstNote = false;
  }

  function onClick(currentButton) {
    if (currentNote.name === currentButton.value) {
      setLott("success");
      const soundSucc = new Audio(resultSound.succ);
      soundSucc.play();
      setTimeout(() => {
        const newCurrentNote =
          notesArr[Math.floor(Math.random() * notesArr.length)];
        setCurrentNote(newCurrentNote);
        setLott();
        setPict(newCurrentNote.pict);
        const keySound = new Audio(newCurrentNote.sound);
        keySound.play();
      }, 1500);
    } else {
      setLott("mistake");
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
      </div>

      <div className="row contNote">
        <div className="col">
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