import React from 'react';
import { ChangeEvent, FormEvent } from 'react';
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

const Error = styled.div`
  color: ${palette.errorColor};
  text-align: center;
  margin-top: 1rem;
`;

type Props = {
  type: string;
  form: { username: string; password: string; confirmPassword?: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  error: string | null;
};

const AuthForm = ({ type, form, onChange, onSubmit, error }: Props) => {
  const name: any = {
    register: '회원가입',
    login: '로그인',
  };
  const text: string = name[type];

  return (
    <AuthFormBlock>
      <h2>{text}</h2>
      <form onSubmit={onSubmit}>
        <StyledInput
          name="username"
          placeholder="ID"
          value={form.username}
          onChange={onChange}
        />
        <StyledInput
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        {text === '회원가입' && (
          <StyledInput
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            value={form.confirmPassword}
            onChange={onChange}
          />
        )}
        {error && <Error>{error}</Error>}
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

export default React.memo(AuthForm);
