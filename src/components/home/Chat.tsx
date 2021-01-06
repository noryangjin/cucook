import React, { ChangeEvent, FormEvent } from 'react';
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

type Props = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  input_: string;
};

const Chat = ({ onSubmit, onChange, input_ }: Props) => {
  return (
    <ChatBlock>
      <Header>
        <h4>채팅 목록</h4>
        <h4 className="plus">채팅 생성</h4>
      </Header>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input_} />
        <button type="submit">전송</button>
      </form>
      <Block>
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </Block>
    </ChatBlock>
  );
};

export default React.memo(Chat);
