import {
  AskBlock,
  WrapperForm,
  Button,
  ButtonBlock,
  Alert,
} from '../styles/ask/Ask.style';
import React, { ChangeEvent, FormEvent } from 'react';
import { TitleButton } from '../styles/map/Map.style';
import { WriteButton } from '../styles/home/HomeActionButton.style';
import SendLoading from './SendLoading';

type Props = {
  user: object;
  values: {
    username: string;
    guestEmail: string;
    title: string;
    content: string;
  };
  onClickBack: () => void;
  onClickSend: () => void;
  error: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  loading: boolean;
};

const Ask = ({
  user,
  values,
  onChange,
  error,
  onClickBack,
  onSubmit,
  onClickSend,
  loading,
}: Props) => {
  const { username, guestEmail, title, content } = values;
  return (
    <>
      <SendLoading />
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
        <WrapperForm onSubmit={onSubmit}>
          <div>
            <label>Username</label>
            <input value={username} name="username" onChange={onChange} />
          </div>
          <div>
            <label>Your Email Address</label>
            <input value={guestEmail} name="guestEmail" onChange={onChange} />
          </div>
          <div>
            <label>Title</label>
            <input value={title} name="title" onChange={onChange} />
          </div>
          <div>
            <label>Content</label>
            <textarea value={content} name="content" onChange={onChange} />
          </div>
          {error && <span className="error">{error}</span>}
          <ButtonBlock>
            <Button onClick={onClickSend}>전송</Button>
            <Button onClick={onClickBack}>뒤로 가기</Button>
          </ButtonBlock>
        </WrapperForm>
      </AskBlock>
    </>
  );
};

export default React.memo(Ask);
