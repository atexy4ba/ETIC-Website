import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./animation.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false, isClient: false };
  }

  componentDidMount() {
    this.setState({ isClient: true });
  }

  render() {
    if (!this.state.isClient) return null;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="h-12 md:h-auto z-0">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}
