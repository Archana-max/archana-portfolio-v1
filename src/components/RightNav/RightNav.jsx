import React from 'react';
import Styles from './RightNav.module.css';
import Reveal from '../../hooks/Reveal';

const RightNav = () => {
  return (
    <div className={Styles.vertical_sidebar}>
      <Reveal direction="right" delay={1.5}>
        <a
          href="mailto:archanamoorthy32@gmail.com"
          className={Styles.sidebar_item}
        >
          <span className={Styles.email_text}>archanamoorthy32@gmail.com</span>
        </a>
        <div className={Styles.vertical_line}></div>
      </Reveal>
    </div>
  );
};

export default RightNav;
