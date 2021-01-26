import { useRef, useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import {
  ScrollButton,
  ChatBlock,
} from '../components/styles/common/SideMenu.style';
import loadable from '@loadable/component';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
import { RouteComponentProps } from 'react-router-dom';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { BiArrowToTop } from 'react-icons/bi';
import { BsFillChatDotsFill, BsFillQuestionCircleFill } from 'react-icons/bs';

const Split = loadable(() => import('./Split/PostLeadPage.split'));

const scrollToRef = (ref: any) =>
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: 'smooth' });

const PostLeadPage = ({ history }: RouteComponentProps) => {
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
        <div>
          <BiArrowToTop className="up" onClick={executeScroll} size="30" />
        </div>
      </ScrollButton>
    </>
  );
};

export default PostLeadPage;
