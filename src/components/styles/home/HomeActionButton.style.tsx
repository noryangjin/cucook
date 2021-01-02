import styled from 'styled-components';
import Button from '../../common/Button';

export const HomeActionButtonBlock = styled.div`
  text-align: right;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriteButton = styled(Button)`
  width: 150px;
  height: 30px;
  @media (max-width: 700px) {
    width: 88px;
  }
`;
