import styled from 'styled-components';
import palette from '../../palette';

export const CreateRoomModalBlock = styled.div`
  background: rgba(0, 0, 0, 0.2);
  z-index: 30;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const Block = styled.div`
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  border: 2px solid ${palette.gray[4]};
  border-radius: 4px;
  background: ${palette.Header};
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    border: none;
    border: 2px solid ${palette.gray[4]};
    outline: none;
    border-radius: 4px;
  }
  label {
    margin-top: 1rem;
  }

  .inputBox {
    display: flex;
    width: 100%;
    height: 200px;
    flex-direction: column;
    padding: 0 1rem;
  }
  .buttonBox {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    button + button {
      margin-left: 1rem;
    }
  }
`;
