import React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AuthFormBlock,
  StyledInput,
  StyledButton,
  Footer,
  Error,
} from '../styles/auth/AuthForm.style';

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
