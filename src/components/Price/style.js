import styled from 'styled-components';

export const Price = styled.section`
  background-color: var(--color-yellow);
  padding-bottom: 50px;

  .pricecards__footer {
    text-align: center;

    p {
      font-size: 1.6rem;
      margin: 50px 0 30px 0;
    }

    button {
      border: 1px solid var(--color-black);
      font-size: 1.3rem;
      padding: 10px;
      transition: 0.3s ease;
      width: 140px;

      &:hover {
        background-color: var(--color-black);
        color: var(--color-white);
      }
    }
  }

  @media screen and (max-width: 767px) {
    .pricecards__footer {
      p {
        margin: 50px auto 30px auto;
        width: 90%;
      }
    }
  }
`;

export const PriceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .pricecards__card {
    background-color: var(--color-white);
    border-radius: 10px;
    text-align: center;

    h3 {
      background-color: var(--color-black);
      border-radius: 10px 10px 0px 0px;
      color: var(--color-yellow);
      font-size: 36px;
      margin-top: 0px;
      padding: 40px 0px;
      text-transform: uppercase;
    }

    ul {
      margin: 20px 40px;

      li {
        border-bottom: 1px solid var(--color-gray);
        color: var(--color-gray);
        font-size: 1.4rem;
        padding: 20px;

        &:first-child {
          font-size: 2rem;
        }

        &:last-child {
          border-bottom: 1px solid transparent;
        }
      }
    }

    button {
      background-color: var(--color-black);
      border-radius: 5px;
      color: var(--color-yellow);
      margin-bottom: 20px;
      padding: 10px;
      transition: 0.3s ease;
      width: 90px;

      &:hover {
        background-color: var(--color-yellow);
        color: var(--color-black);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .pricecards__card {
      ul {
        margin: 10px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;

    .pricecards__card {
      & + .pricecards__card {
        margin-top: 40px;
      }
    }
  }
`;
