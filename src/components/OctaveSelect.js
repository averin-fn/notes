import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NoteChange } from "./NoteChange.js";
import { firstOctave } from "../notes";

export function OctaveSelect() {
  const [notesArr, setNotesArr] = useState();
  function change1(octave) {
    setNotesArr(octave);
  }
  return (
    <>
      <div className="container text-center cont">
        <button onClick={() => change1(firstOctave)}>1 октава</button>
        <button>2 октава</button>
        <button>малая</button>
        <button>большая</button>
        <button>все октавы</button>
      </div>
      {notesArr && <NoteChange notesArr={notesArr} />}
    </>
  );
}
