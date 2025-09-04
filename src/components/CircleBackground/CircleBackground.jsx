import React, { useState, useEffect, useRef } from 'react';
import Styles from './CircleBackground.module.css';
const CircleBackground = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Trigger animation on page load by forcing reflow
    circlesRef.current.forEach((el) => {
      if (el) {
        el.classList.remove(Styles.animate); // Remove if already there
        void el.offsetWidth; // Trigger reflow
        el.classList.add(Styles.animate); // Re-add to restart animation
      }
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Only show if window is 992px or more
  if (windowWidth < 992) {
    return null;
  }

  return (
    <div className={Styles.circle_background}>
      {[1, 2, 3, 4, 5].map((i, index) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[index] = el)}
          className={`${Styles[`circle_${i}`]}`}
        />
      ))}
    </div>
  );
};

export default CircleBackground;
