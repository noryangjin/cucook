import React, { ChangeEvent, FormEvent } from 'react';
import {
  PostCommentBlock,
  CommentForm,
  Height,
  CommentInput,
  CommentButton,
  Spacer,
  ComBlock,
  ComListBlock,
  Message,
} from '../styles/post/PostComment.style';
import FlashMessage from 'react-flash-message';

type Props = {
  comments: any;
  loading: boolean;
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  message: string | null;
};

const PostComment = ({
  comments,
  loading,
  input,
  onChange,
  onSubmit,
  message,
}: Props) => {
  if (!loading && !comments) {
    return null;
  }

  return (
    <>
      {message && (
        <FlashMessage duration={3500}>
          <Message messageStyle={message}>
            <div className="text">{message}</div>
          </Message>
        </FlashMessage>
      )}
      <Spacer />
      <PostCommentBlock>
        <CommentForm onSubmit={onSubmit}>
          <CommentInput
            placeholder="댓글을 입력하세요."
            value={input}
            onChange={onChange}
          />
          <CommentButton>입력</CommentButton>
        </CommentForm>
      </PostCommentBlock>
      <ComListBlock>
        <div className="listIcon">댓글목록({comments && comments.length})</div>
        {comments.length > 0 ? (
          comments.map((com: any) => (
            <ComBlock key={com._id}>
              <div className="writer">{com.commentWriter.username}</div>
              <div className="comment">{com.text}</div>
              <div className="commentDate">
                {new Date(com.publishedDate).toLocaleDateString()}
              </div>
            </ComBlock>
          ))
        ) : (
          <div style={{ textAlign: 'center' }}>댓글이 없습니다.</div>
        )}
      </ComListBlock>
      <Height />
    </>
  );
};

export default React.memo(PostComment);
