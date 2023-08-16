
import './App.css';
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css'

// import notes images
import nDo from './images/do.svg';
import nRe from './images/re.svg';
import nMi from './images/mi.svg';
import nFa from './images/fa.svg';
import nSol from './images/sol.svg';
import nLa from './images/la.svg';
import nSi from './images/si.svg';

// import keys images
import kDo from './images/keyboard/do.svg';
import kRe from './images/keyboard/re.svg';
import kMi from './images/keyboard/mi.svg';
import kFa from './images/keyboard/fa.svg';
import kSol from './images/keyboard/sol.svg';
import kLa from './images/keyboard/la.svg';
import kSi from './images/keyboard/si.svg';

//import notes sounds 
import do1 from './audio/notes/do1.wav';
import re1 from './audio/notes/re1.wav';
import mi1 from './audio/notes/mi1.wav';
import fa1 from './audio/notes/fa1.wav';
import sol1 from './audio/notes/sol1.wav';
import la1 from './audio/notes/la1.wav';
import si1 from './audio/notes/si1.mp3';


// import lottie components
import { Tiger } from './Media.js';
import { Success } from './Media.js';
import { Mistake } from './Media.js';

// import sounds components
import { SoundSucc } from './Media.js';
import { SoundMist } from './Media.js';
import { SoundNote } from './Media.js';

class Note {
  constructor(n, s, p) {
    this.name = n;
    this.sound = s;
    this.pict = p;
  }
};

const notesArr = [
  new Note("do", SoundNote(do1), nDo),
  new Note("re", SoundNote(re1), nRe),
  new Note("mi", SoundNote(mi1), nMi),
  new Note("fa", SoundNote(fa1), nFa),
  new Note("sol", SoundNote(sol1), nSol),
  new Note("la", SoundNote(la1), nLa),
  new Note("si", SoundNote(si1), nSi)
];


class Button {
  constructor(key, value, img) {
    this.key = key;
    this.value = value;
    this.img = img;
  }
};

const buttonArr = [
  new Button(1, "do", kDo),
  new Button(2, "re", kRe),
  new Button(3, "mi", kMi),
  new Button(4, "fa", kFa),
  new Button(5, "sol", kSol),
  new Button(6, "la", kLa),
  new Button(7, "si", kSi)
];

let currentNote = notesArr[Math.floor(Math.random() * (notesArr.length))];


function NoteChange() {

  const [lott, setLott] = useState(Tiger);
  const [pict, setPict] = useState(currentNote.pict);
  const [sound, setSound] = useState();
  const [noteSound, setNoteSound] = useState(currentNote.sound);

  function onClick(currentButton) {
    if (currentNote.name === currentButton.value) {
      setLott(Success);
      setSound(SoundSucc);
      setTimeout(() => {
        currentNote =
          notesArr[Math.floor(Math.random() * (notesArr.length))];
        setLott(Tiger);
        setPict(currentNote.pict);
        setNoteSound(currentNote.sound);
      }, 1500);
    } else {
      setLott(Mistake);
      setSound(SoundMist);
    }
  };

  return (
    <div className="container text-center cont">
      <div className='row'>
        {noteSound}
        <div className="col contTiger">
          {lott}
        </div>
      </div>

      <div className="row contNote">
        <div className="col">
          <img className='img-fluid pictNote' src={pict}></img>
        </div>
      </div>

      <div className='row'>
        <div className='col contKeyb'>
          {buttonArr.map(button => <input key={button.key} onClick={() => onClick(button, sound)} type="image" className='img' src={button.img}></input>)}
        </div>
      </div>

    </div>
  );
};

export default NoteChange;



/*
import "./App.css";
import { useState } from "react";

class Note {
  constructor(n, d) {
    this.name = n;
    this.desc = d;
  }
}

const notesArr = [
  new Note("do", "this is do"),
  new Note("re", "this is re"),
  new Note("mi", "this is mi"),
];

let currentNote = notesArr[Math.floor(Math.random() * (notesArr.length))];

function App() {
  const [text, setText] = useState(currentNote.name);
  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => {
          setText(currentNote.desc);
          setTimeout(() => {
            currentNote =
              notesArr[Math.floor(Math.random() * (notesArr.length))];
            setText(currentNote.name);
          }, 2000);
        }}
      >
        click
      </button>
    </div>
  );
}

// const opts = [
//   {
//     id: 1,
//     func: () => {},
//   },
// ];

// function App() {
//   const [value, setValue] = useState("empty");

//   function changeName(event) {
//     const selected = opts.find(o => o.id === event.target.value);
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <select value={value} onChange={changeName}>
//         <option value="empty">0</option>
//         <option value="1">1</option>
//         <option>2</option>
//         <option>3</option>
//       </select>
//       <p>{value}</p>
//     </div>
//   );
// }

/*function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {number}
      <Comp arg1={1} arg2={2} onChange={() => setNumber(number + 1)} />
    </div>
  );
}

function Comp({ arg1, arg2, onChange }) {
  return (
    <div>
      <button onClick={() => onChange()}>click me</button>
    </div>
  );
}

const number = 0;

export default App;
*/ 