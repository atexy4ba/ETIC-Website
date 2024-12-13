import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./animation.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}
