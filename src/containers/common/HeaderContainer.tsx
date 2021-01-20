import React, {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { RootState } from '../../module/index';
import { logout } from '../../module/user';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { search_Post, searchValue } from '../../module/searchPost';
import { changeMessage } from '../../module/message';

const HeaderContainer = ({ history }: RouteComponentProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');

  const dispatch = useDispatch();
  const { user, authLogin, term, message } = useSelector(
    ({ user, auth, searchPost, message }: RootState) => ({
      user: user.user,
      authLogin: auth.authLogin,
      term: searchPost.term,
      message: message.message,
    })
  );

  useEffect(() => {
    if (authLogin) {
      setWelcomeMessage('로그인 성공~~~ 환영합니다!!!😁');
    }
    if (message.includes('포스트가 삭제되었습니다.')) {
      setWelcomeMessage(message);
    }
    if (message) {
      return () => {
        dispatch(changeMessage(''));
      };
    }
  }, [welcomeMessage, authLogin, dispatch, message]);

  const onLogout = useCallback(() => {
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value: term } = e.target;
      dispatch(searchValue(term));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!term) {
        return;
      }
      if (term) {
        dispatch(search_Post({ search: term }));
        history.push('/search');
      }
    },
    [dispatch, term, history]
  );

  return (
    <Header
      onSubmit={onSubmit}
      term={term}
      onChange={onChange}
      user={user}
      onLogout={onLogout}
      message={message}
      welcomeMessage={welcomeMessage}
    />
  );
};

export default withRouter(HeaderContainer);
