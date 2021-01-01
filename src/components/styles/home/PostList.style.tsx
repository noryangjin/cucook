import { AutoSizer, List } from 'react-virtualized';
import styled from 'styled-components';

export const AutoSizerBlock = styled(AutoSizer)`
  .block {
    display: inline-flex;
    .chat {
      border: 1px solid red;

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

export const ListBlock = styled(List)``;
