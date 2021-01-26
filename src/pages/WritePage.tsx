import { useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import loadable from '@loadable/component';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
import { BsFillChatDotsFill } from 'react-icons/bs';
import {
  ChatBlock,
  ScrollButton,
} from '../components/styles/common/SideMenu.style';

const Split = loadable(() => import('./Split/WritePage.split'), {
  fallback: <h2>로딩 중...</h2>,
});

const WritePage = () => {
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
        <Split />
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

export default WritePage;
