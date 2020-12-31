import React from 'react';
import {
  PostCommentBlock,
  CommentForm,
  Height,
  CommentInput,
  CommentButton,
  Spacer,
  ComBlock,
  ComListBlock,
} from '../styles/post/PostComment.style';

const PostComment = ({ comments, loading, input, onChange, onSubmit }: any) => {
  if (!loading && !comments) {
    return null;
  }
  const { comments: comment } = comments;

  return (
    <>
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
        <div className="listIcon">댓글목록({comment && comment.length})</div>
        {comment ? (
          comment.map((com: any) => (
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
