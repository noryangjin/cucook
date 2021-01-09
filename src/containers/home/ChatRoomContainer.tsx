import { useState, useEffect, useCallback } from 'react';
import ChatRoom from '../../components/home/ChatRoom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { readRoomList } from '../../module/chatRoom';
import socketIOClient from 'socket.io-client';
import { connectSocket } from '../../module/socket';
import { joinRoom_API } from '../../lib/api/chatRoom';
import { readRoom } from '../../module/chatReadRoom';

const ChatRoomContainer = ({
  match,
  location,
  history,
}: RouteComponentProps<any>) => {
  const [plus, setPlus] = useState<boolean | null>(null);
  const { chatRoomId } = match.params;
  const dispatch = useDispatch();
  const { user, roomList, socket } = useSelector(
    ({ socket, user, chatRoom }: RootState) => ({
      user: user.user,
      roomList: chatRoom.roomList,
      socket: socket.socket,
    })
  );

  useEffect(() => {
    dispatch(readRoomList());
  }, [dispatch]);

  const joinRoom = useCallback(
    async ({ id, max, participants, password }) => {
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

      if (!password && !socket) {
        const socket_ = socketIOClient('http://localhost:4000/chat', {
          path: '/socket.io',
        });

        dispatch(connectSocket(socket_));
        dispatch(readRoom({ roomId: id, password: '' }));

        await joinRoom_API(id)
          .then(() => {
            dispatch(readRoomList());
          })
          .then(() => {
            socket_.emit('con', { roomId: id, user });
            socket_.on('join', (data: any) => console.log(data));
          });
      }
    },
    [history, location, user, dispatch, socket]
  );

  const joinRoom_ING = useCallback(
    (id: string) => {
      history.push(`/chat/${id}/${location.search}`);
      dispatch(readRoom({ roomId: id, password: '' }));
    },
    [history, location, dispatch]
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
