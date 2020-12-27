import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../palette';

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

export const ErrorBlock = styled.div`
  margin-bottom: 5px;
  color: ${palette.errorColor};
`;

export const Spacer = styled.div`
  height: 1.5rem;
`;
