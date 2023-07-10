import { Container } from '../../assets/styles/Container';
import ContactUsMap from './ContactUsMap';
import ContactUsNewsletter from './ContactUsNewsletter';
import * as C from './style';

const ContactUs = () => {
  return (
    <C.ContactUs id="contactus">
      <ContactUsNewsletter />
      <ContactUsMap />
    </C.ContactUs>
  );
};

export default ContactUs;
