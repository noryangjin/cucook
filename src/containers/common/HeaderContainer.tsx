import React, {
  MouseEvent,
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
import qs from 'qs';

const HeaderContainer = ({ location, history }: RouteComponentProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');
  const [linkTo, setLinkTo] = useState<string>('/');

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

  const onLogout = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      dispatch(logout());
      window.location.reload();
    },
    [dispatch]
  );

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

  useEffect(() => {
    const qs_ = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (location.search.includes('sort')) {
      return setLinkTo(`?sort=${qs_.sort}`);
    }
    setLinkTo('/');
  }, [location]);

  return (
    <Header
      onSubmit={onSubmit}
      term={term}
      onChange={onChange}
      user={user}
      onLogout={onLogout}
      welcomeMessage={welcomeMessage}
      linkTo={linkTo}
    />
  );
};

export default withRouter(HeaderContainer);
