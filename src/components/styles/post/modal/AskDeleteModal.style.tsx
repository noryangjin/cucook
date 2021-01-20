import styled from 'styled-components';
import Button from '../../../../components/common/Button';

export const AskDeleteModalBlock = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  z-index: 20;
  .buttonBlock {
    display: flex;
    margin: 1rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 300px;
  background: white;
  border-radius: 5px;
  height: 170px;
  padding: 5px;

  button + button {
    margin-left: 5px;
  }
`;

export const ModalButton = styled(Button)`
  width: 100%;
`;
