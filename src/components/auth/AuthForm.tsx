import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import palette from '../styles/palette';

type Props = {
  type: string;
};

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid ${palette.gray[5]};
  height: 2rem;
  font-size: 1rem;
  &:focus {
    border-bottom: 2px solid ${palette.gray[6]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  text-transform: uppercase;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: underline;
  }
`;

const AuthForm = ({ type }: Props) => {
  const name: any = {
    register: '회원가입',
    login: '로그인',
  };
  const text = name[type];

  return (
    <AuthFormBlock>
      <h2>{text}</h2>
      <form>
        <StyledInput name="username" placeholder="ID" />
        <StyledInput name="password" placeholder="password" type="password" />
        {text === '회원가입' && (
          <StyledInput
            name="confirm-password"
            placeholder="confirm password"
            type="password"
          />
        )}
        <StyledButton cyan fullWidth>
          {text}
        </StyledButton>
      </form>
      <Footer>
        {text === '로그인' ? (
          <Link to="/register">join</Link>
        ) : (
          <Link to="/login">login</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
