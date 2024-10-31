import React from 'react';
import Box from './Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./data.json";

const Evenements = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data && data.map((event)=> (
          <div key={event.id}>
            <Box event={event}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Evenements;
