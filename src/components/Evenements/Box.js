/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Box = ({ event }) => {
  return (
    <div
      className="m-10 p-6 lg:p-10 rounded-xl shadow-md flex flex-col lg:flex-row"
      style={{ backgroundColor: event.color }}
    >
      {/* Image first on mobile, second on larger screens */}
      <div className="flex-grow relative order-1 lg:order-2 mb-6 lg:mb-0">
        <img
          src={event.img}
          className="rounded-3xl w-full h-auto"
          alt={event.title}
        />
        {/* Overlay title on the image in mobile view */}
        <h1 className="font-satoshi font-bold text-2xl text-white absolute bottom-10 left-5 right-5 text-center lg:hidden">
          {event.title}
        </h1>
        <p className="font-satoshi font-normal text-sm text-white absolute bottom-5 left-5 right-5 text-center lg:hidden">
          {event.themes}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 order-2 lg:order-1 gap-4 text-center">
        <div>
          <h1 className="font-satoshi font-bold text-5xl text-[#212121] mb-6 hidden lg:block">
            {event.title}
          </h1>
          <p className="font-satoshi text-sm font-normal md:text-base leading-relaxed md:leading-relaxed text-pretty mb-5 lg:mb-0 text-[#212121] lg:px-12">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
