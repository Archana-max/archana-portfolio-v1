import React from "react";
import Styles from "./HeroSection.module.css";
import Reveal from "../../hooks/Reveal";

const HeroSection = () => {
  // useScrollReveal(`.${Styles.hello_world}`, {  distance: '20px', delay: 1500 });
  // useScrollReveal(`.${Styles.intro}`, { distance: '20px', delay: 2000 });
  // useScrollReveal(`.${Styles.intro_text}`, { distance: '20px', delay: 2000 });


  return (
    <Reveal direction="up" delay={1}>
    <div className={Styles.hero_section}>
      <div className={Styles.hello_world}>Hi, My name is</div>
      <div className={Styles.intro}>Archana, a frontend developer. </div>
      <div className={Styles.intro_text}>
        I bring UI designs to life.</div>
    </div>
    </Reveal>
  );
};

export default HeroSection;
