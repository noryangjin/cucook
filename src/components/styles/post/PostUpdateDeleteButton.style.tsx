import styled from 'styled-components';
import Button from '../../common/Button';

export const ButtonBlock = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: -4px;
  button + button {
    margin-left: 5px;
  }

  @media (max-width: 500px) {
    position: relative;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`;

export const ActionButton = styled(Button)``;
