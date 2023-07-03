import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import * as C from './style';

const OurClientsTitle = (props) => {
  return (
    <C.OurClientsTitle>
      <h2>Our Clients</h2>
      <div className="OurClientsTitle__buttons">
        <button onClick={props.handlePrev}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={props.handleNext}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </C.OurClientsTitle>
  );
};

export default OurClientsTitle;
