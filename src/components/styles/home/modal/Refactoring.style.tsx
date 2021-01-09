import { css } from 'styled-components';
import palette from '../../palette';

export const Block1 = css`
  background: rgba(0, 0, 0, 0.2);
  z-index: 30;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const Block2 = css`
  border: 2px solid ${palette.gray[4]};
  border-radius: 4px;
  background: ${palette.Header};
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
