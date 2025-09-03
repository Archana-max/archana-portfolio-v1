import "./App.css";
import CircleBackground from "./components/CircleBackground/CircleBackground";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import SayHello from "./components/SayHello/SayHello";
import RightNav from "./components/RightNav/RightNav";
import LeftNav from "./components/LeftNav/LeftNav";
import { useEffect, useRef, useState } from "react";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const sayHellopRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    sayHello: sayHellopRef,
  };

  useEffect(() => {
    console.log("useEffect - IntersectionObserver setup");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-60px 0px 0px 0px", threshold: 0.5 }
    );
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onNavClick={scrollToSection}
        refs={sectionRefs}
        active={activeSection}
      />
      <div id="hero" ref={heroRef}>
        <HeroSection />
      </div>
      <RightNav />
      <LeftNav />
      <CircleBackground />
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="sayHello" ref={sayHellopRef}>
        <SayHello />
      </div>
    </>
  );
}

export default App;
