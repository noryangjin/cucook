import React from 'react';
import {
  ChatingBlock,
  Block,
  Send,
  SendButton,
  Title,
  Content,
} from '../../styles/home/modal/Chating.style';
import { IoMdOptions } from 'react-icons/io';

type Props = {
  onCancel: () => void;
  onClickOption: () => void;
  option: boolean | null;
  onLeaveRoom: () => void;
};

const Chating = ({ onCancel, onClickOption, option, onLeaveRoom }: Props) => {
  return (
    <ChatingBlock>
      <Block>
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
        <Content></Content>
        <Send>
          <textarea placeholder="내용을 입력하세요" />
          <SendButton cyan>전송</SendButton>
        </Send>
      </Block>
    </ChatingBlock>
  );
};

export default React.memo(Chating);
