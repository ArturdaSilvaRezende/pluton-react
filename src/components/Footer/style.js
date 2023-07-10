import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--color-black);
  padding: 50px 0;

  a {
    color: var(--color-yellow);
    margin-left: 5px;
    transition: 0.3s ease;

    &:hover {
      color: var(--color-white);
    }
  }

  .footer__copright {
    border-top: 1px solid var(--color-white);
    padding-top: 30px;
    text-align: center;

    p {
      color: var(--color-white);
      font-size: 1.1rem;

      &:last-child {
        margin-top: 15px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer__copright {
      border-top: 1px solid var(--color-black);
    }
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 50px;

  .footer__item {
    h2 {
      border-bottom: 1px solid var(--color-white);
      color: var(--color-yellow);
      font-size: 1.4rem;
      margin-bottom: 20px;
      text-align: center;
      padding-bottom: 15px;
    }

    address {
      p {
        color: var(--color-white);

        & + p {
          margin-top: 10px;
        }

        a {
          color: var(--color-yellow);

          &:hover {
            color: var(--color-white);
          }
        }
      }
    }

    ul {
      display: flex;
      justify-content: center;
      text-align: center;

      li {
        background-color: var(--color-yellow);
        border-radius: 7px;
        color: var(--color-black);
        cursor: pointer;
        font-size: 1.1rem;
        height: 35px;
        line-height: 40px;
        transition: 0.3s ease;
        width: 35px;

        &:hover {
          background-color: var(--color-white);
        }

        & + li {
          margin-left: 10px;
        }
      }
    }

    form {
      display: flex;
      input {
        border: none;
        border-radius: 5px 0px 0px 5px;
        padding: 10px 0 10px 15px;
        outline: none;
        width: 100%;
      }

      button {
        background-color: var(--color-yellow);
        border-radius: 0px 5px 5px 0px;
        padding: 10px;
        transition: 0.3s ease;

        &:hover {
          background-color: var(--color-white);
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 100%;

    .footer__item {
      h2 {
        text-align: left;
      }

      ul {
        justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .footer__item {
      margin-top: 40px;

      form {
        input {
          width: 60%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer__item {
      margin-top: 30px;
    }
  }
`;
