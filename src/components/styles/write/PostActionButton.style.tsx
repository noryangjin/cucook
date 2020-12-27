import styled from 'styled-components';
import Button from '../../common/Button';

export const PostActionButtonBlock = styled.div`
  margin: 0 5px;
  margin-top: 2rem;
  button + button {
    margin-left: 2rem;
  }
  @media (max-width: 450px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0;
  }
`;

export const ActionButton = styled(Button)`
  width: 150px;
`;

export const Spacer = styled.div`
  height: 1.5rem;
`;
