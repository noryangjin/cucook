import client from './client';

type Props = {
  username: string;
  guestEmail: string;
  title: string;
  content: string;
};

export const askSend = ({ username, guestEmail, title, content }: Props) => {
  return client.post(`/api/send/email`, {
    username,
    guestEmail,
    title,
    content,
  });
};
