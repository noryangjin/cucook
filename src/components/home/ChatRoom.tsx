import React from 'react';
import {
  ChatBlock,
  Header,
  Block,
  ChatRoomBlock,
  CreateChatButton,
  JoinButton,
} from '../styles/home/ChatRoom.style';
import CreateRoomModalContainer from '../../containers/home/modal/CreateRoomModalContainer';
import ChatingContainer from '../../containers/home/modal/ChatingContainer';
import { RouteComponentProps } from 'react-router-dom';

const ChatRoomList = ({ roomList, joinRoom, user, joinRoom_ING }: any) => {
  return (
    <>
      {roomList &&
        roomList.map((room: any) => (
          <ChatRoomBlock key={room._id}>
            <div className="num">
              {room.participants.length}/{room.max}
            </div>
            <div className="title">{room.title}</div>
            {user &&
            room.participants.filter((a: string) => a === user._id).length >
              0 ? (
              <JoinButton onClick={() => joinRoom_ING(room._id)}>🟡</JoinButton>
            ) : room.participants.length >= room.max ? (
              <JoinButton
                onClick={() =>
                  joinRoom({ max: room.max, participants: room.participants })
                }
              >
                🔴
              </JoinButton>
            ) : (
              <JoinButton onClick={() => joinRoom({ id: room._id })}>
                🟢
              </JoinButton>
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
  joinRoom: (id: string, max: number, participants: any) => void;
  joinRoom_ING: (id: string) => void;
};

const ChatRoom = ({
  joinRoom_ING,
  user,
  onPlusClick,
  plus,
  setPlus,
  roomList,
  chatRoomId,
  joinRoom,
}: Props) => {
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
        {user && chatRoomId && <ChatingContainer />}
        <ChatRoomList
          roomList={roomList}
          joinRoom={joinRoom}
          joinRoom_ING={joinRoom_ING}
          user={user}
        />
      </Block>
    </ChatBlock>
  );
};

export default React.memo(ChatRoom);
