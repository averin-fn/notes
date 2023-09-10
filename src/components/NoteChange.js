import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { buttonArr } from "../keyboard";

// import lottie components
import { Animation } from "./Animation.js";
import { resultSound } from "../imports.js";

let firstNote = true;

export function NoteChange({ notesArr }) {
  /** Функция получения индекса ноты */
  function getNoteIndex() {
    return notesArr[Math.floor(Math.random() * notesArr.length)];
  }

  const defaultNote = getNoteIndex();

  const defaultContext = {
    currentNote: defaultNote,
    lott: null,
    pict: defaultNote.pict,
    scr: 0,
    attempt: 3,
    showButton: false,
    buttonDisabled: false
  }

  const [context, setContext] = useState(defaultContext);

  if (firstNote) {
    const keySound = new Audio(context.currentNote.sound);
    keySound.play();
    firstNote = false;
  }

  function onClick(currentButton) {
    setContext({ ...context, ...{ showButton: true } });

    if (context.currentNote.name === currentButton.value) {
      setContext({ ...context, ...{ lott: 'success', scr: ++context.scr, buttonDisabled: true } });
      const soundSucc = new Audio(resultSound.succ);
      soundSucc.play();
      setTimeout(() => {
        const newCurrentNote = getNoteIndex();

        setContext({ ...context, ...{ currentNote: newCurrentNote, lott: null, pict: newCurrentNote.pict, buttonDisabled: false } });

        const keySound = new Audio(newCurrentNote.sound);
        keySound.play();
      }, 1000);
    } else {
      setContext({ ...context, ...{ lott: 'mistake', attempt: --context.attempt, buttonDisabled: true } });

      if (context.attempt > 0) {
        setTimeout(() => {
          setContext({ ...context, ...{ lott: null, buttonDisabled: false } });
        }, 1000);
      } else {
        setContext({ ...context, ...{ showButton: true } });
      }

      const soundMist = new Audio(resultSound.mist);
      soundMist.play();
    }
  }

  function restart() {
    setContext(defaultContext);
  }

  return (
    <div className="container-fluid note-container">
      <div className="row">
        <div className="col-6 score-container">
          <p className="score h3">
            Счёт: {context.scr}
          </p>
        </div>
        <div className="col-6 attempts-container">
          <p className="score h3">
            Попыток: {context.attempt}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col tiger-container">
          {!context.showButton && <Animation type={context.lott} />}
          {context.showButton && <button type="button" className="btn btn-primary" onClick={() => restart()}>еще раз?</button>}
        </div>
      </div>

      <div className="row note-img-container justify-content-center">
        <div className="imgFrame">
          <img className="img-fluid pictNote" src={context.pict} alt="img"></img>
        </div>
      </div>

      <div className="row">
        <div className="col keyboard-container justify-content-center align-self-stretch">
          {!context.showButton && buttonArr.map((button) => (
            <input
              key={button.key}
              onClick={() => onClick(button)}
              type="image"
              className="img"
              src={button.img}
              disabled={context.buttonDisabled}
              alt="button"
            ></input>
          ))}
        </div>
      </div>
    </div>
  );
}
