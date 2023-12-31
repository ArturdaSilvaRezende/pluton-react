import { useState, useEffect } from 'react';
import { Container } from '../../assets/styles/Container';
import TriangleComponent from '../Triangle';
import GlobalTitle from '../../assets/styles/GlobalTitle';
import ServicesList from '../../mocks/services_list';
import * as C from './style';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(ServicesList);
  }, []);

  return (
    <>
      <C.Services id="services">
        <Container>
          <GlobalTitle
            title="var(--color-white)"
            subtitle="var(--color-yellow)"
            line="var(--color-white)"
          >
            <h1>What We Do?</h1>
            <h2>
              Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
              dapibus in purus in dignissim.
            </h2>
          </GlobalTitle>
          <C.ServicesContent>
            {services.map((item) => (
              <figure key={item.id}>
                <img src={item.img} alt={item.service} />
                <figcaption>
                  <h3>{item.service}</h3>
                  <p>{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </C.ServicesContent>
        </Container>
      </C.Services>
      <TriangleComponent background="var(--color-black)" />
    </>
  );
};

export default Services;
