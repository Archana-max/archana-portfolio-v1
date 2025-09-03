import React from "react";
import Styles from "./About.module.css";
import Reveal from "../../hooks/Reveal";
import profileImage from "../../assets/images/profilepic.jpeg";

const skillSet = [
  "Javascript",
  "Typescript",
  "React",
  "NextJs",
  "Angular",
  "Node.js",
  "MonogoDB",
  "HTML",
  "CSS",
  "Sass",
  "Material UI",
  "Ant Design",
];
const About = () => {
  return (
    <div className={`${Styles.about_section}`}>
      {/* Content section */}
      <Reveal direction="up" delay={0.5}>
        <h1 className={`${Styles.heading}`}>About Me</h1>
      </Reveal>
      <Reveal direction="up" delay={0.5}>
        <div className={Styles.about_content_section}>
          <section className={Styles.about_content}>
            <p>
              Hello! I'm Archana, a frontend developer who loves crafting clean,
              interactive, and pixel-perfect user interfaces. My journey into
              web development began back in 2015, when I became curious about
              how clicking a simple button could take you to an entirely
              different webpage. That curiosity quickly turned into a passion.
            </p>
            <p>
              Fast forward to today — I’ve had the opportunity to work with
              companies like{" "}
              <a href="https://www.homedepot.com/" className={Styles.about_link} target={"_blank"}>The Home Depot</a>, a retail
              giant, and{" "}
              <a href="https://www.linkedin.com/company/villageit18/posts/?feedView=all" className={Styles.about_link} target={"_blank"}>
                Village IT Services
              </a>
              . These days, I’m focused on crafting accessible and maintainable
              interfaces using modern frameworks and best practices. I love
              bringing designs to life and turning complex problems into elegant
              solutions.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className={Styles.about_skillset}>
              {skillSet.map((skill, index) => (
                <li key={index} className={Styles.project_techstack}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
          {/* Image section */}
          <section className={Styles.about_image}>              <img src={profileImage} alt="Archana" />

          </section>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
