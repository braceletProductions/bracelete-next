import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

const MobileNavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={toggleNav}
        className="absolute top-2 right-7 flex flex-wrap "
      >
        <svg
          className="w-6 h-6 self-center"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 h-screen w-4/5 bg-white text-black z-50">
          <div className="p-4">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={40}
                  title="navbar logo"
                  onClick={closeMenu}
                />
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/#about" title="about" onClick={closeMenu}>
                About us
              </Link>
              <Link href="/Gallery/gallery" title="gallery" onClick={closeMenu}>
                Gallery
              </Link>
              <Link href="/#service" title="service" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/#contact" title="contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
            <Link href="/Quote/getQuote" title="quote" onClick={closeMenu}>
              <button className="bg-black hover:bg-[rgb(155,117,59)] hover:border-2 text-white py-2 px-4 rounded-lg mt-4">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavToggle;
