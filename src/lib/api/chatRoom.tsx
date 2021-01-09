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

export const joinRoom_API = (roomId: string) => {
  return client.get(`/api/chatRoom/join/${roomId}`);
};

export const leaveRoom_API = (roomId: string) => {
  return client.get(`/api/chatRoom/out/${roomId}`);
};

export const readRoom = (roomId: string) => {
  return client.get(`/api/chatRoom/${roomId}`);
};
