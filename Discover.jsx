import React, { useState } from "react";
import "./Discover.css";

import Interview from "../Media/interview4.jpg";
import Tips from "../Media/tips4.jpg";
import Support from "../Media/support4.jpg";
import Feedback from "../Media/feedback4.jpg";

const Discover = () => {
  const featuresData = [
    {
      title: "Job Interview Excellence",
      description:
        "With IntelliBot's Job Interview Excellence feature, you'll gain a competitive edge in your job interviews. Get expert guidance, practice with real questions, and boost your confidence. Land your dream job with ease",
      imageUrl: Interview,
    },
    {
      title: "Interview Mastery",
      description:
        "Boost your interview skills with IntelliBot's curated tips and tricks. Nail your next interview and stand out from the competition",
      imageUrl: Tips,
    },
    {
      title: "24/7 Support Center",
      description:
        "IntelliBot's 24/7 Support Center is your reliable companion, ready to assist you at any time. Whether it's a question, concern, or guidance you seek, we're here to provide swift and knowledgeable support. Your success is our priority",
      imageUrl: Support,
    },
    {
      title: "Instant Feedback Hub",
      description:
        "IntelliBot's Instant Feedback Hub provides real-time insights into your skills and abilities. Receive constructive feedback and tips to enhance your performance and achieve your goals faster. Success is just a click away",
      imageUrl: Feedback,
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(null);

  return (
    <div className="discover-container" id="feature">
      <h2 className="discover-heading">
        Discover Our <span className="features1">Features</span>
      </h2>
      <p className="discover-description">
        Discover the power of InterviewAI features. Whether you're preparing for
        job interviews, creating impressive resumes, or seeking instant
        feedback, we've got you covered. Elevate your skills and achieve success
        with us.
      </p>
      <div className="feature-rows">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${
              currentFeature === feature ? "hovered" : ""
            }`}
            onMouseEnter={() => setCurrentFeature(feature)}
            onMouseLeave={() => setCurrentFeature(null)}
          >
            <img src={feature.imageUrl} alt={feature.title} />
            <div className="feature-details">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
