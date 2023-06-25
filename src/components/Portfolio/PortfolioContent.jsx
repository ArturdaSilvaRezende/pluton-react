import { useState, useEffect } from 'react';
import PortfolioDescription from './PortfolioDescription';
import PortfolioButton from './PortfolioButtons';
import PortfolioNavpill from './PortfolioNavpill';
import PortfolioList from '../../mocks/portfolio_list';
import * as C from './style';

const PortfolioContent = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setPortfolio(PortfolioList);
  }, []);

  useEffect(() => {
    const filtered = PortfolioList.map((itensFiltered) => ({
      ...itensFiltered,
      filtered: itensFiltered.person.includes(activeFilter),
    }));

    setPortfolio(filtered);
  }, [activeFilter]);

  return (
    <>
      <PortfolioNavpill
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <C.PortfolioContainer>
        {portfolio.map(
          (item) =>
            item.filtered && (
              <C.PortfolioItem key={item.id} className="zoomIn">
                <img src={item.avatar} alt={item.client} />

                <figcaption>
                  {item.showContent && (
                    <PortfolioDescription
                      client={item.client}
                      date={item.date}
                      skills={item.skills}
                      link={item.link}
                    />
                  )}

                  <PortfolioButton
                    cardId={item.id}
                    setPortfolio={setPortfolio}
                  />
                </figcaption>
              </C.PortfolioItem>
            ),
        )}
      </C.PortfolioContainer>
    </>
  );
};

export default PortfolioContent;
