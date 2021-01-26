import { useState } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import loadable from '@loadable/component';
import {
  ChatBlock,
  ScrollButton,
} from '../components/styles/common/SideMenu.style';
import ChatRoomContainer from '../containers/home/ChatRoomContainer';
import { BsFillChatDotsFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import { RouteComponentProps } from 'react-router-dom';

const Split = loadable(() => import('../containers/map/MapContainer'), {
  fallback: <h2>로딩 중...</h2>,
});

const MapPage = ({ history }: RouteComponentProps) => {
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
        <div className="icon">
          <BsFillChatDotsFill onClick={onClick} size="23" />
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

export default MapPage;
