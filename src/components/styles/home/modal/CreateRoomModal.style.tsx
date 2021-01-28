import styled from 'styled-components';
import palette from '../../palette';
import { Block1, Block2 } from './Refactoring.style';

export const CreateRoomModalBlock = styled.div`
  ${Block1}
`;

export const Block = styled.div`
  ${Block2}
  justify-content: center;
  height: 300px;
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
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
    width: 210px;
    height: 180px;
    flex-direction: column;
  }
  .buttonBox {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    button + button {
      margin-left: 1rem;
    }
    button {
      width: 100%;
    }
  }
`;

export const Error = styled.div`
  color: ${palette.errorColor};
  margin-top: 10px;
  text-align: center;
`;
