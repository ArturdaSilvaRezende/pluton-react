import styled from 'styled-components';

export const Services = styled.section`
  background-color: var(--color-black);
  margin-bottom: -40px;
  padding-bottom: 50px;
`;

export const ServicesContent = styled.div`
  display: flex;

  figure {
    text-align: center;
    width: 32%;

    img {
      border-radius: 50%;
      border: 4px solid var(--color-white);
      height: 150px;
      margin: 0 auto;
      width: 150px;
      transition: 0.5s ease-in;

      &:hover {
        transform: scale(1.5);
      }
    }

    figcaption {
      h3 {
        color: var(--color-yellow);
        font-size: 1.5rem;
        margin: 20px 0;
      }
      p {
        color: var(--color-white);
        margin: 0 auto;
        width: 70%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    figure {
      width: auto;
      & + figure {
        margin-top: 40px;
      }

      figcaption {
        p {
          width: 80%;
        }
      }
    }
  }
`;
