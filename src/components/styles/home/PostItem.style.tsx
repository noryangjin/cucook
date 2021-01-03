import styled from 'styled-components';
import palette from '../palette';

export const PostItemBlock = styled.div<any>`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-bottom: 2px solid ${palette.gray[4]};
  background: ${palette.Header};

  .Block {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px;
    margin-bottom: 0;
    max-height: 700px;
    background: white;
  }
  .name {
    font-weight: bold;
    font-size: 1.17em;
  }
  .date {
    color: ${palette.gray[6]};
  }
  h3 {
    margin: 1rem 0;
  }
  .tagIngre {
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 100%;
    background: white;
    margin: 10px;
    overflow: auto;
  }
  img {
    margin: 0 auto;
    display: block;
    height: 400px;
    width: 100%;
    object-fit: fill;
    margin-bottom: 1rem;
  }
`;
