import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const imagesData = [
    { id: 1, src: "/Gallery_2.jpeg", alt: "Image 2", title: "Gallery 1" },
    { id: 2, src: "/Gallery_3.jpeg", alt: "Image 3", title: "Gallery 2" },
    { id: 3, src: "/Gallery_4.jpeg", alt: "Image 4", title: "Gallery 3" },
    { id: 4, src: "/Gallery_5.jpeg", alt: "Image 5", title: "Gallery 4" },
    { id: 5, src: "/Gallery_7.jpeg", alt: "Image 7", title: "Gallery 5" },
    { id: 6, src: "/Gallery_8.jpeg", alt: "Image 8", title: "Gallery 6" },
    { id: 7, src: "/Gallery_9.jpeg", alt: "Image 9", title: "Gallery 7" },
    { id: 8, src: "/Gallery_10.jpeg", alt: "Image 10", title: "Gallery 8" },
    { id: 9, src: "/Gallery_11.jpeg", alt: "Image 11", title: "Gallery 9" },
    { id: 10, src: "/Gallery_12.jpeg", alt: "Image 12", title: "Gallery 10" },
    { id: 11, src: "/Gallery_13.jpeg", alt: "Image 13", title: "Gallery 11" },
    { id: 12, src: "/Gallery_14.jpeg", alt: "Image 14", title: "Gallery 12" },
    { id: 13, src: "/Gallery_15.jpeg", alt: "Image 15", title: "Gallery 13" },
    { id: 14, src: "/Gallery_16.jpeg", alt: "Image 16", title: "Gallery 14" },
    { id: 15, src: "/Gallery_17.jpeg", alt: "Image 17", title: "Gallery 15" },
    { id: 16, src: "/Gallery_18.jpeg", alt: "Image 18", title: "Gallery 16" },
    { id: 17, src: "/Gallery_19.jpeg", alt: "Image 19", title: "Gallery 17" },
    { id: 18, src: "/Gallery_1.jpeg", alt: "Image 20", title: "Gallery 18" },

    // Add more image objects as needed
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleHover = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleHoverOut = () => {
    setHoveredImage(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-2 mt-12 my-10 mx-2">
      {imagesData.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden rounded-lg w-full  max-h-[300px] sm:mx-0"
          onMouseEnter={() => handleHover(image.id)}
          onMouseLeave={handleHoverOut}
        >
          <Image
            src={image.src}
            alt={image.alt}
            title={image.title}
            height={300}
            width={300}
            className={`w-full h-full object-cover rounded-lg transition-transform duration-1000 ${
              hoveredImage === image.id ? "transform  scale-150" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
