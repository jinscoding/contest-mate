import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../banner/items/slide1.png";
import slide2 from "../banner/items/slide2.png";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='mx-auto shadow-lg mb-4 relative '>
      <Slider {...settings}>
        <div>
          <img
            src={slide1}
            alt='Slide 1'
            className='w-full h-52 object-cover'
          />
        </div>
        <div>
          <img
            src={slide2}
            alt='Slide 2'
            className='w-full h-52 object-cover'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
