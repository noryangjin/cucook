import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/home/PostListContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import Responsive from '../components/common/Responsive';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
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
            <ChatRoomContainer />
          </div>
        </Block>
      </Responsive>
    </>
  );
};

export default HomePage;
