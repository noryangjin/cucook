import styled from 'styled-components';
import palette from '../palette';

export const ChatBlock = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  background: white;
`;

export const Block = styled.div`
  border: 1px solid ${palette.cyan[4]};
  border-radius: 4px;
  overflow: auto;
  height: 400px;
`;

export const Header = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${palette.cyan[4]};
  border-radius: 4px;
  h4 {
    margin: 0;
  }
`;

export const ChatRoomBlock = styled.div``;
