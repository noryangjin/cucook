import styled from 'styled-components';

export const ResponsiveBlock = styled.div`
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
