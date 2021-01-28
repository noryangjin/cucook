import React, { ChangeEvent, FormEvent } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import FlashMessage from 'react-flash-message';
import {
  HeaderBlock,
  Wrapper,
  UserInfo,
  Spacer,
  Message,
  Form,
} from '../styles/common/Header.style';
import { GrSearch } from 'react-icons/gr';

type typeProps = {
  user: any;
  onLogout: () => void;
  message: string;
  welcomeMessage: string;
  term: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Header = ({
  user,
  onSubmit,
  onLogout,
  message,
  term,
  welcomeMessage,
  onChange,
}: typeProps) => {
  return (
    <>
      {message && (
        <FlashMessage duration={3500}>
          <Message error="error">
            <div className="text">{message}</div>
          </Message>
        </FlashMessage>
      )}
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
          <Form onSubmit={onSubmit}>
            <input value={term} onChange={onChange} placeholder="search.." />
            <button>
              <GrSearch />
            </button>
          </Form>
          <div className="right">
            {user ? (
              <>
                <UserInfo>
                  <Link to={`/user/@${user.username}`}>{user.username}</Link>
                </UserInfo>
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
