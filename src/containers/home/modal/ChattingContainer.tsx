import Chatting from '../../../components/home/modal/Chatting';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../module/index';
import { readRoomList } from '../../../module/chatRoom';
import { leaveRoom_API, joinRoom_API } from '../../../lib/api/chatRoom';
import { readRoom, initializeRoom } from '../../../module/chatReadRoom';
import socketIOClient from 'socket.io-client';
import { chatting_API } from '../../../lib/api/chatting';

let socket_: any;

const ChattingContainer = ({
  history,
  location,
  match,
}: RouteComponentProps<any>) => {
  const [chats, setChat] = useState<Array<null>>([]);
  const [checkPass, setCheckPass] = useState<Array<string>>([]);
  const [option, setOption] = useState<boolean | null>(null);
  const [checkMem, setCheckMem] = useState<boolean | null>(null);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [chatContent, setChatContent] = useState<string>('');
  const { chatRoomId } = match.params;
  const dispatch = useDispatch();
  const { roomList, room, roomError, user, readRoomLoading } = useSelector(
    ({ chatRoom, chatReadRoom, user, loading }: RootState) => ({
      user: user.user,
      roomList: chatRoom.roomList,
      room: chatReadRoom.room,
      roomError: chatReadRoom.roomError,
      readRoomLoading: loading['chatReadRoom/READ_ROOM'],
    })
  );

  useEffect(() => {
    roomList &&
      setCheckPass(roomList.map((room: any) => room.password && room._id));
  }, [roomList]);

  useEffect(() => {
    if (
      !room &&
      chatRoomId &&
      checkPass.filter((room) => room === chatRoomId).length === 0
    ) {
      dispatch(readRoom({ roomId: chatRoomId, password: '' }));
    }
  }, [room, chatRoomId, checkPass, dispatch]);

  const onClickOption = useCallback(() => {
    setOption(true);
    setCheckMem(false);
    if (option) {
      setOption(false);
    }
  }, [option]);

  const onCancel = useCallback(() => {
    history.push(`/${location.search}`);
    setOption(false);
    setCheckMem(false);
    dispatch(readRoomList());
    socket_ && socket_.disconnect();
    dispatch(initializeRoom());
  }, [location, history, dispatch]);

  const onLeaveRoom = useCallback(async () => {
    dispatch(initializeRoom());
    setCheckPass([]);
    await leaveRoom_API(chatRoomId)
      .then(() => {
        socket_ && socket_.disconnect();
        setOption(false);
      })
      .then(() => {
        history.push(`/${location.search}`);
        dispatch(readRoomList());
      });
  }, [dispatch, chatRoomId, location, history]);

  const onChangePass = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  }, []);

  const onSubmitPass = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(readRoom({ roomId: chatRoomId, password }));
    },
    [dispatch, chatRoomId, password]
  );

  const onClickMem = useCallback(() => {
    setCheckMem(true);
    setOption(false);
    if (checkMem) {
      setCheckMem(false);
    }
  }, [checkMem]);

  const soc = useCallback(async () => {
    await joinRoom_API(chatRoomId).then(() => {
      dispatch(readRoomList());
    });
  }, [dispatch, chatRoomId]);

  useEffect(() => {
    if (roomError) {
      if (roomError.response.status === 401) {
        setPassword('');
        setError('비밀번호를 확인해 주세요');
      }
      if (roomError.response.status === 403) {
        setError('로그인 하셔야 합니다.');
      }
    }
    if (
      room &&
      room.password &&
      room.participants.filter((u: any) => u.user._id === user._id).length === 0
    ) {
      soc();
    }
  }, [roomError, room, user, chatRoomId, dispatch, soc]);

  const onChangeChat = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setChatContent(value);
  }, []);

  useEffect(() => {
    socket_ = socketIOClient('http://localhost:4000/chat', {
      path: '/socket.io',
    });
    socket_.emit('join', { roomId: chatRoomId, user }, (error: any) => {
      if (error) {
        alert(error);
      }
    });
  }, [user, chatRoomId]);

  useEffect(() => {
    socket_ &&
      socket_.on('message', (data: string) => {
        setChat((chats: any) => [...chats, data]);
      });
  }, []);

  const onSubmitChat = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (chatContent) {
        socket_ &&
          socket_.emit('sendMessage', chatContent, () => setChatContent(''));
      }
      setCheckMem(false);
      setOption(false);
      await chatting_API({ roomId: chatRoomId, chatContent }).then(() => {});
    },
    [chatRoomId, chatContent]
  );

  return (
    <Chatting
      readRoomLoading={readRoomLoading}
      checkMem={checkMem}
      onClickMem={onClickMem}
      user={user}
      chats={chats}
      onSubmitChat={onSubmitChat}
      onChangeChat={onChangeChat}
      chatContent={chatContent}
      onSubmitPass={onSubmitPass}
      onChangePass={onChangePass}
      password={password}
      onClickOption={onClickOption}
      onCancel={onCancel}
      option={option}
      onLeaveRoom={onLeaveRoom}
      checkPass={checkPass}
      chatRoomId={chatRoomId}
      room={room}
      error={error}
    />
  );
};

export default withRouter(ChattingContainer);
