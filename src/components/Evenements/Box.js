import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Box = ({event}) => {
  return (
    <div
      className="m-10 p-6 lg:p-10 rounded-xl shadow-md flex flex-col lg:flex-row"
      style={{ backgroundColor: event.color }}
    >
      {/* Image first on mobile, second on larger screens */}
      <div className="flex-grow relative order-1 lg:order-2 mb-6 lg:mb-0">
        <img
          src={event.img}
          className="rounded-3xl w-full h-full"
          alt={event.title}
        />
        {/* Overlay title on the image in mobile view */}
        <div className="absolute inset-0 flex flex-col justify-end items-start ml-4 mb-4 lg:hidden">
          <h1 className="font-satoshi font-bold text-sm sm:text-2xl text-white">
            {event.title}
          </h1>
          <p className="font-satoshi text-xs sm:text-sm text-white">
            {event.themes}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start w-full lg:w-1/2 order-2 lg:order-1">
        <div className="px-7 py-2 rounded-3xl text-lg font-normal font-satoshi text-white bg-[#212121] mb-10 hidden lg:block">
          Evénements
        </div>
        <div>
          <h1 className="font-satoshi font-bold text-5xl text-[#212121] mb-2 hidden lg:block">
            {event.title}
          </h1>
          <p className="font-satoshi text-base font-normal lg:text-xl leading-6 lg:leading-10 mb-5 lg:mb-0 text-[#212121] lg:pr-12">
            {event.description}
          </p>
        </div>
        <div className='w-full flex justify-end lg:justify-normal'>
        <button className="px-7 py-2 font-satoshi font-medium text-sm sm:text-lg rounded-3xl flex items-center gap-3 text-white bg-[#212121]">
          En savoir plus
          <FaArrowRightLong />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
