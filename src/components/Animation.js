import Lottie from "react-lottie";

// import lottie
import tigerLott from "../images/tiger.json";
import successLott from "../images/success.json";
import mistakeLott from "../images/mistake.json";

export function Animation({ type }) {
  let animationOpts = {};
  if (type === "success") {
    animationOpts = { loop: false, animationData: successLott };
  } else if (type === "mistake") {
    animationOpts = { loop: false, animationData: mistakeLott };
  }

  const defaultOptions = {
    animationData: tigerLott,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    ...animationOpts,
  };
  return <Lottie options={defaultOptions} height={200} width={200} />;
}
