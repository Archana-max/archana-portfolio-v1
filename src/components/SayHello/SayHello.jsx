import React from 'react';
import Styles from './SayHello.module.css';
import Reveal from '../../hooks/Reveal';
import EmailIcon from '../../assets/icons/Email.jsx';
import GitHub from '../../assets/icons/Github.jsx';
import LinkedIn from '../../assets/icons/LinkedIn.jsx';

const SayHello = () => {
  return (
    <Reveal direction="up" delay={0.4}>
      <div className={Styles.say_hello_section}>
        <div className={Styles.get_in_touch}>Get In Touch</div>
        <p>I love to hear from you. </p>
        <p>
          Whether you have a question or just want to chat about design, tech —
          shoot me a message.
        </p>
        <p>I’ll try my best to get back to you!</p>
        <button className={`primary_button ${Styles.say_hello}`}>
          <a href="mailto:archanamoorthy32@gmail.com">Say Hello</a>
        </button>
        <hr className={Styles.divider} />
        <div className={Styles.icons}>
          <EmailIcon />
          <LinkedIn />
          <GitHub />
        </div>
        <div className={Styles.copyright}>Design and built by Archana</div>
      </div>
    </Reveal>
  );
};

export default SayHello;
