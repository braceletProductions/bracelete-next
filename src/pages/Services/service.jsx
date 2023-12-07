import React from "react";

const Service = () => {
  const services = [
    {
      title: "EVENT MANAGEMENT",
      content:
        "We are proficient in the three most integral part of Event Management Conceptulise – Design – Execute.",
    },
    {
      title: "WEDDING PLANNING",
      content:
        "Our professional wedding planner understands your desire. so they design and execute your wedding into a lifetime memory.",
    },
    {
      title: "FASHION SHOW",
      content:
        "We manage your fashion show with very professional manner, weather it’s a Ramp, Backdrop, Light or Sound. It all will be flawless..",
    },
    {
      title: "PHOTO AND VIDEOGRAPHY",
      content:
        "Whether it is a wedding, corporate event, Fashion Show, Birthday or any other event, we have a dedicated team of professionals ready to capture the best moments for you..",
    },
    {
      title: "CORPORATE GIFTING",
      content:
        "We provide corporate gifting services to our clients. The Innovative, Latest, Trendy and Useful Gifts with Corporate Branding..",
    },
  ];

  return (
    <>
      <div
        className="my-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        id="service"
      >
        <div
          className="my-20 flex flex-col items-center justify-center md:flex-row px-10 gap-x-20"
          id="service"
        >
          <h2 className="text-[#C8A465] text-3xl sm:text-3xl font-black text-center uppercase">
            Services We Offer
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#C8A465] rounded-lg shadow-2xl shadow-black p-6 text-center h-[350px] sm:h-[250px]"
              style={{ maxWidth: "300px" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-white">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
