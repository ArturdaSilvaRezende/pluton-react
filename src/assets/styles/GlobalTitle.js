import styled from 'styled-components';

const GlobalTitle = styled.div`
  padding: 50px 0;
  text-align: center;

  h1 {
    color: ${(props) => props.title};
    font-size: 3rem;
  }
  h2 {
    color: ${(props) => props.subtitle};
    font-size: 1.4rem;
    margin: 20px auto;
    width: 90%;
  }
  hr {
    background-color: ${(props) => props.line};
    height: 2px;
    margin: 0 auto;
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.1rem;
    }
  }
`;

export default GlobalTitle;
