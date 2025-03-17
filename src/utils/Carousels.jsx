import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Banner1 from "../assets/Banner1.webp"
import  Banner2 from "../assets/Banner2.webp"


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,    
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div >
        <img src={Banner1} alt=""  /> 
      </div>
      <div>
        <img src={Banner2} alt=""  /> 
      </div>
    </Slider>
  );
}
