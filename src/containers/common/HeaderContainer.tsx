import React, { MouseEvent, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { RootState } from '../../module/index';
import { logout } from '../../module/user';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import qs from 'qs';

const HeaderContainer = ({ location }: RouteComponentProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');
  const [linkTo, setLinkTo] = useState<string>('/');

  const dispatch = useDispatch();
  const { user, authLogin } = useSelector(({ user, auth }: RootState) => ({
    user: user.user,
    authLogin: auth.authLogin,
  }));

  useEffect(() => {
    if (authLogin) {
      setWelcomeMessage('로그인 성공~~~ 환영합니다!!!😁');
    }
  }, [authLogin]);

  const onLogout = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      dispatch(logout());
      window.location.reload();
    },
    [dispatch]
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
      user={user}
      onLogout={onLogout}
      welcomeMessage={welcomeMessage}
      linkTo={linkTo}
    />
  );
};

export default withRouter(HeaderContainer);
