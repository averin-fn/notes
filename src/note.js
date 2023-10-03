// картинки нот и звуки нот
import { noteImg, noteSound } from "./imports";

export class Note {
  constructor(n, s, p) {
    this.name = n;
    this.sound = s;
    this.pict = p;
  }
}

/*первая октава */
export const firstOctave = [
  new Note("do", noteSound.do1, noteImg.nDo),
  new Note("re", noteSound.re1, noteImg.nRe),
  new Note("mi", noteSound.mi1, noteImg.nMi),
  new Note("fa", noteSound.fa1, noteImg.nFa),
  new Note("sol", noteSound.sol1, noteImg.nSol),
  new Note("la", noteSound.la1, noteImg.nLa),
  new Note("si", noteSound.si1, noteImg.nSi),
];

/*вторая октава */
export const secondOctave = [
  /*new Note("do", noteSound.do2, noteImg.nDo2),
  new Note("re", noteSound.re2, noteImg.nRe2),
  new Note("mi", noteSound.mi2, noteImg.nMi2),
  new Note("fa", noteSound.fa2, noteImg.nFa2),*/
  new Note("sol", noteSound.sol2, noteImg.nSol2),
  new Note("la", noteSound.la2, noteImg.nLa2),
  new Note("si", noteSound.si2, noteImg.nSi2),
];

/*малая октава */
export const smallOctave = [
  new Note("do", noteSound.do_1, noteImg.nDo_1),
  new Note("re", noteSound.re_1, noteImg.nRe_1),
  new Note("mi", noteSound.mi_1, noteImg.nMi_1),
  new Note("fa", noteSound.fa_1, noteImg.nFa_1),
  new Note("sol", noteSound.sol_1, noteImg.nSol_1),
  new Note("la", noteSound.la_1, noteImg.nLa_1),
  new Note("si", noteSound.si_1, noteImg.nSi_1),
];

/*большая октава */
export const bigOctave = [
  new Note("do", noteSound.do_2, noteImg.nDo_2),
  new Note("re", noteSound.re_2, noteImg.nRe_2),
  new Note("mi", noteSound.mi_2, noteImg.nMi_2),
  new Note("fa", noteSound.fa_2, noteImg.nFa_2),
  new Note("sol", noteSound.sol_2, noteImg.nSol_2),
  new Note("la", noteSound.la_2, noteImg.nLa_2),
  new Note("si", noteSound.si_2, noteImg.nSi_2),
];