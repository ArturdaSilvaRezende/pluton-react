import styled from 'styled-components';
import BgNewsLetters from '../../assets/images/ourclients/brand-bg.png';

export const ContactUs = styled.section`
  background-color: var(--color-yellow);
  padding-bottom: 50px;
`;

export const ContactUsNewsletter = styled.div`
  background: url(${BgNewsLetters}) no-repeat center;
  padding: 50px 0;

  .ContactUsNewsletter__container {
    margin: 0 auto;
    width: 90%;

    h1 {
      border-bottom: 1px solid var(--color-white);
      color: var(--color-yellow);
      font-size: 1.5rem;
      padding-bottom: 20px;
    }

    .ContactUsNewsletter__contents {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      p {
        color: var(--color-white);
        line-height: 1.5;
        width: 35%;
      }

      form {
        input {
          color: var(--color-gray);
          padding: 8px 10px;
          width: 400px;
        }

        button {
          background-color: var(--color-yellow);
          margin-left: 10px;
          padding: 10px;
          transition: 0.3s ease;
          width: 110px;

          &:hover {
            background-color: var(--color-white);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .ContactUsNewsletter__container {
      .ContactUsNewsletter__contents {
        p {
          width: 45%;
        }

        form {
          input {
            width: 100%;
          }

          button {
            margin: 10px 0 0 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .ContactUsNewsletter__container {
      .ContactUsNewsletter__contents {
        flex-wrap: wrap;

        p {
          margin-bottom: 40px;
          width: 100%;
        }
        form {
          input {
            width: 100%;
          }

          button {
            margin: 10px 0 0 0;
          }
        }
      }
    }
  }
`;

export const ContactUsMap = styled.div`
  .contactusmap__container {
    display: flex;
    margin: 0 auto;
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    .contactusmap__container {
      flex-direction: column;
    }
  }
`;

export const ContactUsMapForm = styled.form`
  background-color: #e2e3e5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 20px;
  width: 50vw;

  h4 {
    font-size: 2rem;
    border-bottom: 1px solid #838589;
    color: #838589;
    padding-bottom: 10px;
  }

  input {
    margin-top: 20px;
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    margin: 20px 0;
  }

  button {
    border: 1px solid #838589;
    color: #838589;
    padding: 15px 30px;
    font-size: 17px;
    transition: 0.3s ease;

    &:hover {
      background-color: #fafafa;
    }
  }

  input,
  textarea {
    border: 1px solid #838589;
    outline-color: #838589;
    padding: 10px 0 10px 15px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;
