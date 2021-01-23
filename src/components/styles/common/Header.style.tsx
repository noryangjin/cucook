import styled, { css } from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../palette';

export const HeaderBlock = styled.div`
  background: ${palette.Header};
  z-index: 40;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid ${palette.gray[3]};
  box-shadow: 0px 3px 1px rgba(41, 33, 33, 0.08);
`;

export const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  .logo {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.125rem;
    font-weight: bold;
  }
  a {
    text-transform: uppercase;
  }
  button {
    text-transform: uppercase;
  }
  .right {
    display: flex;
    height: 30px;
  }
`;

export const UserInfo = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  max-width: 50px;
  font-size: x-small;
  font-weight: bold;
  justify-content: flex-end;
  letter-spacing: 2px;
  @media (max-width: 500px) {
    max-width: 30.5px;
    overflow: auto;
  }
`;

export const Spacer = styled.div`
  height: 3rem;
`;

type Props = {
  error?: string;
};

export const Message = styled.div<Props>`
  z-index: 50;
  position: fixed;
  background: ${palette.cyan[3]};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.error &&
    css`
      z-index: 51;
      background: ${palette.errorColor};
    `}

  @keyframes okAnimation {
    0% {
      opacity: 25%;
      transform: translateY(-30px);
    }
    30% {
      transform: translateY(0);
      opacity: 100%;
    }
    70% {
      transform: translateY(0);
      opacity: 100%;
    }
    80% {
      transform: translateY(-15px);
      opacity: 50%;
    }
    90% {
      transform: translateY(-30px);
      opacity: 25%;
    }
    100% {
      transform: translateY(-40px);
      opacity: 0%;
    }
  }
  animation: okAnimation 3.5s linear forwards;
  .text {
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 500px;
  height: 25px;
  border-bottom: 1px solid ${palette.gray[4]};

  input {
    width: 100%;
    outline: none;
    border: none;
    background: none;
    height: 25px;
    &:focus {
      border-bottom: 1px solid black;
    }
  }
  button {
    width: 50px;
    padding-right: 0;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 350px;
  }
  @media (max-width: 700px) {
    width: 200px;
  }
  @media (max-width: 500px) {
    width: 120px;
  }
`;
