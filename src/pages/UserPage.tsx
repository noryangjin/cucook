import { useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import UserInfoContainer from '../containers/user/UserInfoContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
import { BsFillChatDotsFill } from 'react-icons/bs';
import {
  ChatBlock,
  ScrollButton,
} from '../components/styles/common/SideMenu.style';

const UserPage = () => {
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
        <div className="chatBlock">
          <BsFillChatDotsFill className="chat" onClick={onClick} size="23" />
        </div>
      </ScrollButton>
    </>
  );
};

export default UserPage;
