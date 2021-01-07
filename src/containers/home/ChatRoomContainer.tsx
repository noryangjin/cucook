import {
  FormEvent,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import ChatRoom from '../../components/home/ChatRoom';
// import socketIOClient from 'socket.io-client';
import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const ChatRoomContainer = ({ match }: RouteComponentProps<any>) => {
  const { chatRoomId } = match.params;
  /*const { title, max, password } = useSelector(({ chatRoom }: RootState) => ({
    title: chatRoom.title,
    max: chatRoom.max,
    password: chatRoom.password,
  }));*/

  const [plus, setPlus] = useState<boolean | null>(null);

  /*useEffect(() => {
    const socket = socketIOClient('http://localhost:4000/', {
      path: '/socket.io',
    });
  }, []);*/

  const onPlusClick = useCallback(() => {
    setPlus(true);
  }, []);

  return (
    <ChatRoom
      onPlusClick={onPlusClick}
      plus={plus}
      setPlus={setPlus}
      chatRoomId={chatRoomId}
    />
  );
};

export default withRouter(ChatRoomContainer);
