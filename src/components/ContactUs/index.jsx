import ContactUsMap from './ContactUsMap';
import ContactUsNewsletter from './ContactUsNewsletter';
import * as C from './style';

const ContactUs = () => {
  return (
    <C.ContactUs>
      <ContactUsNewsletter />
      <ContactUsMap />
    </C.ContactUs>
  );
};

export default ContactUs;
