import {
  CreateRoomModalBlock,
  Block,
} from '../../styles/home/modal/CreateRoomModal.style';
import Button from '../../common/Button';

type Props = {
  passwordButton: null | boolean;
  onPasswordButton: () => void;
};

const CreateRoomModal = ({ passwordButton, onPasswordButton }: Props) => {
  return (
    <CreateRoomModalBlock>
      <Block>
        <div className="inputBox">
          <h4>방 생성</h4>
          <input placeholder="방 제목을 입력하세요" />
          <label>
            인원 수 설정
            <input
              style={{ marginLeft: '1rem' }}
              type="number"
              min="2"
              max="10"
              defaultValue="2"
            />
          </label>
          <label>
            비밀번호
            <input
              style={{ marginLeft: '1rem' }}
              type="checkbox"
              onClick={onPasswordButton}
            />
          </label>
          {passwordButton && (
            <input
              style={{ marginTop: '1rem' }}
              type="password"
              placeholder="비밀번호를 설정 하세요(선택)"
            />
          )}
        </div>
        <div className="buttonBox">
          <Button>확인</Button>
          <Button>취소</Button>
        </div>
      </Block>
    </CreateRoomModalBlock>
  );
};

export default CreateRoomModal;
