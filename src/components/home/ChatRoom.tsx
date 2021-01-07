import React from 'react';
import {
  ChatBlock,
  Header,
  Block,
  ChatRoomBlock,
  CreateChatButton,
} from '../styles/home/ChatRoom.style';
import CreateRoomModalContainer from '../../containers/home/modal/CreateRoomModalContainer';
import ChatingContainer from '../../containers/home/modal/ChatingContainer';
import { RouteComponentProps } from 'react-router-dom';

const ChatRooms = () => {
  return (
    <ChatRoomBlock>
      <div className="num">3명</div>
      <div className="title">오늘 점심 이거 먹을까?</div>
      <div className="but">참여</div>
    </ChatRoomBlock>
  );
};

type Props = {
  onPlusClick: () => void;
  plus: null | boolean;
  setPlus: any;
  chatRoomId: RouteComponentProps<any>;
};

const ChatRoom = ({ onPlusClick, plus, setPlus, chatRoomId }: Props) => {
  return (
    <ChatBlock>
      <Header>
        <h4>채팅 목록</h4>
        {!chatRoomId && (
          <CreateChatButton cyan onClick={onPlusClick}>
            방 생성
          </CreateChatButton>
        )}
      </Header>
      <Block>
        {plus && <CreateRoomModalContainer setPlus={setPlus} />}
        {chatRoomId && <ChatingContainer />}
        <ChatRooms />
      </Block>
    </ChatBlock>
  );
};

export default React.memo(ChatRoom);
