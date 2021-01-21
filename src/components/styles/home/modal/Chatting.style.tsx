import styled, { css } from 'styled-components';
import Button from '../../../common/Button';
import palette from '../../palette';
import { Block1, Block2 } from './Refactoring.style';

export const ChattingBlock = styled.div`
  ${Block1}
`;

export const Block = styled.div`
  ${Block2}
  position:relative;
  height: 430px;
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
    max-height: 50px;
    margin: auto 0;
    overflow: auto;
    @media (max-width: 1024px) {
      width: 150px;
    }
  }
  .option {
    width: 70px;
    .button {
      display: flex;
      width: 55px;
      justify-content: flex-end;
      width: 70px;
    }
    .setting_box {
      display: flex;
      align-items: center;
      div {
        margin-top: 3px;
        margin-right: 10px;
      }
      .option_Icon {
        cursor: pointer;
      }
      .member {
        position: relative;
        cursor: pointer;
        .mem_list {
          overflow-y: auto;
          word-break: break-all;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          width: 150px;
          height: 200px;
          text-align: center;
          background: white;
          position: absolute;

          left: -75px;
          top: 19px;
          .mem {
            margin-right: 0;
            margin: 0 5px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            &:hover {
              color: ${palette.cyan[4]};
            }
          }
        }
      }
    }
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
`;

const text_ = css`
  box-shadow: 1.2px 2px 2px ${palette.gray[6]};
  padding: 5px;
  border-radius: 10px;
  text-align: right;
  word-break: break-all;
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

export const Content = styled.div`
  width: 100%;
  height: 315px;
  overflow-y: auto;
  padding: 0 5px;
  padding-bottom: 5px;
  .welcome {
    color: ${palette.gray[6]};
    text-align: center;
    margin: 5px 0;
  }

  .my-content {
    display: flex;
    justify-content: flex-end;
    .block {
      margin-top: 5px;
      .name {
        text-align: right;
      }
      .text {
        background: yellow;
        ${text_}
      }
    }
  }

  .other-content {
    display: flex;
    .block {
      margin-top: 5px;
      .text {
        background: white;
        ${text_}
      }
    }
  }
`;

export const Error = styled.div`
  margin-top: 22px;
  color: ${palette.errorColor};
`;
