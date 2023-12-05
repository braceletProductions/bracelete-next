import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageCarousel = () => {
  const images = [
    "/../Gallery_1.jpeg",
    "/../Gallery_2.jpeg",
    "/../Gallery_3.jpeg",
    "/../Gallery_4.jpeg",
    "/../Gallery_5.jpeg",
    "/../Gallery_7.jpeg",
    "/../Gallery_8.jpeg",
    "/../Gallery_9.jpeg",
    "/../Gallery_10.jpeg",

    // Add more image URLs here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of the transition
    slidesToShow: 3, // Show three slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full px-1 h-64 ">
            <div className="relative h-full">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="border-2 border-[#c8a456] rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
