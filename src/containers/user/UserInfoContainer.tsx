import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserInfo from '../../components/user/UserInfo';
import { readUserPost, initializeUserInfo } from '../../module/user';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { RootState } from '../../module/index';

const UserInfoContainer = ({ match }: RouteComponentProps<any>) => {
  const { username } = match.params;
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(
    ({ user, loading }: RootState) => ({
      post: user.post,
      postError: user.postError,
      loading: loading['user/READ_USERPOST'],
    })
  );

  useEffect(() => {
    if (username) {
      dispatch(readUserPost(username));
    }
    return () => {
      dispatch(initializeUserInfo());
    };
  }, [username, dispatch]);

  useEffect(() => {
    if (postError && postError.response.status === 404) {
      setError('찾을 수 없는 유저입니다.');
    }
  }, [postError]);

  return (
    <UserInfo error={error} post={post} loading={loading} username={username} />
  );
};

export default withRouter(UserInfoContainer);
