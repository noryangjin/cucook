import { useRef, useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import {
  ScrollButton,
  ChatBlock,
} from '../components/styles/common/SideMenu.style';
import { BiArrowToTop } from 'react-icons/bi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import loadable from '@loadable/component';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';

const Split = loadable(() => import('./Split/PostLeadPage.split'));

const scrollToRef = (ref: any) =>
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: 'smooth' });

const PostLeadPage = () => {
  const [chatOn, setChatOn] = useState<boolean>(false);
  const myRef = useRef<any>(null);
  const executeScroll = () => scrollToRef(myRef);

  const onClick = () => {
    setChatOn(true);
    if (chatOn) {
      setChatOn(false);
    }
  };

  return (
    <>
      <p ref={myRef} style={{ margin: '0' }}></p>
      <HeaderContainer />
      <Responsive>
        <Split />
      </Responsive>
      <ChatBlock>{chatOn && <ChatRoomContainer />}</ChatBlock>
      <ScrollButton>
        <div className="chatBlock">
          <BsFillChatDotsFill className="chat" onClick={onClick} size="23" />
        </div>
        <div>
          <BiArrowToTop className="up" onClick={executeScroll} size="30" />
        </div>
      </ScrollButton>
    </>
  );
};

export default PostLeadPage;
