import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Image/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Shifatu Halimah,</span> a frontend developer based in Nigeria.
      </h1>
      <p>
        With 2+ years of experience, I build modern, responsive websites using
        HTML, CSS, JavaScript, and React. Based in Lagos, I’m passionate about
        creating seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
