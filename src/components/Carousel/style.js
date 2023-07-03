import styled from 'styled-components';
import BgCarousel from '../../assets/images/carousel/Slider.jpg';

export const Carousel = styled.section`
  background: url(${BgCarousel});
  background-repeat: repeat-x 0% center;
  background-size: auto 100%;
  position: relative;

  .carousel__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fece1a;
    opacity: 0.85;
  }

  .mySwiper {
    .carousel__button-next,
    .carousel__button-prev {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      bottom: 0;
      height: 100vh;
      top: 0;
      width: 60px;
      transition: 0.3s ease;
      z-index: 2;

      img {
        position: absolute;
        top: 120px;
        width: 40px;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.9);
      }
    }

    .carousel__button-next {
      right: 0;

      img {
        right: 5px;
      }

      &::after {
        display: none;
      }
    }
    .carousel__button-prev {
      left: 0;

      img {
        left: 5px;
      }

      &::after {
        display: none;
      }
    }

    .mySwiper__item {
      display: flex;
      align-items: center;
      margin: 80px 0 40px 0;

      .mySwiper__description {
        text-align: center;

        h1,
        h2,
        button,
        p {
          text-shadow: 0 0 40px var(--color-yellow);
          font-weight: bold;
        }

        h1 {
          font-size: 1.6rem;
        }

        h2 {
          font-size: 1.4rem;
        }

        p {
          margin: 20px auto;
          width: 65%;
        }

        button {
          border: 1px solid var(--color-black);
          border-radius: 5px;
          padding: 8px;
          width: 120px;
          transition: 0.3s ease;

          &:hover {
            background-color: var(--color-black);
            color: var(--color-white);
          }
        }
      }

      .mySwiper__img {
        img {
          object-fit: contain;
          width: 50%;
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .mySwiper {
      .carousel__button-next,
      .carousel__button-prev {
        img {
          top: 130px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .mySwiper {
      .carousel__button-next,
      .carousel__button-prev {
        img {
          width: 30px;
          top: 120px;
        }
      }

      .mySwiper__item {
        margin: 60px 0 30px 0;

        .mySwiper__description {
          margin-left: 20px;
          width: 70%;

          h1 {
            font-size: 1.4rem;
          }

          h2 {
            font-size: 1.2rem;
          }

          p {
            margin: 20px auto;
            width: 80%;
          }
        }

        .mySwiper__img {
          width: 50%;

          img {
            width: 60%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-size: cover;
    background-position: center center;

    .mySwiper {
      .carousel__button-next,
      .carousel__button-prev {
        background-color: rgba(0, 0, 0, 0.1);
        height: auto;
        width: 37px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }

        img {
          width: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .mySwiper__item {
        flex-direction: column;
        margin: 60px 0 20px 0;

        .mySwiper__description {
          text-align: center;

          h1 {
            font-size: 1rem;
          }

          h2 {
            font-size: 0.9rem;
          }

          p {
            font-size: 0.95rem;
            margin: 20px auto;
            width: 65%;
          }

          button {
            margin-bottom: 20px;
          }
        }

        .mySwiper__img {
          img {
            object-fit: contain;
            margin: 30px auto 0 auto;
            width: 50%;
          }
        }
      }
    }
  }
`;
