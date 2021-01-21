import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import UserInfoContainer from '../containers/user/UserInfoContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';

const UserPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <HomeActionButtonContainer />
        <UserInfoContainer />
      </Responsive>
    </>
  );
};

export default UserPage;
