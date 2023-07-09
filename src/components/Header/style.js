import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -40px;
  padding: 15px;

  .header__logo {
    img {
      width: 200px;
    }
  }

  @media screen and (max-width: 992px) {
    position: relative;

    .header__logo {
      img {
        width: 150px;
      }
    }
  }
`;

export const HeaderNav = styled.div`
  //animation = navbar
  .zoomInUp {
    animation-name: zoomInUp;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes zoomInUp {
    0% {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  button {
    background-color: var(--color-yellow);
    border-radius: 5px;
    color: var(--color-black);
    display: none;
    font-size: 1.2rem;
    padding: 5px;
    width: 40px;

    svg {
      margin-top: 3px;
    }
  }

  nav {
    z-index: 999;

    ul {
      display: flex;
      justify-content: space-between;

      li {
        a {
          border: 1px solid transparent;
          border-radius: 5px;
          color: var(--color-white);
          cursor: pointer;
          display: block;
          padding: 10px;
          transition: 0.5s ease;
          text-transform: uppercase;

          &:hover {
            border: 1px solid var(--color-yellow);
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    button {
      display: block;
    }

    nav {
      background-color: var(--color-black);
      position: absolute;
      left: 0;
      right: 0;
      top: 80px;

      ul {
        flex-direction: column;
        margin: 0 15px 15px 5px;

        & + li {
          margin-top: 15px;
        }
      }
    }
  }
`;
