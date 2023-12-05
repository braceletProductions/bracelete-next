import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setVisible] = useState(false);

  // function to handle scrooling and show/hide the button

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // add an event listenre for scroll

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className=" z-50 fixed bottom-4 right-4 p-2 bg-[#C8A465]  border-2  border-gray-800 text-black  rounded-full  hover:bg-[#e9cc9a] hover:text-white  active:scale-95"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
