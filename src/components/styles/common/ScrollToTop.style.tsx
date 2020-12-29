import styled from 'styled-components';
import palette from '../palette';

export const ScrollButton = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  border: none;
  border-radius: 60%;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[5]};
  }
  background: none;

  @media (max-width: 1200px) {
    right: 10px;
    bottom: 50px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
