import React from 'react';
import Styles from './Projects.module.css';
import Reveal from '../../hooks/Reveal';
import bidnbizImage from '../../assets/images/bidnbiz.png';
import potfolioImage from '../../assets/images/portfolio.png';
import geminiImage from '../../assets/images/gemini.png';

const ProjectsDetails = [
  {
    title: 'MEAN Stack E-commerce Application',
    description:
      'A full-stack web application built with Angular, Node.js, Express, and MongoDB that enables users to browse products, authenticate securely, and make purchases.',
    imageSrc: bidnbizImage,
    techStack: ['Angular', 'Node.js', 'MonogoDB', 'Sass', 'Express'],
    projectLink: 'https://bidnbiz.com/',
  },
  {
    title: 'Gemini',
    description:
      'Built a personalized Generative AI app powered by Google Gemini API, featuring a React.js frontend and a Node.js backend for seamless user interaction.',
    imageSrc: geminiImage,
    techStack: ['React', 'CSS', 'Node.js'],
    projectLink: 'https://gemini-api-orcin.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills, built with React and enhanced with Framer Motion for smooth animations.',
    techStack: ['React', 'CSS', 'Framer Motion'],
    imageSrc: potfolioImage,
    projectLink: 'https://gemini-api-orcin.vercel.app/',
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }) => {
  return (
    <div className={Styles.project_card_container}>
      <div className={Styles.image_container}>
        <a href={project.projectLink} target="_blank">
          {' '}
          <img src={project.imageSrc} className={Styles.project_image} />
        </a>
      </div>
      <div className={Styles.project_card}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.techStack.map((tech, index) => (
          <span key={index} className={Styles.project_techstack}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  // useScrollReveal(`.${Styles.project_section}`);
  return (
    <Reveal direction="up" delay={0.5}>
      <div className={Styles.project_section}>
        <h1>My Projects</h1>
        <div className={Styles.project_content}>
          {ProjectsDetails.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
    </Reveal>
  );
};

export default Projects;
