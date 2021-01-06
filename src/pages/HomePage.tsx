import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/home/PostListContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import Responsive from '../components/common/Responsive';
import ChatContainer from '../containers/home/ChatContainer';
import { Block } from './style/Home.style';

const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <HomeActionButtonContainer />
        <Block>
          <PostListContainer />
          <div className="chat">
            <ChatContainer />
          </div>
        </Block>
      </Responsive>
    </>
  );
};

export default HomePage;
