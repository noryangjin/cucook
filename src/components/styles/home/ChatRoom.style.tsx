import styled from 'styled-components';
import Button from '../../common/Button';

export const ChatBlock = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
`;

export const Block = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: auto;
  height: 375px;
  padding: 5px;
`;

export const Header = styled.div`
  margin-top: 1rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 45px;
  h4 {
    margin: 0;
    margin-left: 5px;
  }
`;

export const CreateChatButton = styled(Button)`
  width: 100px;
  height: 30px;
  margin-right: 5px;
`;

export const ChatRoomBlock = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  & + & {
    margin-top: 5px;
  }
  display: flex;
  height: 50px;
  background: white;
  .num,
  .but {
    width: 50px;
    margin: auto 0;
    padding: 10px;
  }
  .but {
    text-align: right;
    cursor: pointer;
  }
  .title {
    width: 300px;
    text-align: center;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lock {
    margin: auto 0;
    width: 16px;
  }
`;

export const Search = styled.div`
  margin: 10px 0;
  input {
    outline: none;
    width: 100%;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 5px;
    border-radius: 4px;
    height: 23px;
    font-size: 1rem;
  }
`;
