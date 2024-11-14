import React from "react";
import "./About.css";
import theme_pattern from "../../assets/Image/theme.png";
import profile_img from "../../assets/Image/profile.jpg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I’m a 19-year-old Full Stack Development student at the National
              Institute of Information Technology. My studies here have fueled
              my passion for creating interactive and visually engaging web
              experiences.{" "}
            </p>{" "}
            <p>
              {" "}
              I’m especially drawn to frontend development, where I strive to
              bring creativity and precision to each project. As I work to
              master both frontend and backend skills, I’m committed to building
              seamless, user-friendly applications.{" "}
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>VOLUNTEER WORKS</p>
        </div>
      </div>
    </div>
  );
};
