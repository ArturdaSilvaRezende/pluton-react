import { useEffect, useRef } from 'react';
import { Triangle } from '../../assets/styles/Triangle';
import './animation.css';

const TriangleComponent = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = containerRef.current.querySelectorAll('.scroll-element');

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowTop = window.scrollY + window.innerHeight;

        if (rect.top + scrollTop < windowTop) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Triangle background={props.background} className="scroll-element" />
    </div>
  );
};

export default TriangleComponent;
