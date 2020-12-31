import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import PostComment from '../../components/post/PostComment';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

const PostCommentContainer = ({ match }: RouteComponentProps<any>) => {
  const [input, setInput] = useState<string>('');
  const { postId } = match.params;
  const { comments, loading } = useSelector(({ post, loading }: RootState) => ({
    comments: post.post,
    loading: loading['post/POST_READ'],
  }));

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await axios.post(
        `/api/comment/${postId}`,
        { text: input },
        {
          baseURL: 'http://localhost:4000/',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
    },
    [postId, input]
  );

  return (
    <PostComment
      comments={comments}
      loading={loading}
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(PostCommentContainer);
