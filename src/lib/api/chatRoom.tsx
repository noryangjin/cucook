import client from './client';

type insert = {
  title: string;
  max: number;
  password: string;
};

export const createChatRoom = ({ title, max, password }: insert) => {
  return client.post('/api/chatRoom/', { title, max, password });
};

export const readRoomList = () => {
  return client.get(`/api/chatRoom/`);
};
