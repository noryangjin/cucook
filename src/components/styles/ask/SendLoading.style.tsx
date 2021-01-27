import styled, { css } from 'styled-components';

export const LoadingBlock = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;

  .loading {
    background: #fff;
    padding: 1rem;
    padding-right: 21px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }
`;

export const Span = styled.span<any>`
  margin-left: 5px;
  font-size: 1.125rem;
  transform: scale(0);
  @keyframes loadingAni {
    0% {
      transform: scale(0.7);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(0.7);
    }
  }
  ${(props) =>
    props.val === '1'
      ? css`
          animation-delay: 0.1s;
          animation: loadingAni 1.7s linear infinite;
        `
      : props.val === '2'
      ? css`
          animation: loadingAni 1.7s linear infinite;
          animation-delay: 0.2s;
        `
      : props.val === '3'
      ? css`
          animation: loadingAni 1.7s linear infinite;
          animation-delay: 0.3s;
        `
      : props.val === '4'
      ? css`
          animation: loadingAni 1.7s linear infinite;
          animation-delay: 0.4s;
        `
      : props.val === '5'
      ? css`
          animation: loadingAni 1.7s linear infinite;
          animation-delay: 0.5s;
        `
      : props.val === '6'
      ? css`
          animation: loadingAni 1.7s linear infinite;
          animation-delay: 0.6s;
        `
      : css`
          animation: loadingAni 1.7s linear infinite;
          animation-delay: 0.7s;
        `}
`;
