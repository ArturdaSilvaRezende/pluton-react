import * as C from './style';

const ContactUsMapForm = () => {
  return (
    <C.ContactUsMapForm>
      <h4>Say Hello</h4>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea cols="30" rows="10" placeholder="Comments" required />
      <button>Send Message</button>
    </C.ContactUsMapForm>
  );
};

export default ContactUsMapForm;
