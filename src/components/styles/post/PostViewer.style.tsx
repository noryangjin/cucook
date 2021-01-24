import styled from 'styled-components';
import palette from '../palette';

export const PostViewerBlock = styled.div`
  width: 100%;
  h2 {
    font-size: 2rem;
    margin: 1rem 0;
    word-break: break-all;
    text-align: center;
  }
  .titleUser {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .viewsWrite {
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
  }
`;

export const UserDateBlock = styled.div`
  a {
    color: ${palette.gray[6]};
  }
  color: ${palette.gray[6]};
  position: relative;
  width: 100%;
  text-align: center;
  span {
    font-size: 1.125rem;
  }
  span + span::before {
    content: '\\B7';
    padding: 0 5px;
  }
`;

export const Spacer = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid ${palette.gray[5]};
`;

export const SpacerBet = styled.div`
  margin: 0 1rem;
  height: 400px;
  border-right: 1px solid ${palette.gray[5]};
  @media (max-width: 750px) {
    margin: 0;
    border: none;
    height: 0;
  }
`;

export const TagImgBlock = styled.div`
  display: flex;
  h4 {
    margin: 0;
    margin-bottom: 5px;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    img {
      margin: 0 auto;
    }
  }
`;

export const TitleImg = styled.img`
  height: 400px;
  width: 350px;
  object-fit: fill;
`;

export const SpacerTop = styled.div`
  border-top: 1px solid ${palette.gray[5]};
  width: 100%;
  margin: 1rem 0;
  @media (max-width: 750px) {
    width: 0;
    border: none;
  }
`;

export const Tag = styled.div`
  width: 100%;
  .ingredient,
  .tag {
    overflow: auto;
    height: 184px;
    word-break: break-all;
    line-height: 1.5;
    span + span {
      margin-left: 10px;
    }
  }
  @media (max-width: 750px) {
    margin-top: 1rem;
    .ingredient,
    .tag {
      height: 100%;
      text-align: center;
      line-height: 1.5;
    }
  }
`;

export const PostContent = styled.div`
  img {
    max-width: 692px;
  }
  word-break: break-all;
  font-size: 1.125rem;
  line-height: 1.5;
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  .ql-align-justify {
    text-align: justify;
  }
  .ql-editor p {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
  .ql-size-small {
    font-size: 0.75rem;
  }
  .ql-size-large {
    font-size: 1.5rem;
  }
  .ql-size-huge {
    font-size: 2.5rem;
  }
  .ql-indent-1 {
    padding-left: 54px;
  }
  .ql-indent-2 {
    padding-left: 108px;
  }
  .ql-indent-3 {
    padding-left: 162px;
  }
  .ql-indent-1 {
    padding-left: 216px;
  }
  .ql-indent-1 {
    padding-left: 270px;
  }
  .ql-indent-1 {
    padding-left: 324px;
  }
  .ql-indent-1 {
    padding-left: 378px;
  }
  .ql-indent-1 {
    padding-left: 432px;
  }
  img {
    display: block;
    margin: 5px auto;
  }
  @media (max-width: 750px) {
    img {
      width: 350px;
      height: 400px;
      margin-top: 5px;
    }
  }
`;

export const Height = styled.div`
  height: 1.5rem;
`;

export const Error = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: ${palette.errorColor};
`;
