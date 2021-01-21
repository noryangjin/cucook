import styled, { css } from 'styled-components';
import palette from '../palette';

export const UserInfoBlock = styled.div`
  background: ${palette.Header};
  display: flex;
  flex-wrap: wrap;
  height: 100%;

  h2 {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 328px;
  height: 200px;
  object-fit: fill;
  @media (max-width: 1024px) {
    width: 335px;
  }
  @media (max-width: 700px) {
    width: 260px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const PostInfo = styled.div`
  .viewsDate {
    color: ${palette.gray[6]};
    span + span::before {
      content: '\\B7';
      padding: 0 5px;
    }
  }
`;

type Props = {
  err?: string;
};

export const Error = styled.div<Props>`
  margin-top: 1rem;
  text-align: center;
  ${(props) =>
    props.err &&
    css`
      color: ${palette.errorColor};
    `}
`;
