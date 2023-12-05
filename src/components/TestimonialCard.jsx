import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleFeedbacks = [
  {
    name: "Shrishti and Karan",
    feedback:
      "Team Bracelet Production is so professional and punctual for the work, they have absolutely amazing coordination and communication. They inform and updated us for every small thing.",
  },
  {
    name: "Max",
    feedback:
      "Thank You for managing our conference professionally and we love the coordination Very Professional Service!",
  },
  {
    name: "Kirti and Saurav",
    feedback:
      "Thank You for Bracelet Production for making our wedding so beautiful!",
  },
  {
    name: "Perfetti Van Melle",
    feedback: "Very Good Execution!",
  },
  {
    name: "Gupta Family",
    feedback:
      "We had a great team with us, they are full of ideas and execution is flawless. ",
  },
  {
    name: "Kapil Gupta and Gauri Sharma",
    feedback:
      "We are confused earliear how things will go but at the end team was amazing. Trusst them this team will execute what they are saying. ",
  },
  {
    name: "Ravi Taneja & Swati Sabarwal",
    feedback:
      "We suggest you must pick Bracelet productions for your wedding, We are glad they did what they said and last but not the least, Thank you so Much Bracelet Production for making wedding like a dream come true. Stay Blessed!",
  },
];

const ImgMediaCard = ({ name, feedback }) => {
  // Customize the styles as per your preference
  const cardStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    background: "black",
    padding: "20px",
    border: "2px solid white",
    fontFamily: "Comic Sans MS, cursive, sans-serif", // Use a comic-style font
  };

  const contentStyle = {
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
    textAlign: "center",
  };

  const feedbackStyle = {
    color: "white",
    textAlign: "center",
    marginBottom: "10px",
  };

  const nameStyle = {
    color: "#FFC300",
    textAlign: "center",
    fontSize: "20px",
  };

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>OUR SUCCESS STORIES</h2>
        <p style={feedbackStyle}>{feedback}</p>
        <p style={nameStyle}>{name}</p>
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {SampleFeedbacks.map((feedback, index) => (
        <div key={index}>
          <ImgMediaCard name={feedback.name} feedback={feedback.feedback} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
