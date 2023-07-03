import { useState, useEffect } from 'react';
import GlobalTitle from '../../assets/styles/GlobalTitle';
import ClientsList from '../../mocks/clients_list';
import * as C from './style';

const ClientsSecondarySection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(ClientsList);
  }, []);

  return (
    <C.ClientsSecondarySection>
      <GlobalTitle
        title="var(--color-white)"
        subtitle="var(--color-yellow)"
        line="var(--color-white)"
      >
        <h1>What Client Say?</h1>
        <h2>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </h2>
      </GlobalTitle>
      <div className="clients__cards">
        {clients.map((item) => (
          <figure key={item.id}>
            <figcaption>{item.testimonial}</figcaption>
            <span className="arrow"></span>
            <div className="clients__testimonial">
              <img src={item.avatar} alt={item.client} />
              <h3>
                <span>{item.client}</span>
                <span>Client</span>
              </h3>
            </div>
          </figure>
        ))}
      </div>

      <p className="clients__description">
        "Perfection is Achieved Not When There Is Nothing More to Add, But When
        There Is Nothing Left to Take Away"
      </p>
    </C.ClientsSecondarySection>
  );
};

export default ClientsSecondarySection;
