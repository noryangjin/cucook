import styled from 'styled-components';
import Button from '../../../../components/common/Button';
import palette from '../../palette';
import { Block1, Block2 } from './Refactoring.style';

export const ChatingBlock = styled.div`
  ${Block1}
`;

export const Block = styled.div`
  ${Block2}
  position:relative;
  height: 370px;
  padding: 5px;

  form {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
  }
  button {
    margin-right: 0;
  }
  .pass_cancel {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h4 {
    width: 200px;
    height: 100%;
    margin: 0;

    overflow: auto;
    padding-top: 10px;
  }
  .option {
    width: 70px;
    .button {
      display: flex;
      width: 55px;
      justify-content: flex-end;
      width: 70px;
    }
    .setting {
      margin-top: 4px;
      margin-right: 10px;
      cursor: pointer;
    }
    .cancel {
      cursor: pointer;
    }
    .delete {
      margin-top: 3px;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const Send = styled.form`
  display: flex;
  background: white;
  left: 5px;
  right: 5px;
  bottom: 5px;
  align-items: center;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 1;
  height: 50px;
  textarea {
    width: 100%;
    height: 47px;
    resize: none;
    outline: none;
    border: none;
    border-radius: 4px;
  }
`;

export const SendButton = styled(Button)`
  width: 70px;
  height: 30px;
  margin-right: 5px;
`;

export const Content = styled.div``;

export const Error = styled.div`
  margin-top: 22px;
  color: ${palette.errorColor};
`;