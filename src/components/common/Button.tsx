import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/palette';

type Props = {
  children: string;
  cyan: boolean;
  fullWidth: boolean;
};

const StyledButton: any = styled.button<Props>`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px 3px;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      letter-spacing: 2px;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[3]};
      &:hover {
        background: ${palette.cyan[6]};
      }
    `}
`;

const Button: React.FC<Props> = (props) => <StyledButton {...props} />;

export default React.memo(Button);
