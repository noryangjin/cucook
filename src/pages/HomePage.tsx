import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/home/PostListContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import Responsive from '../components/common/Responsive';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
import { Block } from './style/Home.style';
import { ScrollButton } from '../components/styles/common/SideMenu.style';
import { RouteComponentProps } from 'react-router-dom';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const HomePage = ({ history }: RouteComponentProps) => {
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
      <ScrollButton>
        <div className="icon">
          <FaMapMarkedAlt onClick={() => history.push('/map')} size="22" />
        </div>
        <div className="icon">
          <BsFillQuestionCircleFill
            onClick={() => history.push('/ask')}
            size="22"
          />
        </div>
      </ScrollButton>
    </>
  );
};

export default HomePage;
