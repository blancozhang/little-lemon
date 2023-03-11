import React from "react";
import Owner1 from "../images/Mario_and_Adrian_A.jpg";
import Owner2 from "../images/Mario_and_Adrian_b.jpg";
import "../style/About.css"

const About = () => {
  return (
    <div className="about">
      <div className="about-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple
          food and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="owner-photos">
        <img src={Owner1} alt="owner_photo" className="owner-photo-1" />
        <img src={Owner2} alt="owner_photo2" className="owner-photo-2" />
      </div>
    </div>
  );
};

export default About;