import styled from 'styled-components';
import palette from '../../components/styles/palette';

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  .chat {
    border: 2px solid ${palette.gray[4]};
    background: ${palette.Header};
    max-width: 400px;
    height: 500px;

    @media (max-width: 1024px) {
      max-width: 300px;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
