import { useEffect, useState } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../module/post';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../module/index';

const PostViewerContainer = ({ match }: RouteComponentProps<any>) => {
  const { postId } = match.params;
  const [error, setError] = useState<null | string>(null);
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(
    ({ post, loading }: RootState) => ({
      post: post.post,
      postError: post.postError,
      loading: loading['post/READ_POST'],
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

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} error={error} loading={loading} />;
};

export default withRouter(PostViewerContainer);
