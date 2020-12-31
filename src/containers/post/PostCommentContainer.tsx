import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import PostComment from '../../components/post/PostComment';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { unLoadComment, readComment } from '../../module/comment';
import { writeComment } from '../../lib/api/comment';

const PostCommentContainer = ({ match }: RouteComponentProps<any>) => {
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<null | string>(null);

  const dispatch = useDispatch();
  const { postId } = match.params;
  const { comments, loading } = useSelector(
    ({ comment, loading }: RootState) => ({
      comments: comment.comments,
      loading: loading['post/POST_READ'],
    })
  );

  useEffect(() => {
    dispatch(readComment(postId));
    return () => {
      dispatch(unLoadComment());
    };
  }, [dispatch, postId]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input) {
        setInput('');
        return null;
      }
      await writeComment({ id: postId, text: input })
        .then(() => {
          dispatch(readComment(postId));
          setMessage('댓글 등록 완료');
          setTimeout(() => setMessage(''), 3500);
        })
        .catch((e) => {
          e.response.status === 403 && setMessage('로그인이 필요합니다.');
          setTimeout(() => setMessage(''), 3500);
        });
      setInput('');
    },
    [postId, input, dispatch]
  );

  return (
    <PostComment
      comments={comments}
      loading={loading}
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      message={message}
    />
  );
};

export default withRouter(PostCommentContainer);
