import styled from 'styled-components';
import palette from '../palette';

export const ScrollButton = styled.button`
  position: fixed;
  right: 70px;
  bottom: 70px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .chatBlock {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div + div {
    margin-top: 1rem;
  }
  div {
    width: 30px;
    height: 30px;
    border-radius: 60%;
    &:hover {
      background: ${palette.gray[5]};
    }
  }
  background: none;

  @media (max-width: 1200px) {
    right: 10px;
    bottom: 50px;
  }
  @media (max-width: 395px) {
    display: none;
  }
`;

export const ChatBlock = styled.div`
  background: white;
  position: fixed;
  width: 330px;
  bottom: 70px;
  right: 100px;
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 1200px) {
    right: 50px;
    bottom: 70px;
  }
`;
