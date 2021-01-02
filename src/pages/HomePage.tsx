import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/home/PostListContainer';
import Responsive from '../components/common/Responsive';

const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <PostListContainer />
      </Responsive>
    </>
  );
};

export default HomePage;
