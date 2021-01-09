import { useState, useEffect, useCallback } from 'react';
import ChatRoom from '../../components/home/ChatRoom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { readRoomList } from '../../module/chatRoom';
import socketIOClient from 'socket.io-client';
import { connectSocket } from '../../module/socket';
import { joinRoom_API } from '../../lib/api/chatRoom';

const ChatRoomContainer = ({
  match,
  location,
  history,
}: RouteComponentProps<any>) => {
  const [plus, setPlus] = useState<boolean | null>(null);
  const { chatRoomId } = match.params;
  const dispatch = useDispatch();
  const { user, roomList } = useSelector(({ user, chatRoom }: RootState) => ({
    user: user.user,
    roomList: chatRoom.roomList,
  }));

  useEffect(() => {
    dispatch(readRoomList());
  }, [dispatch]);

  const joinRoom = useCallback(
    async ({ id, max, participants }) => {
      if (!user) {
        alert('로그인이 필요합니다.');
        return;
      }
      if (max && participants) {
        if (participants.length >= max) {
          alert('인원 초과');
          return;
        }
      }
      history.push(`/chat/${id}/${location.search}`);

      const socket_ = socketIOClient('http://localhost:4000/chat', {
        path: '/socket.io',
      });

      dispatch(connectSocket(socket_));

      await joinRoom_API(id).then(() => {
        dispatch(readRoomList());
        socket_.emit('con', { roomId: id, user });
        socket_.on('join', (data: any) => console.log(data));
      });
    },
    [history, location, user, dispatch]
  );

  const joinRoom_ING = useCallback(
    (id: string) => {
      history.push(`/chat/${id}/${location.search}`);
    },
    [history, location]
  );

  const onPlusClick = useCallback(() => {
    setPlus(true);
  }, []);

  return (
    <ChatRoom
      joinRoom_ING={joinRoom_ING}
      onPlusClick={onPlusClick}
      plus={plus}
      setPlus={setPlus}
      chatRoomId={chatRoomId}
      user={user}
      roomList={roomList}
      joinRoom={joinRoom}
    />
  );
};

export default withRouter(ChatRoomContainer);
