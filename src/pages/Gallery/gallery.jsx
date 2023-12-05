import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const imagesData = [
    { id: 1, src: "/Gallery_2.jpeg", alt: "Image 2" },
    { id: 2, src: "/Gallery_3.jpeg", alt: "Image 3" },
    { id: 3, src: "/Gallery_4.jpeg", alt: "Image 4" },
    { id: 4, src: "/Gallery_5.jpeg", alt: "Image 5" },
    { id: 5, src: "/Gallery_7.jpeg", alt: "Image 7" },
    { id: 6, src: "/Gallery_8.jpeg", alt: "Image 8" },
    { id: 7, src: "/Gallery_9.jpeg", alt: "Image 9" },
    { id: 8, src: "/Gallery_10.jpeg", alt: "Image 10" },
    { id: 9, src: "/Gallery_11.jpeg", alt: "Image 11" },
    { id: 10, src: "/Gallery_12.jpeg", alt: "Image 12" },
    { id: 11, src: "/Gallery_13.jpeg", alt: "Image 13" },
    { id: 12, src: "/Gallery_14.jpeg", alt: "Image 14" },
    { id: 13, src: "/Gallery_15.jpeg", alt: "Image 15" },
    { id: 14, src: "/Gallery_16.jpeg", alt: "Image 16" },
    { id: 15, src: "/Gallery_17.jpeg", alt: "Image 17" },
    { id: 16, src: "/Gallery_18.jpeg", alt: "Image 18" },
    { id: 17, src: "/Gallery_19.jpeg", alt: "Image 19" },
    { id: 18, src: "/Gallery_1.jpeg", alt: "Image 20" },

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-x-2 sm:gap-y-4  gap-y-2 my-10 sm:mx-10  xl:mx-10  xl:gap-x-0  w-full">
      {imagesData.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden rounded-lg w-full max-w-[350px] max-h-[300px] mx-auto"
          onMouseEnter={() => handleHover(image.id)}
          onMouseLeave={handleHoverOut}
        >
          <Image
            src={image.src}
            alt={image.alt}
            title="gallery_image"
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
