import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { SlSocialDribbble } from 'react-icons/sl';

const FooterSocial = () => {
  return (
    <div className="footer__item">
      <h2>We Are Social</h2>
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaPinterestP />
        </li>
        <li>
          <SlSocialDribbble />
        </li>
        <li>
          <FaGooglePlusG />
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
