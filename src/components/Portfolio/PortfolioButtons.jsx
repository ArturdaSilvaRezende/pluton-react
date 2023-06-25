import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const PortfolioButton = (props) => {
  const handleToggleShowContent = (cardId) => {
    props.setPortfolio((showCards) => {
      return showCards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            showContent: true,
          };
        }
        return card;
      });
    });
  };

  const handleToggleHideContent = (cardId) => {
    props.setPortfolio((hideCards) => {
      return hideCards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            showContent: false,
          };
        }
        return card;
      });
    });
  };

  return (
    <div className="portfolio__buttons">
      <button onClick={() => handleToggleShowContent(props.cardId)}>
        <FaEye />
      </button>
      <button onClick={() => handleToggleHideContent(props.cardId)}>
        <FaEyeSlash />
      </button>
    </div>
  );
};

export default PortfolioButton;
