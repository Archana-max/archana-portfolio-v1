import React from "react";
import Styles from "./LeftNav.module.css";
import GitHub from "../../assets/icons/Github";
import LinkedIn from "../../assets/icons/LinkedIn";
import Reveal from "../../hooks/Reveal";


const LeftNav = () => {
  return (
    <div className={Styles.vertical_sidebar}>
          <Reveal direction="left" delay={1.5}>

      <a href="https://www.linkedin.com/in/archana-moorthy/" className={Styles.sidebar_item}>
        <span className={Styles.email_text}>LinkedIn</span>
      </a>
      <a href="https://github.com/Archana-max" className={Styles.sidebar_item}>
        <span className={Styles.email_text}>Github</span>
      </a>
      <div className={Styles.vertical_line}></div>
          </Reveal>

    </div>
  );
};

export default LeftNav;
