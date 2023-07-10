import { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefaut();
    const target = event.target;
    const id = target.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll(0, to);
  };

  useEffect(() => {
    const elements = navbarRef.current.querySelectorAll('a[href^="#"]');
    elements.forEach((item) => {
      item.addEventListener('click', handleClick);
    });
  }, []);

  return (
    <nav className="zoomInUp" ref={navbarRef}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#price">Price</a>
        </li>
        <li>
          <a href="#contactus">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
