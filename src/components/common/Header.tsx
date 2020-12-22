import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import palette from '../styles/palette';
import { Link } from 'react-router-dom';
import FlashMessage from 'react-flash-message';

const HeaderBlock = styled.div`
  width: 100%;
  position: fixed;
  border-bottom: 1px solid ${palette.gray[3]};
  box-shadow: 0px 3px 1px rgba(41, 33, 33, 0.08);
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.125rem;
  }
  a {
    text-transform: uppercase;
  }
  button {
    text-transform: uppercase;
  }
  .right {
    display: flex;
  }
`;

const UserInfo = styled.div`
  font-size: 1.125rem;
  margin-right: 5px;
`;

const Spacer = styled.div`
  height: 4.5rem;
`;

const Message = styled.div`
  z-index: 1;
  position: fixed;
  background: ${palette.cyan[3]};
  width: 100%;
  height: 4rem;
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

type typeProps = {
  user: any;
  onLogout: (e: MouseEvent<HTMLButtonElement>) => void;
  welcomeMessage: string;
};

const Header = ({ user, onLogout, welcomeMessage }: typeProps) => {
  return (
    <>
      {welcomeMessage && (
        <FlashMessage duration={3500}>
          <Message>
            <div className="text">{welcomeMessage}</div>
          </Message>
        </FlashMessage>
      )}
      <HeaderBlock>
        <Wrapper>
          <div className="logo">
            <Link to="/">cucook</Link>
          </div>
          <div className="right">
            {user ? (
              <>
                <UserInfo>{user.username}</UserInfo>
                <Button onClick={onLogout}>logout</Button>
              </>
            ) : (
              <Button to="/login">login</Button>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
