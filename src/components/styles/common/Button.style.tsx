import { MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import palette from '../palette';
import { Link } from 'react-router-dom';

type Props = {
  children: string;
  cyan?: boolean;
  fullWidth?: boolean;
  to?: any;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton: any = css<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
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
      background: ${palette.cyan[2]};
      &:hover {
        background: ${palette.cyan[5]};
      }
    `}
`;

export const ButtonStyled = styled.button`
  ${StyledButton}
`;

export const LinkStyled = styled(Link)<any>`
  ${StyledButton}
`;
