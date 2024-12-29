"use client";
import React from "react";
import Lottie from "react-lottie";
import animation from "./animation.json";

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-12 md:h-auto z-0">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Animation;
