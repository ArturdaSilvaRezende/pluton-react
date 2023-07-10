import { Container } from '../../assets/styles/Container';
import PriceCards from './PriceCards';
import GlobalTitle from '../../assets/styles/GlobalTitle';
import * as C from './style';

const Price = () => {
  return (
    <C.Price id="price">
      <Container>
        <GlobalTitle line="var(--color-black)">
          <h1>Price</h1>
          <h2>
            Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
            dapibus in purus in dignissim.
          </h2>
        </GlobalTitle>
        <PriceCards />
        <div className="pricecards__footer">
          <p>We Offer Custom Plans. Contact Us For More Info.</p>
          <button>Contact Us</button>
        </div>
      </Container>
    </C.Price>
  );
};

export default Price;
