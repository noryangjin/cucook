import styled from 'styled-components';
import palette from '../../styles/palette';

export const AuthTemplateBlock = styled.div`
  a {
    color: black;
  }
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

export const AuthForm = styled.div`
  width: 340px;
  background: white;
  border-radius: 4px;
  padding: 1rem 1rem;
  border: 1px solid ${palette.gray[4]};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  .logo {
    text-align: center;
    margin: 1rem 0;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
