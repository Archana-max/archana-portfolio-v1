import React, { useState, useEffect } from 'react';
import Styles from './Header.module.css';
import { MenuBar } from '../../assets/icons/MenuBar';
import Reveal from '../../hooks/Reveal';

const Header = ({ onNavClick, refs, active }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  //disable scrolling on menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const menuBarClose = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (ref) => {
    onNavClick(ref);
    menuBarClose();
  };
  return (
    <>
      {/******* Mobile Header **********/}

      <ul className={Styles.nav_container_mobile}>
        <li className={Styles.mobile_nav_link}>
          <a href="https://my-portfolio-archana-moorthy.vercel.app/">Archana.</a>
        </li>
        <li>
          <MenuBar
            menuOpen={menuOpen}
            menuIconHandler={() => setMenuOpen(!menuOpen)}
          />
        </li>
      </ul>

      {/******** Mobile nav links ********/}
      {menuOpen && (
        <div className={Styles.menu_overlay}>
          <ul className={Styles.mobile_menu}>
            <li
              className={`${active === 'hero' ? Styles.active : ''}`}
              onClick={() => handleNavClick(refs.hero)}
            >
              <a>Intro</a>
            </li>
            <li
              className={`${active === 'about' ? Styles.active : ''} `}
              onClick={() => handleNavClick(refs.about)}
            >
              <a>About</a>
            </li>
            <li
              className={`${active === 'experience' ? Styles.active : ''} `}
              onClick={() => handleNavClick(refs.experience)}
            >
              <a>Experience</a>
            </li>
            <li
              className={`${active === 'projects' ? Styles.active : ''}`}
              onClick={() => handleNavClick(refs.projects)}
            >
              <a>Projects</a>
            </li>
            <li
              className={`${active === 'sayHello' ? Styles.active : ''}`}
              onClick={() => handleNavClick(refs.sayHello)}
            >
              <a>Say Hello</a>
            </li>
          </ul>
        </div>
      )}

      {/******* Web Header **********/}
      <div className={Styles.web_header}>
        <Reveal direction="down" delay={0.4}>
          <ul className={Styles.nav_container_web}>
            <li className={Styles.nav_links}>
              <a
                href="https://my-portfolio-archana-moorthy.vercel.app/"
                className={active === '' ? Styles.active : ''}
              >
                Archana.
              </a>
            </li>
            <li
              className={`${active === 'hero' ? Styles.active : ''} ${Styles.nav_links}`}
              onClick={() => onNavClick(refs.hero)}
            >
              <a>Intro</a>
            </li>
            <li
              className={`${active === 'about' ? Styles.active : ''} ${Styles.nav_links}`}
              onClick={() => onNavClick(refs.about)}
            >
              <a>About</a>
            </li>
            <li
              className={`${active === 'experience' ? Styles.active : ''} ${Styles.nav_links}`}
              onClick={() => onNavClick(refs.experience)}
            >
              <a>Experience</a>
            </li>
            <li
              className={`${active === 'projects' ? Styles.active : ''} ${Styles.nav_links}`}
              onClick={() => onNavClick(refs.projects)}
            >
              <a>Projects</a>
            </li>
            <li
              className={`${active === 'sayHello' ? Styles.active : ''} ${Styles.nav_links}`}
              onClick={() => onNavClick(refs.sayHello)}
            >
              <a>Say Hello</a>
            </li>
          </ul>
        </Reveal>
      </div>
    </>
  );
};

export default Header;
