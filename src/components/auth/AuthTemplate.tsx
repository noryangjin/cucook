import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm, AuthTemplateBlock } from '../styles/auth/AuthTemplate.style';

type Props = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: Props) => {
  return (
    <AuthTemplateBlock>
      <AuthForm>
        <h2 className="logo">
          <Link to="/">cucook</Link>
        </h2>
        {children}
      </AuthForm>
    </AuthTemplateBlock>
  );
};

export default React.memo(AuthTemplate);
