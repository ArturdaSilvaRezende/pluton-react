import GlobalTitle from '../../assets/styles/GlobalTitle';
import PortfolioContent from './PortfolioContent';
import * as C from './style';

const Portfolio = () => {
  return (
    <C.Portfolio>
      <GlobalTitle line="var(--color-black)">
        <h1>Have You Seen our Works?</h1>
        <h2>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.s
        </h2>
      </GlobalTitle>
      <PortfolioContent />
    </C.Portfolio>
  );
};

export default Portfolio;
