import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ValuableClients = () => {
  const logos = [
    "/logo1.jpg",
    "/logo2.jpg",
    "/logo3.jpg",
    "/logo4.jpg",
    "/logo5.jpg",
    "/logo6.jpg",
    "/logo7.jpg",
    "/logo8.jpg",
  ];

  const getLogoDimensions = (width) => {
    if (width >= 1024) {
      return { width: 200, height: 300 };
    } else if (width >= 768) {
      return { width: 150, height: 225 };
    } else {
      return { width: 100, height: 150 };
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index} className="px-2">
          <Image
            src={logo}
            alt={`Logo ${index + 1}`}
            className="mx-auto "
            {...getLogoDimensions(200)}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ValuableClients;