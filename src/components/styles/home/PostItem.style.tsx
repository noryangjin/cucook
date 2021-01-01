import styled from 'styled-components';
import palette from '../palette';

export const PostItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${palette.gray[5]};
  .nameDate {
    padding-top: 5px;
    span + span::before {
      content: '\\B7';
      margin: 0 0.25rem;
    }
    .name {
      font-weight: bold;
    }
    .date {
      color: ${palette.gray[6]};
    }
  }
  h3 {
    margin: 10px 0;
  }
  img {
    height: 500px;
    object-fit: scale-down;
    margin-bottom: 10px;
  }
  &:nth-child(even) {
    background: ${palette.Header};
  }
`;
