import { useEffect } from 'react';
import qs from 'qs';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../../module/posts';
import PostList from '../../components/home/PostList';
import { RootState } from '../../module/index';

const PostListContainer = ({ location }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ posts, loading }: RootState) => ({
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));
  useEffect(() => {
    const { tag, ingredient, username, category } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, ingredient, category }));
  }, [dispatch, location]);

  return <PostList posts={posts} loading={loading} />;
};

export default withRouter(PostListContainer);
