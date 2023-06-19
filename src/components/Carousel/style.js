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
    .swiper-button-next,
    .swiper-button-prev {
      background-color: rgba(0, 0, 0, 0.5);
      bottom: 0;
      height: 100vh;
      top: 0;
      width: 60px;
      transition: 0.3s ease;

      img {
        position: absolute;
        top: 200px;
        width: 40px;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.9);
      }
    }

    .swiper-button-next {
      right: 0;

      &::after {
        display: none;
      }
    }
    .swiper-button-prev {
      left: 0;

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
          object-fit: cover;
          width: 70%;
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .mySwiper {
      .swiper-button-next,
      .swiper-button-prev {
        img {
          top: 130px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .mySwiper {
      .swiper-button-next,
      .swiper-button-prev {
        img {
          top: 130px;
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
            width: 70%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-size: cover;
    background-position: center center;

    .mySwiper {
      .swiper-button-next,
      .swiper-button-prev {
        width: 40px;
        height: auto;

        img {
          width: 20px;
          top: 300px;
        }
      }
      .mySwiper__item {
        flex-direction: column;
        margin: 100px 0 20px 0;

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
            margin: 30px auto 0 auto;
            width: 70%;
          }
        }
      }
    }
  }
`;
