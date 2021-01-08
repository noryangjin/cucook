import React, {
  ChangeEvent,
  useState,
  useCallback,
  FormEvent,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateRoomModal from '../../../components/home/modal/CreateRoomModal';
import { RootState } from '../../../module/index';
import {
  roomOption,
  createRoom,
  roomOpionInitialize,
} from '../../../module/chatRoom';
import { withRouter } from 'react-router-dom';

const CreateRoomModalContainer = ({ history, location, setPlus }: any) => {
  const [passwordButton, setPasswordButton] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const { title, max, password, chatRoomError, chatRoom } = useSelector(
    ({ chatRoom }: RootState) => ({
      title: chatRoom.title,
      max: chatRoom.max,
      password: chatRoom.password,
      chatRoom: chatRoom.chatRoom,
      chatRoomError: chatRoom.chatRoomError,
    })
  );

  const onPasswordButton = () => {
    setPasswordButton(true);
    setError('');
    if (passwordButton) {
      setPasswordButton(false);
    }
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(roomOption({ key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!title) {
        return setError('방 제목을 입력해 주세요');
      }
      dispatch(createRoom({ title, max, password }));
    },
    [dispatch, title, max, password]
  );

  const onCancel = useCallback(() => {
    setPlus(false);
    dispatch(roomOpionInitialize());
  }, [setPlus, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(roomOpionInitialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (chatRoom) {
      setPlus(false);
      history.push(`/${chatRoom}${location.search}`);
    }
    if (chatRoomError && chatRoomError.response.status === 403) {
      setError('로그인 하셔야 합니다.');
    }
  }, [dispatch, setPlus, chatRoomError, location, chatRoom, history]);

  return (
    <CreateRoomModal
      title={title}
      max={max}
      onCancel={onCancel}
      password={password}
      onChange={onChange}
      passwordButton={passwordButton}
      onSubmit={onSubmit}
      error={error}
      onPasswordButton={onPasswordButton}
    />
  );
};

export default React.memo(withRouter(CreateRoomModalContainer));
