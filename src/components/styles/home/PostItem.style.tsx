import styled, { css } from 'styled-components';
import palette from '../palette';

export const PostItemBlock = styled.div<any>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${palette.gray[4]};
  padding: 5px;

  ${(props) =>
    props.index &&
    css`
      margin-top: ${props.index * 2}rem;
    `}

  .nameDate {
    padding-top: 1rem;
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
  .linkImg {
  }
  img {
    margin: 0 auto;
    display: block;
    height: 400px;
    max-width: 550px;
    object-fit: fill;
    margin-bottom: 1rem;
    @media (max-width: 1020px) {
      max-width: 430px;
    }
    @media (max-width: 500px) {
      max-width: 360px;
    }
  }
  &:nth-child(even) {
    background: ${palette.Header};
  }

  .tagIngre {
    margin-bottom: 1rem;
    overflow: auto;
  }
`;
