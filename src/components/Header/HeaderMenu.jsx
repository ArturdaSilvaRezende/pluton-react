import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Navbar from './HeaderNavbar';
import * as C from './style';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMenuOpen(window.innerWidth > 821);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <C.HeaderNav>
      <button onClick={handleToggle}>
        {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
      </button>

      {isMenuOpen && <Navbar />}
    </C.HeaderNav>
  );
};

export default HeaderNav;
