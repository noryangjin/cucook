import React, { ChangeEvent, FormEvent } from 'react';
import {
  ChatBlock,
  Header,
  Block,
  ChatRoomBlock,
} from '../styles/home/ChatRoom.style';
import CreateRoomModalContainer from '../../containers/home/modal/CreateRoomModalContainer';

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
};

const ChatRoom = ({ onPlusClick, plus }: Props) => {
  return (
    <ChatBlock>
      <Header>
        <h4>채팅 목록</h4>
        <button onClick={onPlusClick}>➕</button>
      </Header>
      <Block>
        {plus && <CreateRoomModalContainer />}
        <ChatRooms />
      </Block>
    </ChatBlock>
  );
};

export default React.memo(ChatRoom);
