// Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} InterviewAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
