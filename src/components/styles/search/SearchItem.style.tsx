import styled from 'styled-components';
import palette from '../palette';
import { Link } from 'react-router-dom';

export const SearchItemBlock = styled(Link)`
  display: flex;
  align-items: center;
  background: ${palette.Header};
  img {
    width: 400px;
    height: 230px;
    object-fit: fill;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  background: white;
  height: 230px;
  display: flex;
  justify-content: space-between;
  width: 582px;
  margin: 0 1rem;
  .title {
    margin: 0;
    overflow: hidden;
    word-break: break-all;
  }
  .nameDate {
    span + span::before {
      content: '\\B7';
      padding: 0 5px;
    }
  }
  .ingredients,
  .tags {
    overflow: auto;
    max-width: 582px;
    height: 80px;
    word-break: break-all;
    span + span {
      margin-left: 5px;
    }
  }
`;
