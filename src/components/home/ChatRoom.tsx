import React, { ChangeEvent } from 'react';
import {
  ChatBlock,
  Header,
  Block,
  ChatRoomBlock,
  CreateChatButton,
  Search,
} from '../styles/home/ChatRoom.style';
import CreateRoomModalContainer from '../../containers/home/modal/CreateRoomModalContainer';
import ChattingContainer from '../../containers/home/modal/ChattingContainer';
import { RouteComponentProps } from 'react-router-dom';
import { BsLockFill } from 'react-icons/bs';

const ChatRoomList = ({
  roomList,
  joinRoom,
  user,
  joinRoom_ING,
  searchRoom,
}: any) => {
  if (searchRoom) {
    roomList = roomList.filter(
      (room: any) => room.title.indexOf(searchRoom) >= 0
    );
  }

  return (
    <>
      {roomList &&
        roomList.map((room: any) => (
          <ChatRoomBlock key={room._id}>
            <div className="num">
              {room.participants.length}/{room.max}
            </div>
            <div className="title">{room.title}</div>
            <div className="lock">{room.password && <BsLockFill />}</div>
            {user &&
            room.participants.filter((a: any) => a.user._id === user._id)
              .length > 0 ? (
              <div className="but" onClick={() => joinRoom_ING(room._id)}>
                🟡
              </div>
            ) : room.participants.length >= room.max ? (
              <div
                className="but"
                onClick={() =>
                  joinRoom({ max: room.max, participants: room.participants })
                }
              >
                🔴
              </div>
            ) : (
              <div
                className="but"
                onClick={() =>
                  joinRoom({ id: room._id, password: room.password })
                }
              >
                🟢
              </div>
            )}
          </ChatRoomBlock>
        ))}
    </>
  );
};

type Props = {
  onPlusClick: () => void;
  plus: null | boolean;
  setPlus: any;
  user: any;
  roomList: any;
  chatRoomId: RouteComponentProps<any>;
  searchRoom: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  joinRoom: (id: string, max: number, participants: any) => void;
  joinRoom_ING: (id: string) => void;
};

const ChatRoom = ({
  searchRoom,
  onChange,
  joinRoom_ING,
  user,
  onPlusClick,
  plus,
  setPlus,
  roomList,
  chatRoomId,
  joinRoom,
}: Props) => {
  console.log(chatRoomId);
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
      <Search>
        <input
          value={searchRoom}
          onChange={onChange}
          placeholder="채팅방 검색"
        />
      </Search>
      <Block>
        {plus && <CreateRoomModalContainer setPlus={setPlus} />}
        {user && chatRoomId && <ChattingContainer />}
        <ChatRoomList
          roomList={roomList}
          joinRoom={joinRoom}
          joinRoom_ING={joinRoom_ING}
          user={user}
          searchRoom={searchRoom}
        />
      </Block>
    </ChatBlock>
  );
};

export default React.memo(ChatRoom);
