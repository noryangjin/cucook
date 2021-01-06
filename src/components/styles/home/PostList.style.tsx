import { AutoSizer, List } from 'react-virtualized';
import styled from 'styled-components';
import palette from '../palette';

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

export const AutoSizerBlock = styled(AutoSizer)`
  max-width: 614px;
`;

export const ListBlock = styled(List)`
  max-width: 614px;
  @media (max-width: 1024px) {
    max-width: 390px;
  }
  @media (max-width: 700px) {
    max-width: 600px;
  }
  a {
    color: ${palette.cyan[4]};
  }
`;
