import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--color-black);

  margin-bottom: -40px;
  padding: 15px;

  .header__logo {
    img {
      width: 130px;
    }
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 992px) {
    position: relative;

    .header__logo {
      img {
        width: 120px;
      }
    }
  }
`;

export const HeaderNav = styled.div`
  button {
    background-color: var(--color-yellow);
    border-radius: 5px;
    color: var(--color-black);
    display: none;
    font-size: 1.2rem;
    padding: 3px;
    width: 35px;

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

  @media screen and (max-width: 820px) {
    button {
      display: block;
    }

    nav {
      background-color: var(--color-black);
      position: absolute;
      left: 0;
      right: 0;
      top: 69px;

      ul {
        flex-direction: column;

        & + li {
          margin-top: 15px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    nav {
      ul {
        margin: 0 15px 15px 45px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    nav {
      ul {
        margin: 0 15px 15px 25px;
      }
    }
  }
`;
