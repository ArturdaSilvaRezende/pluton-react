import Logo from '../../assets/images/header/logo.png';
import HeaderNav from './HeaderMenu';
import * as C from './style';

const Header = () => {
  return (
    <C.Header>
      <a href="index.html" className="header__logo">
        <img src={Logo} alt="pluton-theme-logo" />
      </a>
      <HeaderNav />
    </C.Header>
  );
};

export default Header;
