import styled from 'styled-components';

export const Portfolio = styled.section`
  background-color: var(--color-yellow);
  margin-bottom: -40px;
  padding-bottom: 50px;
`;

export const PortfolioContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const PortfolioItem = styled.figure`
  position: relative;
  margin: 30px auto 0 auto;
  width: 32%;

  figcaption {
    .portfolio__description {
      background-color: var(--color-black);
      position: absolute;
      bottom: 30px;
      right: 0;
      left: 0;
      top: 0;
      z-index: 2;

      h4,
      div {
        margin: 20px auto 0 auto;
        width: 90%;
      }

      h4 {
        border-bottom: 1px solid var(--color-yellow);
        color: var(--color-yellow);
        padding-bottom: 15px;
      }

      div {
        p {
          & + p {
            margin-top: 5px;
          }

          span {
            &:first-child {
              color: var(--color-yellow);
            }
            &:last-child {
              color: var(--color-white);
            }
          }
        }
      }
    }
    .portfolio__buttons {
      display: flex;

      button {
        border: 2px solid transparent;
        transition: 0.5s ease;
        width: 50%;

        svg {
          font-size: 1.5rem;
          position: relative;
          top: 3px;
        }

        &:first-child {
          background-color: var(--color-white);

          &:hover {
            border: 2px solid var(--color-red);
          }
        }
        &:last-child {
          background-color: var(--color-red);

          &:hover {
            border: 2px solid var(--color-white);
          }

          svg {
            color: var(--color-white);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 10px auto 0 auto;
    width: 48%;

    figcaption {
      .portfolio__description {
        bottom: 33px;

        div {
          p {
            font-size: clamp(12px, 2vw, 14px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    & + figure {
      margin-top: 60px;
    }

    figcaption {
      .portfolio__description {
        bottom: 5px;

        div {
          p {
            font-size: clamp(11px, 2vw, 16px);
          }
        }
      }

      .portfolio__buttons {
        position: relative;
        top: 30px;
      }
    }
  }
`;

export const PortfolioNavpill = styled.div`
  display: flex;
  margin: -20px auto 30px auto;
  width: 90%;

  button {
    border: 1px solid var(--color-black);
    border-radius: 5px;
    padding: 5px;
    transition: 0.3s ease;
    width: 100px;

    & + button {
      margin-left: 15px;
    }

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
      font-weight: bold;
    }
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;

    button {
      margin: 10px 10px 0 0;

      & + button {
        margin-left: 0;
      }
    }
  }
`;
