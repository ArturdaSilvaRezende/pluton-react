import GlobalTitle from '../../assets/styles/GlobalTitle';
import AboutContents from './AboutCards';
import AboutUs from './AboutUs';
import * as C from './style';

const About = () => {
  return (
    <C.About>
      <GlobalTitle
        title="var(--color-white)"
        subtitle="var(--color-yellow)"
        line="var(--color-white)"
      >
        <h1>Who We Are?</h1>
        <h2>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </h2>
      </GlobalTitle>
      <AboutContents />
      <AboutUs />
    </C.About>
  );
};

export default About;
