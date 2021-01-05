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

  linkTo: string;
  welcomeMessage: string;
};

const Header = ({ user, onLogout, welcomeMessage, linkTo }: typeProps) => {
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
            <Link to={linkTo}>cucook</Link>
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

export default React.memo(Header);
