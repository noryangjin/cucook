import styled from 'styled-components';
import palette from '../palette';

export const PostViewerBlock = styled.div`
  width: 100%;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .titleUser {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const UserDateBlock = styled.div`
  color: ${palette.gray[6]};
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
  line-height: 1.5;
  img {
    display: block;
    margin: 5px 0;
  }
  @media (max-width: 750px) {
    img {
      width: 350px;
      height: 400px;
      margin: 0 auto;
      margin-top: 5px;
    }
  }
`;

export const Height = styled.div`
  height: 1.5rem;
`;

export const Error = styled.div`
  color: ${palette.errorColor};
`;
