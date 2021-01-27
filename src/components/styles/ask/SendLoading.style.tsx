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

  span::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    animation: loadingAnimate 2s linear infinite;
    transform: scale(0);
    @keyframes loadingAnimate {
      0% {
        transform: scale(0);
      }
      10% {
        transform: scale(1.2);
      }
      80% {
        background: red;
        transform: scale(0);
      }
      100% {
        transform: scale(0);
      }
    }
  }

  .loading {
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
  }
`;

export const Span = styled.span<any>`
  ${(props) =>
    props.val === '1'
      ? css`
          transform: rotate(calc(18deg));
        `
      : props.val === '2'
      ? css`
          transform: rotate(calc(36deg));
        `
      : props.val === '3'
      ? css`
          transform: rotate(calc(54deg));
        `
      : props.val === '4'
      ? css`
          transform: rotate(calc(72deg));
        `
      : props.val === '5'
      ? css`
          transform: rotate(calc(90deg));
        `
      : props.val === '6'
      ? css`
          transform: rotate(calc(108deg));
        `
      : props.val === '7'
      ? css`
          transform: rotate(calc(126deg));
        `
      : props.val === '8'
      ? css`
          transform: rotate(calc(144deg));
        `
      : props.val === '9'
      ? css`
          transform: rotate(calc(162deg));
        `
      : props.val === '10'
      ? css`
          transform: rotate(calc(180deg));
        `
      : props.val === '11'
      ? css`
          transform: rotate(calc(198deg));
        `
      : props.val === '12'
      ? css`
          transform: rotate(calc(216deg));
        `
      : props.val === '13'
      ? css`
          transform: rotate(calc(234deg));
        `
      : props.val === '14'
      ? css`
          transform: rotate(calc(252deg));
        `
      : props.val === '15'
      ? css`
          transform: rotate(calc(270deg));
        `
      : props.val === '16'
      ? css`
          transform: rotate(calc(288deg));
        `
      : props.val === '17'
      ? css`
          transform: rotate(calc(306deg));
        `
      : props.val === '18'
      ? css`
          transform: rotate(calc(324deg));
        `
      : props.val === '19'
      ? css`
          transform: rotate(calc(342deg));
        `
      : css`
          transform: rotate(calc(360deg));
        `}
`;
