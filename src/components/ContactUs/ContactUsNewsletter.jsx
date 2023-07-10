import { Container } from '../../assets/styles/Container';
import * as C from './style';

const ContactUsNewsletter = () => {
  return (
    <C.ContactUsNewsletter>
      <div className="ContactUsNewsletter__container">
        <h1>Newsletter</h1>

        <div className="ContactUsNewsletter__contents">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <form>
            <input type="email" name="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </C.ContactUsNewsletter>
  );
};

export default ContactUsNewsletter;
