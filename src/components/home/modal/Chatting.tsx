import React, { ChangeEvent, FormEvent } from 'react';
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
}: Props) => {
  return (
    <ChattingBlock>
      <Block>
        {checkPass &&
        checkPass.filter((id) => id === chatRoomId).length > 0 &&
        !room ? (
          <>
            <h4>비밀 번호</h4>
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
              <h4>sss</h4>
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
            <Content>
              {chats &&
                chats.map((ch: any, index: number) =>
                  ch.chat ? (
                    <div key={index}>{ch.chat}</div>
                  ) : (
                    <div key={index}>
                      {ch.user}
                      {ch.text}
                    </div>
                  )
                )}
            </Content>
            <Send onSubmit={onSubmitChat}>
              <textarea
                placeholder="내용을 입력하세요"
                value={chatContent}
                onChange={onChangeChat}
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
