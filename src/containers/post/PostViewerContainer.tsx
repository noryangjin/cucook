import { useCallback, useEffect, useState } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../module/post';
import { setOriginalPost } from '../../module/write';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../module/index';
import axios from 'axios';

const PostViewerContainer = ({ match, history }: RouteComponentProps<any>) => {
  const { postId } = match.params;
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const { post, postError, loading, user } = useSelector(
    ({ post, loading, user }: RootState) => ({
      post: post.post,
      postError: post.postError,
      loading: loading['post/READ_POST'],
      user: user.user,
    })
  );

  useEffect(() => {
    if (postError) {
      const { status } = postError.response;
      if (status === 400 || status === 404) {
        return setError('Post를 찾을 수 없습니다.');
      }
    }
  }, [postError]);

  useEffect(() => {
    dispatch(readPost(postId));
    axios(`/api/post/view/${postId}`, {
      baseURL: 'http://www.cucook.net:4000/',
      method: 'POST',
    });
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = useCallback(() => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  }, [history, post, dispatch]);

  const ownPost = (user && user._id) === (post && post.writer._id);

  return (
    <PostViewer
      post={post}
      error={error}
      loading={loading}
      ownPost={ownPost}
      onEdit={onEdit}
      user={user}
    />
  );
};

export default withRouter(PostViewerContainer);
