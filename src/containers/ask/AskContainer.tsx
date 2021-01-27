import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import Ask from '../../components/ask/Ask';

const AskContainer = () => {
  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  return <Ask user={user} />;
};

export default AskContainer;
