import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import ChatRoom from '../../components/home/ChatRoom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { readRoomList } from '../../module/chatRoom';
import { joinRoom_API } from '../../lib/api/chatRoom';
import { readRoom } from '../../module/chatReadRoom';
import { changeMessage } from '../../module/message';
import { historyPush } from './modal/refactoring/HistoryPush';

const ChatRoomContainer = ({
  match,
  location,
  history,
}: RouteComponentProps<any>) => {
  const { username, postId } = match.params;
  const [plus, setPlus] = useState<boolean | null>(null);
  const [searchRoom, setSearchRoom] = useState<string>('');
  const { chatRoomId } = match.params;
  const dispatch = useDispatch();
  const { user, roomList } = useSelector(({ user, chatRoom }: RootState) => ({
    user: user.user,
    roomList: chatRoom.roomList,
  }));
  console.log(chatRoomId);
  useEffect(() => {
    dispatch(readRoomList());
    setSearchRoom('');
  }, [dispatch]);

  const joinRoom = useCallback(
    async ({ id, max, participants, password }) => {
      if (!user) {
        return [
          dispatch(changeMessage('로그인이 필요합니다.')),
          setTimeout(() => dispatch(changeMessage('')), 3500),
        ];
      }
      if (max && participants) {
        if (participants.length >= max) {
          return [
            dispatch(changeMessage('인원 초과입니다.')),
            setTimeout(() => dispatch(changeMessage('')), 3500),
          ];
        }
      }
      historyPush({ history, postId, username, id, location });

      if (!password) {
        dispatch(readRoom({ roomId: id, password: '' }));

        await joinRoom_API(id).then(() => {
          dispatch(readRoomList());
        });
      }
    },
    [user, history, postId, username, location, dispatch]
  );

  const joinRoom_ING = useCallback(
    (id: string) => {
      historyPush({ history, postId, username, id, location });
      dispatch(readRoom({ roomId: id, password: '' }));
    },
    [history, postId, username, location, dispatch]
  );

  const onPlusClick = useCallback(() => {
    setPlus(true);
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchRoom(value);
  }, []);

  return (
    <ChatRoom
      searchRoom={searchRoom}
      onChange={onChange}
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
