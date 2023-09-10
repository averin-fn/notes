import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NoteChange } from "./NoteChange.js";
import { firstOctave } from "../note.js";

const buttons = [
  {
    label: "1 октава",
    state: "first",
    octave: firstOctave,
  },
  {
    label: "2 октава",
    state: "second",
  },
  {
    label: "3 октава",
    state: "third",
  },
  {
    label: "4 октава",
    state: "fourth",
  },
  {
    label: "5 октава",
    state: "fivth",
  },
];

export function OctaveSelect() {
  const [notesArr, setNotesArr] = useState();
  const [state, setState] = useState("menu");

  function change(button) {
    setState(button.state);
    setNotesArr(button.octave);
  }
  return (
    <>
      {state === "menu" && (
        <div className="menu-container">
          <div className="d-grid gap-4 col-6 mx-auto">
            {buttons.map((button) => (
              <button type="button" className="btn btn-primary" onClick={() => change(button)}>{button.label}</button>
            ))}
          </div>
        </div>
      )}

      {state !== "menu" && <NoteChange notesArr={notesArr} />}
    </>
  );
}
