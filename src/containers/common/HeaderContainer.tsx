import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { RootState } from '../../module/index';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }: RootState) => ({ user: user.user }));

  return <Header user={user} />;
};

export default HeaderContainer;
