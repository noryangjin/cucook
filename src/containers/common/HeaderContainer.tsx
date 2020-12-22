import React, { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { RootState } from '../../module/index';
import { logout } from '../../module/user';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }: RootState) => ({ user: user.user }));

  const onLogout = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
    window.location.reload();
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
