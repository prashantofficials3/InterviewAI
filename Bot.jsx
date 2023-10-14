import React from "react";
import Typed from "react-typed";
import "./Bot.css";
import BotImage from "../Media/IntelliBot1.webp";

const Bot = () => {
  return (
    <div className="svg">
      <section className="bot-section" id="bot">
        <div className="bot-content">
          <div className="bot-image">
            <img src={BotImage} alt="IntelliBot" />
            <hr className="horizontal-line" />
          </div>

          <div className="bot-info">
            <div className="bot-heading">
              <h1>
                Meet your{" "}
                <span className="typedText">
                  <Typed
                    strings={["IntelliBot", "Virtual Assistant"]}
                    typeSpeed={100}
                    backSpeed={80}
                    backDelay={2000}
                    loop
                  />
                </span>
              </h1>
            </div>
            <div className="bot-description">
              <p>
                Meet IntelliBot, your trusted interview companion. With
                IntelliBot, you can prepare for interviews, receive instant
                feedback, access diverse interview questions, and enjoy 24/7
                support. Whether you're a recent grad or a seasoned pro,
                IntelliBot tailors its guidance to your needs. Get constructive
                feedback, practice with real questions, and have your questions
                answered anytime. With IntelliBot, interview success is just a
                conversation away!
              </p>
            </div>
            <div className="bot-button">
              <button className="cta-button">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bot;
