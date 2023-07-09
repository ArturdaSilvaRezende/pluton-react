import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import * as C from './style';

const BtnBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isVisible = scrollTop > 300;

    setIsVisible(isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <C.BtnBackToTop onClick={scrollToTop}>
          <FaArrowUp />
        </C.BtnBackToTop>
      )}
    </>
  );
};

export default BtnBackToTop;
