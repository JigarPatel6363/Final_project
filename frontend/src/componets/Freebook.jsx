
import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"; // Ensure this path is correct based on your project structure.
import Cards from './cards';

function Freebook() {
  // Filter data for "free" category
  const filterdata = list.filter((data) => data.category === "free");

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          maiores cumque itaque tempore, rem doloribus, delectus suscipit
          placeat beatae ea quam reprehenderit ex recusandae tempora quas
          laborum earum eveniet labore!
        </p>
      </div>

      {/* Slider Component */}
      <div className="mt-4">
        <Slider {...settings}>
          {filterdata.map((item) => (
            <Cards item={item} key ={item.id} />
          
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
