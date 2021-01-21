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
import { Link } from 'react-router-dom';
import FlashMessage from 'react-flash-message';
import { MdCancel } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';

type Props = {
  comments: any;
  loading: boolean;
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onRemove: any;
  user: any;
  option: boolean;
  onClick: any;
  onCancel: any;
  message: string | null;
};

const PostComment = ({
  comments,
  loading,
  input,
  option,
  onCancel,
  onChange,
  onSubmit,
  onClick,
  message,
  user,
  onRemove,
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
        <div className="listIcon">
          댓글목록({comments && comments.length})
          {option ? (
            <MdCancel onClick={onCancel} />
          ) : (
            <IoMdOptions onClick={onClick} />
          )}
        </div>
        {comments.length > 0 ? (
          comments.map((com: any) => {
            const {
              commentWriter: { username, _id },
              publishedDate,
              text,
              _id: id,
            } = com;
            return (
              <ComBlock key={id}>
                <div className="writer">
                  <Link to={`/@${username}`}>{username}</Link>
                </div>
                <div className="comment">{text}</div>
                <div className="commentDate">
                  {new Date(publishedDate).toLocaleDateString()}
                </div>
                {option && user && _id === user._id && (
                  <div style={{ fontSize: '10px', fontWeight: 'bold' }}>
                    <button value={id} key={id} onClick={onRemove}>
                      ❌
                    </button>
                  </div>
                )}
              </ComBlock>
            );
          })
        ) : (
          <div style={{ textAlign: 'center' }}>댓글이 없습니다.</div>
        )}
      </ComListBlock>
      <Height />
    </>
  );
};

export default React.memo(PostComment);
