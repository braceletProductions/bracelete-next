import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="flex flex-col bg-cover bg-center bg-no-repeat bg-footer-pattern py-8 px-4 md:flex-row bg-black text-white">
//       <div className="text-sm md:text-base mb-2 md:mb-0 items-start justify-start">
//         <span className="text-gray-300">
//           Bracelet Productions, Unit of Drift of Thread
//         </span>
//       </div>
//       <div className="flex-1 flex justify-center md:justify-center  text-sm sm:mx-16">
//         <span className="text-gray-300 text-c">
//           &nbsp; Copyright © 2023 &nbsp; | &nbsp; Bracelet Productions
//         </span>
//       </div>
//       <div className="flex-1 flex justify-center md:justify-end  text-xl sm:mx-16">
//         <Link
//           href="#"
//           className="text-gray-300 hover:text-[#b29c2dec] mx-2"
//           title="Facebook"
//         >
//           <FaFacebook />
//         </Link>
//         <Link
//           href="#"
//           className="text-gray-300 hover:text-[#b29c2dec] mx-2"
//           title="Instagram"
//         >
//           <FaInstagram />
//         </Link>
//         <Link
//           href="#"
//           className="text-gray-300 hover:text-[#b29c2dec] mx-2"
//           title="LinkedIn"
//         >
//           <FaLinkedin />
//         </Link>
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2  ">
      <div className=" sm:flex  flex-col sm:flex-row justify-between items-center mx-4 lg:mx-auto ">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <p className="text-white">
            Bracelet Productions, Unit of Drift of Thread
          </p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <p className="text-white">
            &nbsp; Copyright &copy; 2023 &nbsp; | &nbsp; Bracelet Productions
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end  text-xl sm:mx-16">
          <Link
            href="#"
            className="text-gray-300 hover:text-[#b29c2dec] mx-2"
            title="Facebook"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-[#b29c2dec] mx-2"
            title="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-[#b29c2dec] mx-2"
            title="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
