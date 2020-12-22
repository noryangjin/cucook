import React, { MouseEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { RootState } from '../../module/index';
import { logout } from '../../module/user';

const HeaderContainer = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');
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

  const onLogout = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <Header user={user} onLogout={onLogout} welcomeMessage={welcomeMessage} />
  );
};

export default HeaderContainer;
