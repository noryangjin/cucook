import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import Chat from '../../components/home/Chat';
import socketIOClient from 'socket.io-client';

const ChatContainer = () => {
  const [input_, setInput] = useState<string>('');
  const socket = socketIOClient('http://localhost:4000/', {
    path: '/socket.io',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit('reply', input_);
  };

  useEffect(() => {
    socket.on('news', (data: string) => {
      console.log(data);
    });
  }, [socket]);

  return <Chat onSubmit={onSubmit} onChange={onChange} input_={input_} />;
};

export default ChatContainer;
