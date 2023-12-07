import Image from "next/image";
import React from "react";
import bgImage from "../assets/wedding_cover.jpg";
import AboutPage from "./About/about";
import Service from "./Services/service";
import Contact from "./Contact/contact";
import ScrollButton from "@/components/ScrollButton";
import ImgMediaCard from "@/components/TestimonialCard";
import ImageCarousel from "@/components/ImageSlider";
import ValuableClients from "@/components/ValuableClients";

const Home = () => {
  return (
    <div className="relative">
      <div className="h-[700px] relative">
        <Image
          src={bgImage}
          alt="Background Image"
          title=" Bracelete Production Logo"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="absolute inset-x-0 sm:top-60 top-52 text-center text-[#C8A465] z-10">
        <h1 className="text-3xl sm:text-6xl font-black ">
          <span
            style={{
              WebkitTextStroke: "2px black",
              textStroke: "1px black",
              color: "#C8A465",
            }}
          >
            Plan Your Dream Event With Us
          </span>
        </h1>
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="service">
        <Service />
      </div>
      <div className="mt-20 ">
        <h2
          className="flex justify-center text-[#c8a465] text-3xl uppercase pb-10 font-black hover:underline transition ease-in-out"
          style={{ fontFamily: "Arial" }}
        >
          Testimonials
        </h2>
        <ImgMediaCard />
      </div>
      <div className="mt-15">
        <h2
          className="flex justify-center text-center text-[#c8a465] text-3xl uppercase pb-10 font-black hover:underline transition ease-in-out"
          style={{ fontFamily: "Arial" }}
        >
          Gallery
        </h2>
        <ImageCarousel />
      </div>
      <div className="mt-28">
        <h2
          className="flex justify-center text-center text-[#c8a465] text-3xl uppercase pb-10 font-black hover:underline transition ease-in-out"
          style={{ fontFamily: "Arial" }}
        >
          Valuable Clients
        </h2>
        <ValuableClients />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default Home;
