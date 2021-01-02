import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/home/PostListContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import Responsive from '../components/common/Responsive';

const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <HomeActionButtonContainer />
        <PostListContainer />
      </Responsive>
    </>
  );
};

export default HomePage;
