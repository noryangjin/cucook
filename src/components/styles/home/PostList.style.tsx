import { AutoSizer, List } from 'react-virtualized';
import styled from 'styled-components';
import palette from '../palette';

export const AutoSizerBlock = styled(AutoSizer)`
  .block {
    max-width: 1014px;
    display: inline-flex;
    @media (max-width: 1024px) {
      max-width: 690px;
    }
    .chat {
      border: 1px solid ${palette.cyan[3]};
      background: ${palette.Header};
      width: 60%;
      height: 500px;
    }
    @media (max-width: 700px) {
      .chat {
        display: none;
      }
    }
  }
`;

export const ListBlock = styled(List)`
  a {
    color: ${palette.cyan[4]};
  }
`;
