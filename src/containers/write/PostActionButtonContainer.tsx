import { useCallback, MouseEvent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../module/write';
import PostActionButton from '../../components/write/PostActionButton';
import { RootState } from '../../module/index';

const PostActionButtonContainer = ({ history }: RouteComponentProps<any>) => {
  const [error, setError] = useState<null | string>(null);
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(
    ({ write }: RootState) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    })
  );

  useEffect(() => {
    if (post) {
      const {
        writer: { username },
        _id,
      } = post;
      history.push(`/@${username}/${_id}`);
    }
    if (postError) {
      if (postError.response.status === 403) {
        alert('로그인 하셔야 합니다.');
        history.push('/login');
      }
    }
    setError(
      !title.trim()
        ? '제목을 입력해주세요.'
        : !body
        ? '본문을 입력해주세요.'
        : postError
        ? '서버 에러'
        : null
    );
  }, [title, body, history, post, postError]);

  const onPublish = useCallback(
    (e?: MouseEvent<HTMLButtonElement>) => {
      if (title && body) {
        dispatch(writePost({ title, body, tags }));
      }
    },
    [dispatch, title, body, tags]
  );

  const onCancel = useCallback(
    (e?: MouseEvent<HTMLButtonElement>) => {
      history.goBack();
    },
    [history]
  );

  return (
    <PostActionButton onPublish={onPublish} onCancel={onCancel} error={error} />
  );
};

export default withRouter(PostActionButtonContainer);
