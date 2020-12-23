import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../palette';

export const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const StyledInput = styled.input`
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

export const StyledButton = styled(Button)`
  margin-top: 1rem;
  text-transform: uppercase;
`;

export const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  color: ${palette.errorColor};
  text-align: center;
  margin-top: 1rem;
`;
