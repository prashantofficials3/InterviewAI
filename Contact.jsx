import React from "react";
import "./Contact.css";

import LocationImage from "../Media/location.png";
import EmailImage from "../Media/mail.png";
import PhoneImage from "../Media/telephone.png";
import LogoImage from "../Media/AILogo.webp";
import InstagramImage from "../Media/instagram.png";
import LinkedInImage from "../Media/linkedin.png";
const Contact = () => {
  return (
    <>
      <div className="h1-title" id="contact">
        Get in <span className="touch">Touch</span>
      </div>
      <section className="contact-section">
        <div className="contact-details">
          <div className="contact-info">
            <div className="contact-item">
              <img src={LocationImage} alt="Location" />
              <p className="desc">Surat, Gujarat</p>
            </div>
            <div className="contact-item">
              <img src={PhoneImage} alt="Phone" />
              <p className="desc">+91 81280 33899</p>
            </div>
            <div className="contact-item">
              <img src={EmailImage} alt="Email" />
              <p className="desc">prashantofficials3@gmail.com</p>
            </div>
            <div className="contact-item">
              <a
                href="https://www.instagram.com/mr_king7385"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramImage}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/prashant-chaute/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInImage}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src={LogoImage} alt="InterviewAI Logo" />
        </div>
      </section>
    </>
  );
};

export default Contact;
