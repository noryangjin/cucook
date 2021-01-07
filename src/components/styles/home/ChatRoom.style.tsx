import styled from 'styled-components';
import palette from '../palette';

export const ChatBlock = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Block = styled.div`
  position: relative;
  border: 1px solid ${palette.cyan[4]};
  border-radius: 4px;
  overflow: auto;
  height: 400px;
`;

export const Header = styled.div`
  margin: 1rem 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${palette.cyan[4]};
  border-radius: 4px;
  height: 45px;
  h4 {
    margin: 0;
  }
`;

export const ChatRoomBlock = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  height: 45px;
  background: white;
  .num,
  .but {
    width: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    width: 300px;
    text-align: center;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
