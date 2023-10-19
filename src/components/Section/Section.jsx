import React from "react";
import "./Section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to My Profile</h1>
        <p className="hero-subheading">Know About Me</p>
        <a href="#" className="cta-button">
          Continue
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
