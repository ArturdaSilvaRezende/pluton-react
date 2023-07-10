import { useEffect, useRef } from 'react';
import TriangleComponent from '../Triangle';
import Logo from '../../assets/images/header/logo.png';
import HeaderNav from './HeaderMenu';
import { Container } from '../../assets/styles/Container';
import * as C from './style';

const Header = () => {
  const headerRef = useRef(null);

  const handleScrollTop = () => {
    if (
      document.body.scrollTop > 330 ||
      document.documentElement.scrollTop > 330
    ) {
      headerRef.current.classList.add('menu__fadein');
      headerRef.current.style.position = 'fixed';
    } else {
      headerRef.current.classList.remove('menu__fadein');
      headerRef.current.style.position = 'relative';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTop);

    return () => window.removeEventListener('scroll', handleScrollTop);
  }, []);

  return (
    <>
      <C.Header ref={headerRef}>
        <Container className="header__container">
          <a href="index.html" className="header__logo">
            <img src={Logo} alt="pluton-theme-logo" />
          </a>
          <HeaderNav />
        </Container>
      </C.Header>
      <TriangleComponent background="var(--color-black)" />
    </>
  );
};

export default Header;
