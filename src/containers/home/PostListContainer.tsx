import { useEffect, useCallback } from 'react';
import qs from 'qs';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../../module/posts';
import PostList from '../../components/home/PostList';
import { RootState } from '../../module/index';
import { searchInitialstate } from '../../module/searchPost';

const PostListContainer = ({ location, history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { posts } = useSelector(({ posts }: RootState) => ({
    posts: posts.posts,
  }));
  const query = qs.parse(location.search);
  const qs_ = Object.keys(query);

  useEffect(() => {
    dispatch(searchInitialstate());
  }, [dispatch]);

  const onScroll = useCallback(
    (e: any) => {
      const sum = e.scrollTop / 6400;

      if (
        Math.ceil(sum) === sum &&
        sum > 0 &&
        qs_.length > 0 &&
        qs_[0] !== '?page' &&
        !qs_.includes('page')
      ) {
        history.push(`${location.search}&page=${sum + 1}`);
      }
      if (
        Math.ceil(sum) === sum &&
        sum > 0 &&
        !location.search.split('&page')[0]
      ) {
        history.push(`?page=${sum + 1}`);
      }
    },
    [history, qs_, location.search]
  );

  useEffect(() => {
    const { tag, ingredient, category, sort, page } = qs.parse(
      location.search,
      {
        ignoreQueryPrefix: true,
      }
    );
    dispatch(listPosts({ tag, ingredient, category, sort, page }));
  }, [dispatch, location]);

  return <PostList posts={posts} qs_={qs_} onScroll={onScroll} />;
};

export default withRouter(PostListContainer);
