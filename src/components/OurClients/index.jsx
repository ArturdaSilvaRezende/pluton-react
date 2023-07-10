import { Container } from '../../assets/styles/Container';
import OurClientsSwiper from './OurClientsSwiper';
import * as C from './style';

const OurClients = () => {
  return (
    <C.OurClients>
      <Container>
        <C.OurClientsContents>
          <OurClientsSwiper />
        </C.OurClientsContents>
      </Container>
    </C.OurClients>
  );
};

export default OurClients;
