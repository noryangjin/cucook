import React, { MouseEvent } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import FlashMessage from 'react-flash-message';
import {
  HeaderBlock,
  Wrapper,
  UserInfo,
  Spacer,
  Message,
} from '../styles/common/Header.style';

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
