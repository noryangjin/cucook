import {
  AskBlock,
  Wrapper,
  Button,
  ButtonBlock,
  Alert,
} from '../styles/ask/Ask.style';
import React from 'react';
import { TitleButton } from '../styles/map/Map.style';
import { WriteButton } from '../styles/home/HomeActionButton.style';

type Props = {
  user: object;
};

const Ask = ({ user }: Props) => {
  return (
    <>
      <TitleButton>
        <h2 style={{ margin: '10px 0' }}>문의하기</h2>
        {user && (
          <WriteButton to="/write" cyan>
            글쓰기
          </WriteButton>
        )}
      </TitleButton>
      <Alert>
        <div>❗ 이메일 주소에 실수가 없는지 확인해 주세요 ❗</div>
        <div>24시간 내로 답변드리겠습니다.</div>
      </Alert>
      <AskBlock>
        <Wrapper>
          <div>
            <label>Username</label>
            <input />
          </div>
          <div>
            <label>Your Email</label>
            <input />
          </div>
          <div>
            <label>Title</label>
            <input />
          </div>
          <div>
            <label>Content</label>
            <textarea />
          </div>
          <ButtonBlock>
            <Button>전송</Button>
            <Button>뒤로 가기</Button>
          </ButtonBlock>
        </Wrapper>
      </AskBlock>
    </>
  );
};

export default React.memo(Ask);
