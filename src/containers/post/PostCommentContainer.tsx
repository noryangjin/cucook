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
import { writeComment, deleteComment } from '../../lib/api/comment';

const PostCommentContainer = ({ match }: RouteComponentProps<any>) => {
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<null | string>(null);
  const [option, setOption] = useState<boolean>(false);
  const [submitloading, setSubmitLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { postId } = match.params;
  const { user, comments, loading, commentLoading } = useSelector(
    ({ comment, loading, user }: RootState) => ({
      comments: comment.comments,
      user: user.user,
      loading: loading['post/POST_READ'],
      commentLoading: loading['comment/READ_COMMENT'],
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

  useEffect(() => {
    if (commentLoading) {
      setSubmitLoading(true);
    }
    if (!commentLoading) {
      setSubmitLoading(false);
    }
  }, [commentLoading]);

  const onClick = useCallback(() => {
    setOption(true);
  }, []);
  const onCancel = useCallback(() => {
    setOption(false);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input) {
        setInput('');
        return null;
      }
      setSubmitLoading(true);
      await writeComment({ id: postId, text: input })
        .then(() => {
          dispatch(readComment(postId));
        })
        .then(() => {
          setMessage('댓글 등록 완료');
          setTimeout(() => setMessage(''), 3500);
        })
        .catch((e) => {
          setSubmitLoading(false);
          e.response.status === 403 && setMessage('로그인이 필요합니다.');
          setTimeout(() => setMessage(''), 3500);
        });
      setInput('');
    },
    [postId, input, dispatch]
  );

  const onRemove = useCallback(
    async (e: any) => {
      const { value } = e.target;
      setSubmitLoading(true);
      await deleteComment(value)
        .then(() => {
          dispatch(readComment(postId));
        })
        .then(() => {
          setMessage('댓글 삭제 완료');
          setTimeout(() => setMessage(''), 3500);
        })
        .catch((e) => {
          setSubmitLoading(false);
          e.response.status === 403 && setMessage('로그인이 필요합니다.');
          setTimeout(() => setMessage(''), 3500);
        });
    },
    [postId, dispatch]
  );

  return (
    <PostComment
      onCancel={onCancel}
      option={option}
      onClick={onClick}
      comments={comments}
      loading={loading}
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      message={message}
      user={user}
      onRemove={onRemove}
      submitLoading={submitloading}
    />
  );
};

export default withRouter(PostCommentContainer);
