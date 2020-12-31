import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import PostComment from '../../components/post/PostComment';

const PostCommentContainer = () => {
  const { comments, loading } = useSelector(({ post, loading }: RootState) => ({
    comments: post.post,
    loading: loading['post/POST_READ'],
  }));

  return <PostComment comments={comments} loading={loading} />;
};

export default PostCommentContainer;
