import React, { MouseEvent } from 'react';
import {
  PostActionButtonBlock,
  ActionButton,
  ErrorBlock,
  Spacer,
} from '../styles/write/PostActionButton.style';

type Props = {
  onPublish: (e?: MouseEvent<HTMLButtonElement>) => void;
  onCancel: (e?: MouseEvent<HTMLButtonElement>) => void;
  error?: null | string;
};

const PostActionButton = ({ onPublish, onCancel, error }: Props) => {
  return (
    <>
      <PostActionButtonBlock>
        <ErrorBlock>{error && error}</ErrorBlock>
        <div>
          <ActionButton onClick={onPublish}>포스트 등록</ActionButton>
          <ActionButton onClick={onCancel}>취소</ActionButton>
        </div>
      </PostActionButtonBlock>
      <Spacer />
    </>
  );
};

export default React.memo(PostActionButton);
