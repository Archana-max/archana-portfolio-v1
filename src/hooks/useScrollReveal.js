// hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector, options={origin:'bottom',distance:'20px',delay:200}) => {
  useEffect(() => {
    const defaultOptions = {
      duration: 800,
      easing: 'ease-in-out',
      reset: false,
      viewFactor: 0.2,
      mobile: true,
          opacity: 0,
    };

    ScrollReveal().reveal(selector, { ...defaultOptions, ...options });
  }, [selector, options]);
};

export default useScrollReveal;
