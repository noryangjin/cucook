import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import palette from '../palette';

export const PostCommentBlock = styled.div`
  margin-bottom: 2rem;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 5rem;
  width: 700px;
  margin: 0 auto;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const CommentInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  border-radius: 4px;
  padding-left: 4px;
  border: 1px solid ${palette.gray[5]};
  &:focus,
  &:hover {
    background: ${palette.Header};
    border: 1px solid ${palette.gray[6]};
  }
`;

export const CommentButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const Spacer = styled.div`
  border-top: 1px solid ${palette.gray[5]};
  width: 100%;
  margin-bottom: 2rem;
`;

export const Height = styled.div`
  height: 2rem;
`;

export const ComBlock = styled.div`
  background: ${palette.Header};
  width: 700px;
  margin: 0 auto;
  margin-top: 1rem;
  align-items: center;
  display: flex;
  .comment {
    width: 60%;
    text-align: center;
    border-left: 1px solid ${palette.gray[5]};
    border-right: 1px solid ${palette.gray[5]};
    word-break: break-all;
  }
  .writer {
    width: 20%;
    text-align: center;
  }
  .commentDate {
    width: 20%;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  button {
    outline: none;
    border: none;
    background: ${palette.Header};
    cursor: pointer;
    &:hover {
      background: ${palette.errorColor};
    }
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ComListBlock = styled.div`
  .listIcon {
    width: 700px;
    margin: 0 auto;
    margin-bottom: 1rem;
    color: ${palette.errorColor};
    display: flex;
    align-items: center;
    svg {
      cursor: pointer;
      color: black;
      margin-left: 1rem;
      &:hover {
        background: ${palette.gray[5]};
      }
    }
    @media (max-width: 750px) {
      width: 100%;
    }
  }
`;

type Props = {
  messageStyle: string;
};

export const Message: any = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  background: ${palette.cyan[3]};
  height: 3rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  @keyframes okAnimation {
    0% {
      opacity: 25%;
      transform: translateY(-30px);
    }
    30% {
      transform: translateY(0);
      opacity: 100%;
    }
    70% {
      transform: translateY(0);
      opacity: 100%;
    }
    80% {
      transform: translateY(-15px);
      opacity: 50%;
    }
    90% {
      transform: translateY(-30px);
      opacity: 25%;
    }
    100% {
      transform: translateY(-40px);
      opacity: 0%;
    }
  }
  animation: okAnimation 3.5s linear forwards;
  .text {
    font-weight: bold;
    letter-spacing: 2px;
  }
  ${(props) =>
    props.messageStyle &&
    props.messageStyle.includes('로그인이 필요합니다.') &&
    css`
      background: ${palette.errorColor};
    `}
`;
