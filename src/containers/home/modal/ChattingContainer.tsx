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
import chatRoom, { readRoomList } from '../../../module/chatRoom';
import { leaveRoom_API, joinRoom_API } from '../../../lib/api/chatRoom';
import { readRoom, initializeRoom } from '../../../module/chatReadRoom';
import socketIOClient from 'socket.io-client';
import { connectSocket, socketUnload } from '../../../module/socket';
import { chatting_API } from '../../../lib/api/chatting';

const ChattingContainer = ({
  history,
  location,
  match,
}: RouteComponentProps<any>) => {
  const [option, setOption] = useState<boolean | null>(null);
  const [checkPass, setCheckPass] = useState<Array<string>>([]);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [chatContent, setChatContent] = useState<string>('');
  const { chatRoomId } = match.params;
  const dispatch = useDispatch();
  const { socket, roomList, room, roomError, user } = useSelector(
    ({ socket, chatRoom, chatReadRoom, user }: RootState) => ({
      socket: socket.socket,
      user: user.user,
      roomList: chatRoom.roomList,
      room: chatReadRoom.room,
      roomError: chatReadRoom.roomError,
    })
  );

  useEffect(() => {
    roomList &&
      setCheckPass(roomList.map((room: any) => room.password && room._id));
  }, [roomList]);

  const onClickOption = useCallback(() => {
    setOption(true);
    if (option) {
      setOption(false);
    }
  }, [option]);

  const onCancel = useCallback(() => {
    history.push(`/${location.search}`);
    setOption(false);
    dispatch(readRoomList());
    dispatch(initializeRoom());
  }, [location, history, dispatch]);

  const onLeaveRoom = useCallback(async () => {
    dispatch(initializeRoom());
    setCheckPass([]);
    await leaveRoom_API(chatRoomId)
      .then(() => {
        socket && socket.disconnect();
        dispatch(socketUnload());
        setOption(false);
      })
      .then(() => {
        history.push(`/${location.search}`);
        dispatch(readRoomList());
      });
  }, [dispatch, socket, chatRoomId, location, history]);

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

  const soc = useCallback(async () => {
    await joinRoom_API(chatRoomId).then(() => {
      dispatch(readRoomList());
    });
  }, [dispatch, chatRoomId]);

  useEffect(() => {
    if (roomError) {
      if (roomError.response.status === 401) {
        setError('비밀번호를 확인해 주세요');
      }
      if (roomError.response.status === 403) {
        setError('로그인 하셔야 합니다.');
      }
    }
    if (
      room &&
      room.password &&
      room.participants.filter((u: string) => u === user._id).length === 0
    ) {
      const socket_ = socketIOClient('http://localhost:4000/chat', {
        path: '/socket.io',
      });
      dispatch(connectSocket(socket_));
      socket_.emit('con', { roomId: chatRoomId, user });
      socket_.on('join', (data: any) => console.log(data));
      soc();
    }
  }, [roomError, room, user, chatRoomId, dispatch, soc]);

  const onChangeChat = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setChatContent(value);
  }, []);

  const onSubmitChat = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await chatting_API({ roomId: chatRoomId, chatContent }).then(() => {
        socket && socket.on('chat', (data: any) => console.log(data));
      });
    },
    [chatRoomId, socket, chatContent]
  );

  return (
    <Chatting
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
