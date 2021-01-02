import styled from 'styled-components';

export const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 5px;
  @media (max-width: 1024px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 550px;
  }
  @media (max-width: 500px) {
    width: 360px;
    padding: 0;
  }
`;
