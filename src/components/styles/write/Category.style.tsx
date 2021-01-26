import styled from 'styled-components';
import palette from '../palette';

export const CategoryBlock = styled.div`
  padding: 0 5px;
  max-width: 280px;
  margin-top: 10px;
  .cusSelectbox {
    height: 32px;
    width: 100%;
    outline: none;
    border: none;
    border: 1px solid ${palette.gray[4]};
    &:focus,
    &:hover {
      background: ${palette.Header};
      border: 1px solid ${palette.gray[5]};
    }
  }
`;

export const SelectedItem = styled.div``;
