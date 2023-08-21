import { keys } from './imports';

class Button {
    constructor(key, value, img) {
      this.key = key;
      this.value = value;
      this.img = img;
    }
  }
  
  export const buttonArr = [
    new Button(1, "do", keys.kDo),
    new Button(2, "re", keys.kRe),
    new Button(3, "mi", keys.kMi),
    new Button(4, "fa", keys.kFa),
    new Button(5, "sol", keys.kSol),
    new Button(6, "la", keys.kLa),
    new Button(7, "si", keys.kSi),
  ];