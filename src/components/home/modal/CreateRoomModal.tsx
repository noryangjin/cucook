import {
  CreateRoomModalBlock,
  Block,
  Error,
} from '../../styles/home/modal/CreateRoomModal.style';
import Button from '../../common/Button';
import React, { ChangeEvent, FormEvent } from 'react';

type Props = {
  passwordButton: null | boolean;
  onPasswordButton: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  max: number;
  password: string;
  onCancel: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  error: string;
};

const CreateRoomModal = ({
  passwordButton,
  onPasswordButton,
  onChange,
  onSubmit,
  title,
  max,
  password,
  onCancel,
  error,
}: Props) => {
  return (
    <CreateRoomModalBlock>
      <Block>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <h4>방 생성</h4>
            <input
              placeholder="방 제목을 입력하세요"
              name="title"
              onChange={onChange}
              value={title}
            />
            <label style={{ display: 'flex' }}>
              인원 수 설정
              <input
                style={{ marginLeft: '1rem', width: '103px' }}
                name="max"
                onChange={onChange}
                value={max}
                type="number"
                min="2"
                max="10"
              />
            </label>
            <label
              style={{ display: 'flex', alignItems: 'center', height: '22px' }}
            >
              비밀번호
              <input
                style={{ marginLeft: '5px' }}
                type="checkbox"
                onClick={onPasswordButton}
              />
              {passwordButton && (
                <input
                  name="password"
                  onChange={onChange}
                  value={password}
                  style={{ marginLeft: '1rem', width: '108px' }}
                  type="password"
                  placeholder="비밀번호"
                />
              )}
            </label>
            <div style={{ width: '100%', height: '25px' }}>
              {error && <Error>{error}</Error>}
            </div>
          </div>
          <div className="buttonBox">
            <Button>확인</Button>
            <Button onClick={onCancel}>취소</Button>
          </div>
        </form>
      </Block>
    </CreateRoomModalBlock>
  );
};

export default React.memo(CreateRoomModal);
