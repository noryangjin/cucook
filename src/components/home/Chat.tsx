import React from 'react';
import {
  ChatBlock,
  Header,
  Block,
  ChatRoomBlock,
} from '../styles/home/Chat.style';

const ChatRoom = () => {
  return (
    <ChatRoomBlock>
      <div className="num">3명</div>
      <div className="title">오늘 점심 이거 먹을까?</div>
      <div className="but">참여</div>
    </ChatRoomBlock>
  );
};

const Chat = () => {
  return (
    <ChatBlock>
      <Header>
        <h4>채팅 목록</h4>
        <h4 className="plus">채팅 생성</h4>
      </Header>
      <Block>
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </Block>
    </ChatBlock>
  );
};

export default Chat;