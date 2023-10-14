import React from "react";
import "./Homepage.css";
import Bot from "../Bot/Bot";
import About from "../About/About";
import Works from "../Work/Works";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Discover from "../Discover/Discover";

function Homepage() {
  return (
    <>
      <Navbar />
      <Bot />
      <Discover />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
