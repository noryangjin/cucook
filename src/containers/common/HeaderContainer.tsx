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

const HeaderContainer = ({ history }: RouteComponentProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');

  const dispatch = useDispatch();
  const { user, authLogin, term } = useSelector(
    ({ user, auth, searchPost }: RootState) => ({
      user: user.user,
      authLogin: auth.authLogin,
      term: searchPost.term,
    })
  );

  useEffect(() => {
    if (authLogin) {
      setWelcomeMessage('로그인 성공~~~ 환영합니다!!!😁');
    }
  }, [authLogin, dispatch]);

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
      welcomeMessage={welcomeMessage}
    />
  );
};

export default withRouter(HeaderContainer);
