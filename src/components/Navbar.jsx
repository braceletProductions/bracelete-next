import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";

import MobileNavToggle from "./MobileNavToggle";

const Navbar = () => {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetOffset = section.offsetTop - 70; // Adjust this value based on your layout if needed
      const initialOffset = window.pageYOffset;
      const distance = targetOffset - initialOffset;
      const duration = 1000; // Set the duration of scrolling

      const startTime = performance.now();

      const scroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const ease = easeInOut(progress);

        window.scrollTo(0, initialOffset + distance * ease);

        if (elapsedTime < duration) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  };

  const easeInOut = (progress) => {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  };

  return (
    <nav className="bg-white md:pl-5 md:pr-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-between">
        {/* logo */}
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-auto pl-3">
          <Link href={"/"} title="Logo">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={40}
              title="navbar logo"
            />
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <MobileNavToggle />

        {/* Nav Links (Desktop) */}
        <div className="w-full  hidden md:flex md:w-auto justify-center md:justify-start uppercase space-x-3">
          <Link
            href="/#about"
            title="About"
            scroll={false}
            onClick={() => scrollToSection("about")}
            className={`hover:text-gray-600 hover:border-2 h-[30px] w-[100px] rounded-lg border-[#C8A465] px-2 py-1 text-sm transition-all duration-300 ease-in-out ${
              router.asPath === "/#about" ? "border-2 border-[#C8A465]" : ""
            }`}
            style={{ fontFamily: "arial" }}
          >
            About us
          </Link>
          <Link
            href="/#service"
            title="Services"
            scroll={false}
            onClick={() => scrollToSection("service")}
            className={`hover:text-gray-600 hover:border-2 h-[30px] w-[100px] rounded-lg border-[#c8a465] px-2 py-1 text-sm transition-all duration-300 ease-in-out ${
              router.asPath === "/#service" ? "border-2 border-[#C8A465]" : ""
            }`}
            style={{ fontFamily: "arial" }}
          >
            Services
          </Link>
          <Link
            href={"/Gallery/gallery"}
            title="Gallery"
            className=" hover:text-gray-600 hover:border-2  h-[30px] w-[100px] rounded-lg border-[#C8A465] px-2 py-1 text-sm transition-all duration-300 ease-in-out"
            style={{ fontFamily: "arial" }}
          >
            Gallery
          </Link>

          <Link
            href="/#contact"
            title="Contact Us"
            scroll={false}
            onClick={() => scrollToSection("contact")}
            className={`hover:text-gray-600 hover:border-2 h-[30px] w-[100px] rounded-lg border-[#C8A465] px-2 py-1 text-sm transition-all duration-300 ease-in-out ${
              router.asPath === "/#contact" ? "border-2 border-[#C8A465]" : ""
            }`}
            style={{ fontFamily: "arial" }}
          >
            Contact
          </Link>
        </div>

        {/* Get a Quote Button */}
        <Link href="/Quote/getQuote" title="Get a Quote">
          <button className="hidden md:block h-[40px] w-[180px] bg-black hover:bg-[#C8A465] hover:border-2 text-white py-1 px-4 rounded-lg mt-4 md:mt-0 md:ml-10 transition-all duration-300 ease-in-out">
            Get a Quote
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
