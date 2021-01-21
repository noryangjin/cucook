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
`;

export const ActionButton = styled(Button)``;
