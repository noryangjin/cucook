import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 5px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 360px;
  }
`;

type typeProps = {
  children: React.ReactNode;
  rest?: any;
};

const Responsive = ({ children, ...rest }: typeProps) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
