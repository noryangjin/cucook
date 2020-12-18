import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const StyledButton: any = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px 3px;
  background: ${palette.cyan[3]};
  &:hover {
    background: ${palette.cyan[6]};
  }
`;

const Button: React.FC<any> = (props) => <StyledButton {...props} />;

export default Button;
