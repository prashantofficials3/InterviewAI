// Works.jsx
import React from "react";
import "./Works.css";

const Works = () => {
  const contactNumber = "8128033899";

  const handleContactNowClick = () => {
    window.location.href = `tel:${contactNumber}`;
  };

  return (
    <div className="works-container" id="contact">
      <h1 className="works-heading">
        Let's <span className="initiate">Initialte</span>
      </h1>
      <p className="works-description">
        Start your interview preparation journey with IntelliBot at InterviewAI.
        Gain confidence, practice real questions, and get expert guidance. Your
        dream job is just a click away!
      </p>
      <button className="contact-now-button" onClick={handleContactNowClick}>
        Contact Now
      </button>
    </div>
  );
};

export default Works;
