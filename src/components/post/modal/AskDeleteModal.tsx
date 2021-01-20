import React from 'react';
import {
  AskDeleteModalBlock,
  ModalButton,
  Wrapper,
} from '../../styles/post/modal/AskDeleteModal.style';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText: string;
};

const AskDeleteModal = ({
  onCancel,
  onConfirm,
  title,
  description,
  confirmText,
}: Props) => {
  return (
    <AskDeleteModalBlock>
      <Wrapper>
        <h2>{title}</h2>
        {description}
        <div className="buttonBlock">
          <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
          <ModalButton cyan onClick={onCancel}>
            취소
          </ModalButton>
        </div>
      </Wrapper>
    </AskDeleteModalBlock>
  );
};

export default React.memo(AskDeleteModal);
