import React from "react";
import Styles from "./Experience.module.css";
import Reveal from "../../hooks/Reveal";

const experience = [
  {
    company: "ATOS Syntel - Client The Home Depot",
    role: "frontend developer",
    duration: "December 2021 - February 2025",
    responsibilities: [
      "Developed and customized UI components with Material UI and documented them in Storybook to support feature team usage.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
      "Integrated Google Analytics to monitor user interactions and diagnose network-related issues, optimized API performance, published insights to Looker dashboards.",
    ],
  },
  {
    company: "Village IT services PVT LTD",
    role: "UI Developer",
    duration: "July 2018 - November 2021",
    responsibilities: [
      "Developed responsive web layouts using React.js,Next.js and Angular, and UI frameworks like Material UI, Ant Design, and Semantic UI.",
      "Enhanced mobile user engagement by achieving optimal web responsiveness through the use of UI libraries and custom CSS3 media queries.",
      "Integrated RESTful APIs and implemented efficient CRUD operations to improve backend data interaction.",
    ],
  },
];

const Experience = () => {
  return (
    <div className={Styles.experience_section}>
      <Reveal direction="up" delay={0.5}>
        <h1>Experience</h1>
      </Reveal>
      <div>
        {experience.map((exp, index) => {
          return (
            <Reveal direction="up" delay={0.5}>
              <section key={index} className={Styles.individual_experience}>
                <h2 className={Styles.experience_company}>{exp.company}</h2>
                <h2 className={Styles.role}>{exp.role}</h2>
                <h4>{exp.duration}</h4>
                <ul className={Styles.responsibilities}>
                  {exp.responsibilities &&
                    exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                </ul>
                <p>{exp.description}</p>
                <ul></ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
