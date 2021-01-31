import React from 'react';
import AskDeleteModal from '../../../components/post/modal/AskDeleteModal';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
  loading: boolean;
};

const AskDeleteModalContainer = ({ onCancel, onConfirm, loading }: Props) => {
  return (
    <AskDeleteModal
      onCancel={onCancel}
      onConfirm={onConfirm}
      loading={loading}
      title="포스트 삭제"
      description="포스트를 정말 삭제하시겠습니까?"
      confirmText="삭제"
    />
  );
};

export default React.memo(AskDeleteModalContainer);
