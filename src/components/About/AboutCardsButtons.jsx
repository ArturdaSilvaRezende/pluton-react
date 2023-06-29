import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import * as C from './style';

const AboutCardsButtons = (props) => {
  const handleToggleShowContent = (cardId) => {
    props.setAboutList((showCards) => {
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
    props.setAboutList((hideCards) => {
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
    <C.AboutCardsButtons>
      <button onClick={() => handleToggleShowContent(props.cardId)}>
        <FaEye />
      </button>
      <button onClick={() => handleToggleHideContent(props.cardId)}>
        <FaEyeSlash />
      </button>
    </C.AboutCardsButtons>
  );
};

export default AboutCardsButtons;
