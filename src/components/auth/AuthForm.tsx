import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import palette from '../styles/palette';

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
  width: 100%;
  margin-top: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 1px solid gray;
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h2>로그인</h2>
      <form>
        <StyledInput name="username" placeholder="username" />
        <StyledInput name="password" placeholder="password" type="password" />
        <StyledButton>login</StyledButton>
      </form>
      <Footer>
        <Link to="/register">join</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
