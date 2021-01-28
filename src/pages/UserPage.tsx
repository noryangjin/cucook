import { useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import UserInfoContainer from '../containers/user/UserInfoContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
import {
  ChatBlock,
  ScrollButton,
} from '../components/styles/common/SideMenu.style';
import { RouteComponentProps } from 'react-router-dom';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { BsFillChatDotsFill, BsFillQuestionCircleFill } from 'react-icons/bs';

const UserPage = ({ history }: RouteComponentProps) => {
  const [chatOn, setChatOn] = useState<boolean>(false);

  const onClick = () => {
    setChatOn(true);
    if (chatOn) {
      setChatOn(false);
    }
  };

  return (
    <>
      <HeaderContainer />
      <Responsive>
        <HomeActionButtonContainer />
        <UserInfoContainer />
      </Responsive>
      <ChatBlock>{chatOn && <ChatRoomContainer />}</ChatBlock>
      <ScrollButton>
        <div className="icon">
          <BsFillChatDotsFill onClick={onClick} size="23" />
        </div>
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

export default UserPage;
