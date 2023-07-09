import styled from 'styled-components';

export const ClientsPrimarySection = styled.section`
  background-color: var(--color-yellow);
  margin-bottom: -40px;
  padding: 90px 20px 30px 20px;
  text-align: center;

  h1 {
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 40px;
  }

  button {
    border: 1px solid var(--color-black);
    font-size: 17px;
    padding: 15px 30px;
    transition: 0.3s ease;

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }
`;

export const ClientsSecondarySection = styled.section`
  background-color: var(--color-black);

  .clients__cards {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    width: 90%;

    figure {
      figcaption {
        background-color: var(--color-yellow);
        padding: 15px;
      }
      .arrow {
        border-top: 10px solid var(--color-yellow);
        border-left: 20px outset transparent;
        border-right: 20px outset transparent;
        display: block;
        margin-left: 10px;
        width: 0;
      }

      .clients__testimonial {
        display: flex;
        margin-top: 10px;

        img {
          height: 50px;
          width: 50px;
        }

        h3 {
          color: var(--color-yellow);
          margin-left: 10px;

          span {
            display: block;
          }
        }
      }
    }
  }

  .clients__description {
    color: var(--color-white);
    font-size: 1.3rem;
    margin: 0 auto;
    padding: 60px 0 50px 0;
    text-align: center;
    width: 50%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .clients__description {
      width: 90%;
    }
  }

  @media screen and (max-width: 767px) {
    .clients__cards {
      grid-template-columns: 1fr;
      gap: 0;

      figure {
        & + figure {
          margin-top: 40px;
        }
      }
    }
    .clients__description {
      width: 90%;
    }
  }
`;
