import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import AboutCardsButtons from './AboutCardsButtons';
import * as C from './style';
import AboutList from '../../mocks/about_list';

const AboutCards = () => {
  const [aboutList, setAboutList] = useState([]);

  useEffect(() => {
    setAboutList(AboutList);
  }, []);

  return (
    <C.AboutCards>
      {aboutList.map((item) => (
        <figure key={item.id}>
          <img src={item.avatar} alt={item.name} />
          <figcaption>
            <p>{item.name}</p>
            <div className="about__social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
            </div>
            <AboutCardsButtons setAboutList={setAboutList} cardId={item.id} />
          </figcaption>
          {item.showContent && (
            <div className="about_description zoomIn">
              <h3>{item.skill}</h3>
              <p>{item.description}</p>
            </div>
          )}
        </figure>
      ))}
    </C.AboutCards>
  );
};

export default AboutCards;
