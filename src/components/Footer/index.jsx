import FooterSocial from './FooterSocial';
import * as C from './style';

const Footer = () => {
  const getYear = new Date();

  return (
    <C.Footer>
      <C.FooterContainer>
        <div className="footer__item">
          <h2>Address / Contact Us</h2>
          <address>
            <p>
              Original Template
              <a
                href="https://www.graphberry.com/products/preview/pluton-single-page-bootstrap-html-template"
                target="_blank"
                rel="noreferrer"
              >
                GraphBerry
              </a>
            </p>
            <p>123 Fifth Avenue, 12th,Belgrade,SRB 11000</p>
            <p>ourstudio@somemail.com</p>
            <p>+11 234 567 890</p>
            <p>+11 286 543 850</p>
          </address>
        </div>
        <FooterSocial />
        <div className="footer__item">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Your Name" required />
            <button>Subscribe</button>
          </form>
        </div>
      </C.FooterContainer>
      <div className="footer__copright">
        <p>
          This project was based on one of the GraphBerry templates, which can
          be accessed by clicking on the link.
        </p>
        <p>
          © {getYear.getFullYear()} Theme by
          <a
            href="https://www.graphberry.com/products/preview/pluton-single-page-bootstrap-html-template"
            target="_blank"
            rel="noreferrer"
          >
            GraphBerry
          </a>
        </p>
      </div>
    </C.Footer>
  );
};

export default Footer;
