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
  const query = qs.parse(location.search);
  const qs_ = Object.keys(query);

  useEffect(() => {
    const { tag, ingredient, username, category, sort } = qs.parse(
      location.search,
      {
        ignoreQueryPrefix: true,
      }
    );
    dispatch(listPosts({ tag, username, ingredient, category, sort }));
  }, [dispatch, location]);

  return <PostList posts={posts} loading={loading} qs_={qs_} />;
};

export default withRouter(PostListContainer);
