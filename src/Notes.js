// import notes images
import { noteImg, noteSound } from "./imports";

export class Note {
  constructor(n, s, p) {
    this.name = n;
    this.sound = s;
    this.pict = p;
  }
}

export const firstOctave = [
  new Note("do", noteSound.do1, noteImg.nDo),
  new Note("re", noteSound.re1, noteImg.nRe),
  new Note("mi", noteSound.mi1, noteImg.nMi),
  new Note("fa", noteSound.fa1, noteImg.nFa),
  new Note("sol", noteSound.sol1, noteImg.nSol),
  new Note("la", noteSound.la1, noteImg.nLa),
  new Note("si", noteSound.si1, noteImg.nSi),
];
