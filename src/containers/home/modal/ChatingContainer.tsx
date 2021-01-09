import Chating from '../../../components/home/modal/Chating';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../module/index';
import { readRoomList } from '../../../module/chatRoom';
import { leaveRoom_API } from '../../../lib/api/chatRoom';

const ChatingContainer = ({
  history,
  location,
  match,
}: RouteComponentProps<any>) => {
  const [option, setOption] = useState<boolean | null>(null);
  const { chatRoomId } = match.params;
  const dispatch = useDispatch();
  const { socket } = useSelector(({ socket }: RootState) => ({
    socket: socket.socket,
  }));

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
  }, [location, history, dispatch]);

  const onLeaveRoom = useCallback(async () => {
    await leaveRoom_API(chatRoomId)
      .then(() => {
        socket && socket.disconnect();
        setOption(false);
      })
      .then(() => {
        history.push(`/${location.search}`);
        dispatch(readRoomList());
      });
  }, [dispatch, socket, chatRoomId, location, history]);

  return (
    <Chating
      onClickOption={onClickOption}
      onCancel={onCancel}
      option={option}
      onLeaveRoom={onLeaveRoom}
    />
  );
};

export default withRouter(ChatingContainer);
