import client from './client';

type insert = {
  roomId: string;
  chatContent: string;
};

export const chatting_API = ({ roomId, chatContent }: insert) => {
  return client.post(`/api/chatRoom/chat/${roomId}`, { chatContent });
};
