import React, { useRef, useState } from 'react';
import Box from './Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./data.json";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Evenements = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = data.length;

  const settings = {
    className: "center",
    lazyLoad: "ondemand",
    infinite : false,
    slidesToShow: 1,
    speed: 500,
    afterChange: (index) => setCurrentSlide(index),
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className='bg-black overflow-hidden'>
      <Slider ref={sliderRef} {...settings}>
        {data && data.map((event) => (
          <div key={event.id}>
            <Box event={event} />
          </div>
        ))}
      </Slider>
      <div className='ml-10 m-5 flex lg:justify-start justify-between items-center gap-16'>
      <div className="flex justify-start gap-2">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className={`border lg:px-6 lg:py-6 px-4 py-4 rounded-full shadow-md focus:outline-none 
            ${currentSlide === 0 ? "bg-black text-white" : "bg-white text-black border-white"}`}
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className={`border lg:px-6 lg:py-6 px-4 py-4 rounded-full shadow-md focus:outline-none
            ${currentSlide === totalSlides - 1 ? "bg-black text-white" : "bg-white text-black border-white"}`}        >
          <FaArrowRightLong />
        </button>
      </div>

      <div className="lg:w-1/3 mr-5 w-2/3 lg:h-1.5 h-1 bg-[#484848] rounded-md overflow-hidden">
      <div
        className="h-full transition-all bg-white rounded-r-md"
        style={{ width: `${progress}%` }}
      ></div>
      </div>
    </div>
    </div>
  );
};

export default Evenements;