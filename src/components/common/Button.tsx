import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/palette';
import { Link } from 'react-router-dom';

type Props = {
  children: string;
  cyan?: boolean;
  fullWidth?: boolean;
  to?: any;
};

const StyledButton: any = css<Props>`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px 10px;
  background: ${palette.gray[3]};
  &:hover {
    background: ${palette.gray[5]};
  }
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

const ButtonStyled = styled.button`
  ${StyledButton}
`;

const LinkStyled = styled(Link)<any>`
  ${StyledButton}
`;

const Button: React.FC<Props> = (props) => {
  return props.to ? <LinkStyled {...props} /> : <ButtonStyled {...props} />;
};
export default React.memo(Button);
