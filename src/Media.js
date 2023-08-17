
import Lottie from 'react-lottie';
import tigerLott from './images/tiger.json';
import successLott from './images/success.json';
import mistakeLott from './images/mistake.json';


/*import useSound from 'use-sound';*/
import soundSucc from './audio/soundSucc.mp3';
import soundMist from './audio/soundMist.mp3';

//lottie

export function Tiger() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: tigerLott,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Lottie
      options={defaultOptions}
      height={200}
      width={200}
    />
  )
};

export function Success() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successLott,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (

    <Lottie
      options={defaultOptions}
      height={200}
      width={200}
    />
  )
};

export function Mistake() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mistakeLott,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (

    <Lottie
      options={defaultOptions}
      height={200}
      width={200}
    />
  )
};

// sounds

export function soundSuccFn() {
  const audio = new Audio(soundSucc);
  audio.loop = false;
  audio.play()
};

export function soundMistFn() {
  const audio = new Audio(soundMist);
  audio.loop = false;
  audio.play()
};


