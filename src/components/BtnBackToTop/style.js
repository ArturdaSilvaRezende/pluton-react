import styled from 'styled-components';

export const BtnBackToTop = styled.button`
  background-color: var(--color-yellow);
  border-radius: 5px;
  height: 30px;
  transition: 0.3s ease;
  width: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;

  svg {
    position: relative;
    top: 1px;
  }

  &:hover {
    background-color: var(--color-white);
  }

  @media screen and (max-width: 767px) {
    bottom: 5px;
    height: 25px;
    right: 5px;
    width: 25px;
  }
`;
