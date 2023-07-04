import { useState, useEffect } from 'react';
import PriceList from '../../mocks/price_list';
import * as C from './style';

const PriceCards = () => {
  const [priceCards, setPriceCards] = useState([]);

  useEffect(() => {
    setPriceCards(PriceList);
  }, []);

  return (
    <C.PriceCards>
      {priceCards.map((item) => (
        <div key={item.id} className="pricecards__card">
          <h3>{item.plan}</h3>
          <ul>
            <li>{item.price}</li>
            <li>
              <strong>Free</strong> Setup
            </li>
            <li>
              <strong>24/7</strong> Support
            </li>
            <li>
              <strong>{item.storage}</strong> File Storage
            </li>
          </ul>
          <button>Buy</button>
        </div>
      ))}
    </C.PriceCards>
  );
};

export default PriceCards;
