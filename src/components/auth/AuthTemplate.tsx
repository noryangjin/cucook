import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../styles/palette';

const AuthTemplateBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: ${palette.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthForm = styled.div`
  width: 340px;
  background: white;
  border-radius: 4px;
  padding: 1rem 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  .logo {
    text-align: center;
    margin: 1rem 0;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => {
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
