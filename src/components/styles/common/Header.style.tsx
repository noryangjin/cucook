import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../palette';

export const HeaderBlock = styled.div`
  background: ${palette.Header};
  z-index: 1;
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
  font-size: 1.125rem;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

export const Spacer = styled.div`
  height: 3.1rem;
`;

export const Message = styled.div`
  z-index: 2;
  position: fixed;
  background: ${palette.cyan[3]};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
