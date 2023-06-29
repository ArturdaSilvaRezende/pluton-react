import React, { useEffect, useState } from 'react';

const AboutUsProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.scrollY + (window.innerHeight * 3) / 4;
      const activationHeight = windowHeight * 0.8;
      setIsVisible(scrollTop > activationHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul className="aboutUs__skills">
      <li>
        <span style={{ width: isVisible ? '80%' : '0' }}></span>
        <h4>Html5, Css3, JavaScript</h4>
      </li>
      <li>
        <span style={{ width: isVisible ? '90%' : '0' }}></span>
        <h4>Bootstrap, Webpack, Git</h4>
      </li>
      <li>
        <span style={{ width: isVisible ? '75%' : '0' }}></span>
        <h4>React, NextJs, React Native </h4>
      </li>
      <li>
        <span style={{ width: isVisible ? '65%' : '0' }}></span>
        <h4>Git, Github, Scrum</h4>
      </li>
    </ul>
  );
};

export default AboutUsProgressBar;
