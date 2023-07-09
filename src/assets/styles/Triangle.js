import styled from 'styled-components';

export const Triangle = styled.div`
  border-top: 40px solid ${(props) => props.background};
  border-left: 620px solid transparent;
  border-right: 620px solid transparent;
  height: 0;
  margin: 0 auto 0 0;
  width: 90%;
  position: relative;
  left: 50%;
  top: 40px;
  z-index: 998;

  &::after {
    content: ' .';
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    border-left: 440px solid transparent;
    border-right: 440px solid transparent;
    top: 39px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    border-left: 370px solid transparent;
    border-right: 370px solid transparent;
    top: 39px;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    border-left: 280px solid transparent;
    border-right: 280px solid transparent;
    top: 40px;
  }

  @media screen and (min-width: 281px) and (max-width: 599px) {
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    top: 38px;
  }

  @media screen and (max-width: 280px) {
    border-left: 140px solid transparent;
    border-right: 140px solid transparent;
    top: 39px;
  }
`;
