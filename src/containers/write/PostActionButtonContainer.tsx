import { useCallback, MouseEvent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../module/write';
import PostActionButton from '../../components/write/PostActionButton';
import { RootState } from '../../module/index';

const PostActionButtonContainer = ({ history }: RouteComponentProps<any>) => {
  const [error, setError] = useState<null | string>(null);
  const dispatch = useDispatch();
  const {
    category,
    title,
    body,
    ingredients,
    tags,
    titleImg,
    post,
    postError,
  } = useSelector(({ write }: RootState) => ({
    category: write.category,
    title: write.title,
    titleImg: write.titleImg,
    body: write.body,
    ingredients: write.ingredients,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

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
      !category
        ? '카테고리를 입력해주세요'
        : !title.trim()
        ? '제목을 입력해주세요.'
        : !body
        ? '본문을 입력해주세요.'
        : !titleImg
        ? '타이틀 사진이 필요합니다.'
        : postError
        ? '서버 에러'
        : null
    );
  }, [category, title, body, history, titleImg, post, postError]);

  const onPublish = useCallback(
    (e?: MouseEvent<HTMLButtonElement>) => {
      if (title && body && titleImg && category) {
        dispatch(
          writePost({ category, title, titleImg, body, ingredients, tags })
        );
      }
    },
    [dispatch, category, title, body, ingredients, tags, titleImg]
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
