import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonBlock,
  ActionButton,
} from '../styles/post/PostUpdateDeleteButton.style';
import { deletePost } from '../../lib/api/post';
import { withRouter } from 'react-router-dom';
import AskDeleteModalContainer from '../../containers/post/modal/AskDeleteModalContainer';
import { changeMessage } from '../../module/message';
import Loading from '../ask/SendLoading';

const PostUpdateDeleteButton = ({ onEdit, match, history }: any) => {
  const { postId } = match.params;
  const [modal, setMoDal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    setMoDal(true);
  };

  const onCancel = () => {
    setMoDal(false);
  };

  const onConfirm = useCallback(async () => {
    setMoDal(false);
    setLoading(true);
    try {
      await deletePost(postId)
        .then(() => {
          setLoading(false);
          dispatch(changeMessage('포스트가 삭제되었습니다.'));
        })
        .then(() => history.push('/'));
    } catch (e) {
      console.error(e);
    }
  }, [postId, history, dispatch]);

  return (
    <>
      {loading && <Loading />}
      <ButtonBlock>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      </ButtonBlock>
      {modal && (
        <AskDeleteModalContainer onCancel={onCancel} onConfirm={onConfirm} />
      )}
    </>
  );
};

export default withRouter(React.memo(PostUpdateDeleteButton));
