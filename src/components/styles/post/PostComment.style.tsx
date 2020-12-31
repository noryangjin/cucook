import styled from 'styled-components';
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
    @media (max-width: 750px) {
      width: 100%;
    }
  }
`;
