import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import HomeActionButton from '../../components/home/HomeActionButton';

const HomeActionButtonContainer = () => {
  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  return <HomeActionButton user={user} />;
};

export default HomeActionButtonContainer;
