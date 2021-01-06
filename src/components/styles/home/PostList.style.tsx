import { AutoSizer, List } from 'react-virtualized';
import styled from 'styled-components';
import palette from '../palette';

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
