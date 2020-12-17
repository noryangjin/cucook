import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const StyledButton: any = styled.button`
  border: none;
  cursor: pointer;
  background: ${palette.cyan[7]};
`;

const Button: React.FC<any> = (props) => <StyledButton {...props} />;

export default Button;
