import { useState, useEffect, useCallback } from 'react';
import ChatRoom from '../../components/home/ChatRoom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { readRoomList } from '../../module/chatRoom';
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
  const { user, roomList } = useSelector(({ user, chatRoom }: RootState) => ({
    user: user.user,
    roomList: chatRoom.roomList,
  }));

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

      if (!password) {
        dispatch(readRoom({ roomId: id, password: '' }));

        await joinRoom_API(id).then(() => {
          dispatch(readRoomList());
        });
      }
    },
    [history, location, user, dispatch]
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
