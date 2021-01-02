import React, { MouseEvent } from 'react';
import { ButtonStyled, LinkStyled } from '../styles/common/Button.style';

type Props = {
  children: string;
  cyan?: boolean;
  fullWidth?: boolean;
  to?: any;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: Props) => {
  return props.to ? <LinkStyled {...props} /> : <ButtonStyled {...props} />;
};

export default React.memo(Button);
