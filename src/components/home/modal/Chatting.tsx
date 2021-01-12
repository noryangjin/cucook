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
import { BsLockFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';

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
  user: any;
  checkMem: boolean | null;
  onClickMem: () => void;
};

const Chatting = ({
  checkMem,
  onClickMem,
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
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chats, room]);

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
                  <div className="setting_box">
                    {room && room.password && (
                      <div>
                        <BsLockFill />
                      </div>
                    )}
                    <div onClick={onClickMem} className="member">
                      <BsPeopleFill />
                      {checkMem && room && (
                        <div className="mem_list">
                          &lt;참여 인원&gt;
                          {room.participants.map((ro: any) => (
                            <div key={ro._id} className="mem">
                              {ro.user.username}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <IoMdOptions onClick={onClickOption} />
                    </div>
                  </div>
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
              <div ref={messagesRef}>
                {room &&
                  room.chat.map((ch: any) =>
                    room.participants.map((ro: any) => {
                      return ro.createAt <= ch.createAt
                        ? ro.user._id === user._id && (
                            <div key={ch._id}>
                              {ch.user._id === user._id ? (
                                <div className="my-content" key={ch._id}>
                                  <div className="block">
                                    <div className="name">
                                      {ch.user.username}
                                    </div>
                                    <div
                                      className="text"
                                      style={{ background: '#dee2e6' }}
                                    >
                                      {ch.chat}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="other-content" key={ch._id}>
                                  <div className="block">
                                    <div className="name">
                                      {ch.user.username}
                                    </div>
                                    <div
                                      className="text"
                                      style={{ background: '#dee2e6' }}
                                    >
                                      {ch.chat}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        : null;
                    })
                  )}
              </div>
              {chats &&
                chats.map((ch: any, index: number) =>
                  ch.chat ? (
                    <div className="welcome" key={index}>
                      {ch.chat}
                    </div>
                  ) : ch.user === user.username ? (
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
