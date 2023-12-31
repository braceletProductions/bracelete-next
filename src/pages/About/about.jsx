// about.js

import React from "react";
import Image from "next/image";
import rightImage from "../../assets/about_us.jpg";
import leftImage from "../../assets/whyChoose.jpg";

const AboutPage = () => {
  return (
    <>
      <div
        className=" mt-12 flex flex-col md:flex-row mx-5 gap-x-20 "
        id="about"
      >
        {/* left side image */}
        <div className="w-full md:w-1/2  xl:w-1/2">
          <div className="flex justify-center items-center  shadow-2xl ">
            <Image
              src={rightImage}
              alt="Left Image"
              title="Left Image"
              width={900}
              height={800}
              className="w-full h-full xl:w-full shadow-2xl shadow-black"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2  xl:w-1/2">
          <h2 className="pb-5 justify-center text-center text-xl sm:text-2xl  mt-20 sm:mt-5 uppercase text-[#C8A465] font-black hover:underline transition ease-in-out">
            About Us
          </h2>
          <div
            className=" text-[17px] text-center py-10"
            style={{ fontFamily: "arial" }}
          >
            <p>
              As an established name in the field of Event, Art, and
              Entertainment, Bracelet Productions has gained an impressive
              record of success thanks to its extensive industry experience and
              dynamic team of young professionals. Our services range from Event
              Management and Production, Photo and Videography, Video
              Productions, Fashion, and Entertainment, to Integrated Marketing
              Communication. Bracelet Productions is well-equipped to take on
              the production of events, exhibits, and entertainment of any
              magnitude thanks to its expansive infrastructure and pool of young
              and talented professionals. Our clients have always been satisfied
              with the services rendered by Bracelet Productions.
            </p>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <h2 className=" justify-center text-center  text-xl sm:text-2xl  uppercase text-[#C8A465] font-black hover:underline transition ease-in-out mt-20">
        Why Choose Us ?
      </h2>
      <div className=" flex flex-col-reverse my-20  md:flex-row px-10 gap-x-20  ">
        <div className="w-full  md:w-1/2  py-10">
          <div
            className=" text-[17px] text-center"
            style={{ fontFamily: "arial" }}
          >
            <h3 className="font-semibold underline text-black  py-4">
              IN-HOUSE INVETORY
            </h3>
            <p>
              We offer full inventory services for your event needs, whether
              it’s a Conference, Roadshow, Product Launch, or Exhibition.
              Everything we need is available in-house. Therefore, you do not
              have to rush. You can count on us.
            </p>
          </div>
          <div
            className=" text-[17px] text-center"
            style={{ fontFamily: "arial" }}
          >
            <h3 className="font-semibold underline text-black  py-4">
              PROFESSIONAL SERVICES
            </h3>
            <p>
              In terms of work, we are very proud to have a very professional
              team who will understand your all requirements and provide a
              timely response and idea. We all keep a constant touch with the
              client through out the event progress and process and after the
              event. so we can serve our clients better.
            </p>
          </div>
          <div
            className=" text-[17px] text-center"
            style={{ fontFamily: "arial" }}
          >
            <h3 className="font-semibold underline text-black  py-4">
              AFFORDABLE PRICING
            </h3>
            <p>
              With us, pricing is never an issue. We work within the client’s
              budget and offer suggestions to reduce costs and increase value.
            </p>
          </div>
        </div>
        {/* Right side image */}
        <div className="w-full md:w-1/2 sm:mt-12 xl:w-1/2">
          <div className=" justify-center items-center   shadow-2xl ">
            <Image
              src={leftImage}
              alt="left Image"
              title="left Image"
              width={800}
              height={600}
              className="w-full h-full xl:w-full shadow-2xl shadow-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
