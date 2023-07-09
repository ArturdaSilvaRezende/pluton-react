import TriangleComponent from '../Triangle';
import * as C from './style';

const ClientsPrimarySection = () => {
  return (
    <>
      <C.ClientsPrimarySection>
        <h1>
          Elegance is not the abundance of simplicity. It is the absence of
          complexity.
        </h1>
        <button>Purshase now</button>
      </C.ClientsPrimarySection>
      <TriangleComponent background="var(--color-yellow)" />
    </>
  );
};

export default ClientsPrimarySection;
