// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <h1 className="h1-heading">
          Get to <span className="know-us">Know Us</span>
        </h1>
        <p className="paragraph-content">
          Welcome to <span className="know-us2">InterviewAI</span>, your trusted
          partner in job interview success. Founded by Prashant Chaute, a Prompt
          Engineer and the visionary behind InterviewAI, our mission is to
          empower job seekers like you with the tools and guidance needed to
          excel in every interview.
        </p>
        <p className="paragraph-content">
          At InterviewAI, we introduce you to our intelligent chatbot,{" "}
          <span className="know-us2">IntelliBot</span>. With IntelliBot by your
          side, you can embark on your job interview journey with confidence.
          Our chatbot offers a comprehensive job interview preparation program
          that includes personalized tips, real-time feedback, and expert advice
          tailored to your unique needs.
        </p>
        <p className="paragraph-content">
          Prepare for interviews anytime, anywhere, as long as you have a smart
          device and an internet connection. Our 24/7 support feature ensures
          that you're never alone in your quest for career success. Whether it's
          a question, concern, or just seeking guidance, we're here to assist
          you at any hour.
        </p>
      </div>
    </>
  );
};

export default About;
