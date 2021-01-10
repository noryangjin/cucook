import React, { ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import {
  ChattingBlock,
  Block,
  Send,
  SendButton,
  Title,
  Content,
  Error,
} from '../../styles/home/modal/Chatting.style';
import { IoMdOptions } from 'react-icons/io';

type Props = {
  onCancel: () => void;
  onClickOption: () => void;
  option: boolean | null;
  onLeaveRoom: () => void;
  checkPass: Array<string>;
  chatRoomId: string;
  password: string;
  onSubmitPass: (e: FormEvent<HTMLFormElement>) => void;
  onChangePass: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeChat: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitChat: (e: FormEvent<HTMLFormElement>) => void;
  chatContent: string;
  room: any;
  error: string;
  chats: any;
  user: string;
};

const Chatting = ({
  chats,
  onSubmitChat,
  room,
  error,
  onChangeChat,
  chatContent,
  onSubmitPass,
  onCancel,
  onClickOption,
  option,
  onLeaveRoom,
  checkPass,
  chatRoomId,
  onChangePass,
  password,
  user,
}: Props) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current!.scrollTop = messagesRef.current!.scrollHeight;
  }, [chats]);

  return (
    <ChattingBlock>
      <Block>
        {checkPass &&
        checkPass.filter((id) => id === chatRoomId).length > 0 &&
        !room ? (
          <>
            <h4 ref={messagesRef}>비밀 번호</h4>
            <div className="button">
              <div className="pass_cancel" onClick={onCancel}>
                ❌
              </div>
            </div>
            <form onSubmit={onSubmitPass}>
              <input
                type="password"
                placeholder="비밀 번호 입력"
                value={password}
                onChange={onChangePass}
              />
              <SendButton cyan>확인</SendButton>
            </form>
            {error && <Error>{error}</Error>}
          </>
        ) : (
          <>
            <Title>
              <h4>{room && room.title}</h4>
              <div className="option">
                <div className="button">
                  <IoMdOptions className="setting" onClick={onClickOption} />
                  <div className="cancel" onClick={onCancel}>
                    ❌
                  </div>
                </div>
                {option && (
                  <button className="delete" onClick={onLeaveRoom}>
                    방 나가기
                  </button>
                )}
              </div>
            </Title>
            <Content ref={messagesRef}>
              {chats &&
                chats.map((ch: any, index: number) =>
                  ch.chat ? (
                    <div className="welcome" key={index}>
                      {ch.chat}
                    </div>
                  ) : ch.user === user ? (
                    <div className="my-content" key={index}>
                      <div className="block">
                        <div className="name">{ch.user}</div>
                        <div className="text">{ch.text}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="other-content" key={index}>
                      <div className="block">
                        <div className="name">{ch.user}</div>
                        <div className="text">{ch.text}</div>
                      </div>
                    </div>
                  )
                )}
            </Content>
            <Send onSubmit={onSubmitChat}>
              <textarea
                placeholder="내용을 입력하세요"
                value={chatContent}
                onChange={onChangeChat}
                onKeyPress={(e: any) => {
                  return e.charCode === 13 && onSubmitChat(e);
                }}
              />
              <SendButton cyan>전송</SendButton>
            </Send>
          </>
        )}
      </Block>
    </ChattingBlock>
  );
};

export default React.memo(Chatting);
