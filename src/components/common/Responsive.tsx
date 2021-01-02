import React from 'react';
import { ResponsiveBlock } from '../styles/common/Responsive.style';

type typeProps = {
  children: React.ReactNode;
  rest?: any;
};

const Responsive = ({ children, ...rest }: typeProps) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
