import styled from 'styled-components';

export const About = styled.section`
  background-color: var(--color-black);
  padding-bottom: 50px;

  .zoomIn {
    animation-name: zoomIn;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
`;

export const AboutCards = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;

  figure {
    border: 1px solid var(--color-white);
    flex-grow: 1;
    padding: 10px;
    position: relative;
    width: 30%;

    & + figure {
      margin-left: 15px;
    }

    figcaption {
      text-align: center;

      p {
        color: var(--color-yellow);
        font-size: 1.3rem;
        margin: 30px 0 20px 0;
      }

      .about__social {
        margin-bottom: 15px;

        span {
          background-color: var(--color-yellow);
          border-radius: 50%;
          cursor: pointer;
          padding: 7px;
          transition: 0.5s ease;

          & + span {
            margin-left: 15px;
          }

          &:hover {
            background-color: var(--color-white);
          }

          svg {
            position: relative;
            top: 3px;
          }
        }
      }
    }

    .about_description {
      background-color: rgba(255, 255, 0, 0.7);
      text-align: center;
      position: absolute;
      left: 10px;
      right: 10px;
      top: 10px;
      bottom: 178px;
      transition: all 0.5s ease-in;

      h3 {
        font-size: 1.5rem;
        margin: 30px 0;
      }

      p {
        font-size: 1.2rem;
        margin: 0 auto;
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    figure {
      .about_description {
        bottom: 177px;

        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    figure {
      width: auto;

      & + figure {
        margin: 20px 0 0 0;
      }

      .about_description {
        bottom: 178px;
      }
    }
  }
`;

export const AboutCardsButtons = styled.div`
  margin: 30px 0 15px 0;

  button {
    background-color: var(--color-yellow);
    border-radius: 5px;
    padding: 4px;
    transition: 0.3s ease;
    width: 100px;

    &:hover {
      background-color: var(--color-red);
    }

    & + button {
      margin-left: 20px;
    }

    svg {
      position: relative;
      top: 2px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    button {
      width: 80px;
    }
  }
`;

export const AboutUs = styled.div`
  margin: 7% auto 0 auto;
  width: 90%;

  h2,
  h3 {
    color: var(--color-yellow);
    font-size: 2rem;
  }
`;

export const AboutUsTitle = styled.div`
  text-align: center;

  p {
    color: var(--color-white);
    line-height: 1.5;
    margin: 20px auto 40px auto;
  }
`;

export const AboutUsContants = styled.div`
  h3 {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    h3 {
      margin-bottom: 40px;
    }
  }
`;

export const AboutUsContainer = styled.div`
  display: flex;
  align-items: center;

  .aboutUs__skills {
    position: relative;
    margin-right: 20px;
    width: 48%;

    li {
      background: var(--color-white);
      height: 40px;
      margin-bottom: 30px;
      padding: 1px;

      span {
        background-color: var(--color-yellow);
        height: 40px;
        position: absolute;
        color: transparent;
        transition: 3s ease-in;

        &::before {
          content: '.';
        }
      }

      h4 {
        font-size: 15px;
        color: var(--color-black);
        text-transform: uppercase;
        position: relative;
        top: 10px;
        left: 10px;
        z-index: 1;
      }
    }
  }

  .aboutUs__joinUs {
    background-color: var(--color-white);
    margin-top: -30px;
    padding: 10px 30px;
    text-align: center;
    width: 48%;

    h4 {
      font-size: clamp(2rem, 2vw, 2.5rem);
    }

    p {
      font-size: clamp(12px, 2vw, 17.5px);
      margin: 15px auto;
      padding: 10px;
    }

    button {
      background-color: var(--color-yellow);
      padding: 10px;
      transition: 0.3s ease;
      width: 90px;

      &:hover {
        background-color: var(--color-black);
        color: var(--color-white);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    align-items: flex-start;

    .aboutUs__skills {
      margin-top: -28px;
    }

    .aboutUs__joinUs {
      padding: 10px 10px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .aboutUs__skills,
    .aboutUs__joinUs {
      width: 100%;
    }

    .aboutUs__skills {
      margin: 0 0 30px 0;
    }
  }
`;
