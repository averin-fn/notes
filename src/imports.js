// картинки нот
import nDo from "./images/do.svg";
import nRe from "./images/re.svg";
import nMi from "./images/mi.svg";
import nFa from "./images/fa.svg";
import nSol from "./images/sol.svg";
import nLa from "./images/la.svg";
import nSi from "./images/si.svg";

//звуки нот
import do1 from "./audio/notes/do1.wav";
import re1 from "./audio/notes/re1.wav";
import mi1 from "./audio/notes/mi1.wav";
import fa1 from "./audio/notes/fa1.wav";
import sol1 from "./audio/notes/sol1.wav";
import la1 from "./audio/notes/la1.wav";
import si1 from "./audio/notes/si1.mp3";

// картинки клавиш
import kDo from "./images/keyboard/do.svg";
import kRe from "./images/keyboard/re.svg";
import kMi from "./images/keyboard/mi.svg";
import kFa from "./images/keyboard/fa.svg";
import kSol from "./images/keyboard/sol.svg";
import kLa from "./images/keyboard/la.svg";
import kSi from "./images/keyboard/si.svg";

// звуки попадания и ошибки
import succ from "./audio/soundSucc.mp3";
import mist from "./audio/soundMist.mp3";

/*картинки нот*/
export const noteImg = { nDo, nRe, nMi, nFa, nSol, nLa, nSi };

/*звуки нот*/
export const noteSound = { do1, re1, mi1, fa1, sol1, la1, si1 };

/*картиник клавиш*/
export const keys = { kDo, kRe, kMi, kFa, kSol, kLa, kSi };

/*звуки попадания и ошибки*/
export const resultSound = { succ, mist };