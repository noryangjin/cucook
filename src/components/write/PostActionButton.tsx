import React from 'react';
import {
  PostActionButtonBlock,
  ActionButton,
  ErrorBlock,
  Spacer,
} from '../styles/write/PostActionButton.style';

type Props = {
  onPublish: () => void;
  onCancel: () => void;
  error?: null | string;
  isEdit: boolean;
};

const PostActionButton = ({ onPublish, onCancel, error, isEdit }: Props) => {
  return (
    <>
      <PostActionButtonBlock>
        <ErrorBlock>{error && error}</ErrorBlock>
        <div style={{ display: 'flex' }}>
          <ActionButton onClick={onPublish} cyan>
            포스트 {isEdit ? '수정' : '등록'}
          </ActionButton>
          <ActionButton onClick={onCancel} cyan>
            취소
          </ActionButton>
        </div>
      </PostActionButtonBlock>
      <Spacer />
    </>
  );
};

export default React.memo(PostActionButton);
