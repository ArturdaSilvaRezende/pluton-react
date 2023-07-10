import styled from 'styled-components';
import BgOurClients from '../../assets/images/ourclients/brand-bg.png';

export const OurClients = styled.section`
  background: url(${BgOurClients}) no-repeat center;
  border-top: 6px solid var(--color-yellow);
  padding: 50px 0;
`;

export const OurClientsContents = styled.div``;

export const OurClientsTitle = styled.div`
  border-bottom: 1px solid var(--color-white);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 15px;
  position: relative;

  h2 {
    color: var(--color-yellow);
    font-size: 1.5rem;
  }

  .OurClientsTitle__buttons {
    button {
      background-color: var(--color-yellow);
      border-radius: 5px;
      color: var(--color-black);
      padding: 3px;
      transition: 0.3s ease;
      width: 40px;

      & + button {
        margin-left: 10px;
      }

      &:hover {
        background-color: var(--color-black);
        color: var(--color-yellow);
      }

      svg {
        font-size: 1.3rem;
        position: relative;
        top: 2px;
      }
    }
  }
`;

export const OurClientsSwiper = styled.div`
  .ourclients__contents {
    .ourclients__item {
      border: 1px solid var(--color-white);
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 0, 0.6);
      }
      img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .ourclients__contents {
      .ourclients__item {
        margin: 0 auto;
        width: 70%;
      }
    }
  }
`;
