import styled from 'styled-components';
import palette from '../palette';

export const PostItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${palette.gray[5]};
  a {
    &:hover {
      color: ${palette.cyan[4]};
    }
  }
  .nameDate {
    padding-top: 1rem;
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
    margin: 1rem 0;
  }
  .linkImg {
  }
  img {
    margin: 0 auto;
    display: block;
    height: 500px;
    max-width: 450px;
    object-fit: fill;
    margin-bottom: 1rem;
  }
  &:nth-child(even) {
    background: ${palette.Header};
  }
  .tagIngre {
    margin-bottom: 1rem;
    overflow: auto;
  }
`;
