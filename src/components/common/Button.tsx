import React from 'react';
import { ButtonStyled, LinkStyled } from '../styles/common/Button.style';

type Props = {
  children: any;
  cyan?: boolean;
  fullWidth?: boolean;
  to?: any;
  onClick?: () => void;
};

const Button = (props: Props) => {
  return props.to ? (
    <LinkStyled {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <ButtonStyled {...props} />
  );
};

export default React.memo(Button);
